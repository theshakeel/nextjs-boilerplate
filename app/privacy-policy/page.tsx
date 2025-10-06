"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Mail, Building, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 6, 2025";

  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p className="text-gray-300">
            We may collect the following categories of information:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300">
            <li>
              <strong>Personal Identification Data:</strong> Full name, date of
              birth, and contact details (email, phone number).
            </li>
            <li>
              <strong>Account & Login Information:</strong> Username, password,
              and authentication tokens.
            </li>
            <li>
              <strong>Medical & Consultation Information (Limited Scope):</strong>{" "}
              Medical documents, test results, and reports you choose to share
              with your doctor. Consultation notes and messages between patients
              and doctors.
            </li>
            <li>
              <strong>Payment Information:</strong> Billing details and payment
              confirmations, securely processed through third-party providers
              such as Stripe. We do not store full card details.
            </li>
            <li>
              <strong>Technical & Usage Data:</strong> IP address, browser type,
              operating system, and log data about your activity within the
              platform.
            </li>
            <li>
              <strong>Marketing & Communication Preferences:</strong> Your
              consent choices regarding newsletters, updates, and promotional
              messages.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>To create and manage your account.</li>
          <li>To connect patients with appropriate doctors for consultations.</li>
          <li>To securely share documents and facilitate communication.</li>
          <li>To process payments and issue receipts.</li>
          <li>To provide customer support and respond to inquiries.</li>
          <li>To comply with legal and regulatory obligations.</li>
          <li>
            To send updates and promotional content (only with your explicit
            consent).
          </li>
        </ul>
      ),
    },
    {
      title: "3. Data Retention",
      content: (
        <p className="text-gray-300">
          We retain personal data only as long as necessary for the purposes
          stated above. Medical documents and consultation data are stored until
          the user deletes them or until retention periods required by
          applicable law expire. Account-related information may be retained for
          legal, tax, or auditing purposes, even after account closure.
        </p>
      ),
    },
    {
      title: "4. Data Sharing",
      content: (
        <>
          <p className="text-gray-300">
            We may share your data under the following circumstances:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300">
            <li>
              <strong>With Healthcare Providers:</strong> Doctors you choose to
              consult with will have access to the information you share.
            </li>
            <li>
              <strong>With Service Providers:</strong> Trusted third-party
              vendors such as hosting providers, payment processors (Stripe),
              and communication providers.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or regulatory authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of a merger,
              acquisition, or restructuring, your data may be transferred with
              safeguards.
            </li>
          </ul>
          <p className="mt-3 text-gray-300">
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
        </>
      ),
    },
    {
      title: "5. Security of Your Information",
      content: (
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Encryption during transmission and storage.</li>
          <li>Role-based access controls.</li>
          <li>Regular system monitoring and audits.</li>
          <li>Secure data hosting and backups.</li>
        </ul>
      ),
    },
    {
      title: "6. Your Rights",
      content: (
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Access & Portability — Request a copy of your personal data.</li>
          <li>Correction — Update or fix inaccurate information.</li>
          <li>
            Deletion — Request deletion of your account or certain data (subject
            to legal limitations).
          </li>
          <li>Restriction — Limit how your data is processed.</li>
          <li>
            Withdrawal of Consent — Opt out of marketing communications anytime.
          </li>
        </ul>
      ),
    },
    {
      title: "7. Children’s Privacy",
      content: (
        <p className="text-gray-300">
          Our platform is intended for adults (18+). We do not knowingly collect
          data from minors. If we discover such data, we will delete it
          promptly.
        </p>
      ),
    },
    {
      title: "8. International Data Transfers",
      content: (
        <p className="text-gray-300">
          If you access our services outside the United States, your information
          may be transferred and stored in countries with different data
          protection laws. We ensure appropriate safeguards are in place.
        </p>
      ),
    },
    {
      title: "9. Changes to This Policy",
      content: (
        <p className="text-gray-300">
          We may update this Privacy Policy periodically. Major changes will be
          communicated via email or platform notifications. The revised version
          becomes effective upon publication.
        </p>
      ),
    },
    {
      title: "10. Contact Us",
      content: (
        <div className="text-gray-300 space-y-2">
          <p>XHOSPITAL LLC</p>
          <p>30 N Gould St #45372, Sheridan, WY 82801, United States</p>
          <p>
            📧 <a href="mailto:privacy@xhospital.org" className="text-cyan-400">privacy@xhospital.org</a>
          </p>
          <p>📞 +1 815-982-3054</p>
        </div>
      ),
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight gradient-text"
        >
          Privacy Policy
        </motion.h1>
        <p className="mt-4 text-gray-400 text-sm">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-16 max-w-4xl mx-auto space-y-12">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              {sec.title}
            </h2>
            <div className="text-gray-300 leading-relaxed">{sec.content}</div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Shield className="w-8 h-8 mx-auto text-cyan-400 mb-4" />
          <p className="text-gray-400 text-sm">
            We value your trust and are committed to keeping your information
            safe and private at every step.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
