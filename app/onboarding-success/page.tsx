"use client";

import { useEffect, useState } from "react";

export default function OnboardingSuccessPage() {
  const [status, setStatus] = useState<"verifying" | "success" | "failed">("verifying");

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/checkout/verify-account`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch {
        setStatus("failed");
      }
    };

    verifyAccount();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        {status === "verifying" && (
          <>
            <h1 className="text-xl font-medium text-gray-800 mb-4">Verifying your account...</h1>
            <p className="text-gray-600">Please wait while we confirm your onboarding.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-semibold text-green-600 mb-4">Onboarding Complete!</h1>
            <p className="text-gray-700 mb-6">
              Your Stripe account has been successfully verified. You can now receive payments.
            </p>
            <a
            href={`${process.env.NEXT_PUBLIC_PORTAL}/dashboard/doctor`}
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
            Go to Dashboard
            </a>

          </>
        )}

        {status === "failed" && (
          <>
            <h1 className="text-2xl font-semibold text-red-600 mb-4">Verification Failed</h1>
            <p className="text-gray-600 mb-6">
              We couldn’t confirm your Stripe onboarding. Please try again or contact support.
            </p>
            <a
              href="/onboard"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Retry Onboarding
            </a>
          </>
        )}
      </div>
    </div>
  );
}
