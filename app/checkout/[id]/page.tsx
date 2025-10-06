"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
const API = process.env.NEXT_PUBLIC_API
const PORTAL = process.env.NEXT_PUBLIC_PORTAL
const stripePromise = typeof window !== "undefined" && process.env.NEXT_PUBLIC_STRIPE_PK
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)
  : null;

type LinkDetails = {
  id: string;
  userId: string;
  amount: number; // in cents
  currency: string;
  type?: string;
  description?: string;
};


export default function PaymentPage() {
  const { id } = useParams(); // this gives you the dynamic route param
  const params = useSearchParams();
  const router = useRouter();

  const linkId = (id as string) || ""; // dynamic path param
  const sessionId = params?.get("session_id") || ""; // query param from Stripe
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState<LinkDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);

  useEffect(() => {
    if (!linkId) {
      setError("Missing link id in URL (?id=LINK_ID).");
      return;
    }

    // If Stripe returned session_id, verify
    if (sessionId) {
      verifySession(sessionId, linkId);
      return;
    }

    // otherwise fetch link details from your DB
    fetchLinkDetails(linkId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkId, sessionId]);

  async function fetchLinkDetails(id: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/checkout/payment-link/${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error(`Failed to fetch payment link (${res.status})`);
      const data = await res.json();
      setLink(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load payment link.");
    } finally {
      setLoading(false);
    }
  }

async function createCheckoutSession() {
  if (!linkId) return setError("Invalid link id");
  setCreating(true);
  setError(null);

  try {
    const res = await fetch(`${API}/api/checkout/create-checkout-session`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ linkId }),
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Create session failed: ${txt || res.status}`);
    }

    const json = await res.json();
    if (!json.checkoutUrl) throw new Error("No checkoutUrl returned from server");

    // 🔴 OLD (deprecated):
    // const stripe = await stripePromise;
    // if (!stripe) throw new Error("Stripe not initialized. Set NEXT_PUBLIC_STRIPE_PK");
    // const { error: stripeErr } = await stripe.redirectToCheckout({ sessionId: json.sessionId });
    // if (stripeErr) throw new Error(stripeErr.message || "Stripe redirect failed");

    // 🟢 NEW (Stripe recommends direct redirect now)
    window.location.href = json.checkoutUrl;

  } catch (err: any) {
    console.error(err);
    setError(err.message || "Failed to start checkout");
    setCreating(false);
  }
}


  // Verify session server-side and then call confirm
  async function verifySession(sessionIdParam: string, linkIdParam: string) {
    setVerifying(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/checkout/verify-session?session_id=${encodeURIComponent(sessionIdParam)}&linkId=${encodeURIComponent(linkIdParam)}`);
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`verify failed: ${txt || res.status}`);
      }
      const data = await res.json();
      if (data?.paid) {
        setVerified(true);
        setPaymentIntentId(data.paymentIntentId || null);

        // Confirm payment in your DB & activate user
        // server will re-verify session/paymentIntent to avoid spoofing
        const confirmRes = await fetch(`${API}/api/checkout/confirm-payment`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            sessionId: sessionIdParam,
            linkId: linkIdParam,
            paymentIntentId: data.paymentIntentId || null,
            userId: data.session?.client_reference_id || data.userId || null,
          }),
        });
        if (!confirmRes.ok) {
          const txt = await confirmRes.text();
          throw new Error(`confirm failed: ${txt || confirmRes.status}`);
        }
        const confirmJson = await confirmRes.json();
        console.log("confirm response", confirmJson);
        window.location.href = `${process.env.PORTAL}/dashboard`;
      } else {
        setVerified(false);
        setError("Payment not completed.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Verification error");
      setVerified(false);
    } finally {
      setVerifying(false);
    }
  }

  function formatCurrency(amount: number, currency: string) {
    try {
      return new Intl.NumberFormat(undefined, { style: "currency", currency: currency.toUpperCase() }).format(amount / 100);
    } catch {
      return `${(amount / 100).toFixed(2)} ${currency.toUpperCase()}`;
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2">Complete Payment</h1>
        <p className="text-sm text-gray-600 mb-6">Payment Link: <span className="font-mono">{linkId}</span></p>

        {loading && <div className="py-8 text-center text-gray-500">Loading…</div>}
        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">{error}</div>}

        {sessionId && (
          <div className="mb-6">
            <h2 className="text-lg font-medium">Verifying payment…</h2>
            <div className="w-full bg-gray-200 h-3 rounded overflow-hidden mt-3">
              <div className="h-3 bg-green-500" style={{ width: verifying ? "60%" : verified ? "100%" : "0%" }} />
            </div>
            {verifying && <p className="text-sm text-gray-500 mt-2">Checking Stripe session…</p>}
            {verified === true && <div className="mt-4 p-4 bg-green-50 text-green-800 rounded">Payment successful ✅ (PaymentIntent: <span className="font-mono">{paymentIntentId}</span>)</div>}
            {verified === false && <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded">Payment not completed. Contact support.</div>}
          </div>
        )}

        {!sessionId && !loading && link && (
          <>
            <div className="mb-6 p-4 border rounded-md bg-gray-50">
              <h2 className="text-lg font-semibold">{link.type || "Registration Fee"}</h2>
              <p className="text-sm text-gray-600">{link.description || "Pay to activate account."}</p>
              <div className="mt-4 flex items-baseline space-x-4">
                <div className="text-3xl font-bold">{formatCurrency(link.amount, link.currency)}</div>
                {/* <div className="text-sm text-gray-500">for user <span className="font-mono">{link.userId}</span></div> */}
              </div>
            </div>

            <div className="space-y-3">
              <button onClick={createCheckoutSession} disabled={creating} className={`w-full px-4 py-3 rounded-md text-white ${creating ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}>
                {creating ? "Redirecting…" : "Pay with Card (Stripe Checkout)"}
              </button>
              <div className="text-xs text-gray-500">After payment you'll be redirected back and we'll verify & activate the user.</div>
            </div>
          </>
        )}

        {!sessionId && !loading && !link && !error && <div className="py-8 text-center text-gray-500">No payment link found.</div>}

      </div>
    </main>
  );
}
