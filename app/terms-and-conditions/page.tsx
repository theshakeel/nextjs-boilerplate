"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms of Use
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          These Terms of Use govern your use of our platform and services. By
          using our site, you agree to these terms. Please read them carefully.
        </p>
      </section>

      {/* Content Section */}
      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-8 text-gray-300">
        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            1. Service Scope
          </h2>
          <p>
            Our platform connects patients with licensed physicians for
            non-emergency health consultations that can be provided remotely.
            The service is not a replacement for in-person care in urgent or
            life-threatening conditions. Always call your local emergency number
            (for example, 112) if you require immediate medical attention.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            2. User Responsibilities
          </h2>
          <p>
            You agree to provide accurate information during registration,
            maintain the confidentiality of your login credentials, and use the
            platform only for lawful purposes. You must not attempt to disrupt,
            reverse-engineer, or misuse the platform or its services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            3. Fees & Payments
          </h2>
          <p>
            All pricing is displayed transparently before confirming a
            consultation. Payments are processed securely via our integrated
            payment system. Refunds may be available if services were not
            delivered or canceled according to our refund policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            4. Data Protection
          </h2>
          <p>
            We follow best practices to secure your personal and health data.
            For more information on how we handle data, please review our{" "}
            <Link href="/privacy" className="text-cyan-400 underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            5. Limitations of Liability
          </h2>
          <p>
            While we strive to provide a reliable and secure platform, we are
            not liable for delays, interruptions, or errors caused by factors
            outside of our control. Medical decisions are solely the
            responsibility of the consulting physician.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            6. Changes to Terms
          </h2>
          <p>
            We may update these Terms from time to time to reflect changes in
            our services, legal requirements, or business practices. Continued
            use of the platform after changes indicates your acceptance of the
            updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-teal-400 mb-2">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, you can contact us via
            our{" "}
            <Link href="/contact" className="text-cyan-400 underline">
              Contact Page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
