"use client";
import { useEffect, useState } from "react";

export default function OnboardPage() {
  const [status, setStatus] = useState("Verifying...");
  const [onboardUrl, setOnboardUrl] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) return setStatus("Missing onboarding token.");

    fetch(`${process.env.NEXT_PUBLIC_API}/api/checkout/verify-onboard-token?token=${token}`)
      .then((res) => res.json())
      .then(async (data) => {
        if (!data.valid) return setStatus("Unauthorized or expired token.");

        // Valid → Create connect link
        const res2 = await fetch(`${process.env.NEXT_PUBLIC_API}/api/checkout/connect-link`, {
          method: "POST",
          headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
        });
        const json = await res2.json();
        if (json.url) {
          setOnboardUrl(json.url);
          window.location.href = json.url; // auto redirect
        } else {
          setStatus("Failed to create Stripe link.");
        }
      })
      .catch(() => setStatus("Error verifying token."));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Stripe Onboarding</h1>
        <p>{status}</p>
        {onboardUrl && (
          <a
            href={onboardUrl}
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Continue to Stripe
          </a>
        )}
      </div>
    </div>
  );
}
