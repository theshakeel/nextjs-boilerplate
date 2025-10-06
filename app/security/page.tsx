"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, KeyRound, Database } from "lucide-react";

export default function SecurityPage() {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: "End-to-End Encryption",
      desc: "All data, including patient reports and doctor notes, is encrypted in transit and at rest using modern standards.",
    },
    {
      icon: <KeyRound className="w-6 h-6 text-purple-400" />,
      title: "Role-Based Access",
      desc: "Only authorized users can access sensitive data. Each account is scoped to its role — patient, doctor, or admin.",
    },
    {
      icon: <Database className="w-6 h-6 text-pink-400" />,
      title: "Auditable Records",
      desc: "All transactions, document uploads, and treatment actions are logged for accountability and traceability.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-green-400" />,
      title: "Compliance-Ready",
      desc: "We follow best practices aligned with HIPAA/GDPR standards and continuously update our platform for regulatory compliance.",
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
          How We Protect Your Data
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Your privacy and security are our highest priorities. We use
          enterprise-grade infrastructure, encryption, and access controls to
          safeguard every piece of information shared on the platform.
        </motion.p>
      </section>

      {/* Security Features */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400 transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <ShieldCheck className="w-8 h-8 mx-auto text-cyan-400 mb-4" />
          <p className="text-sm text-gray-400">
            We regularly conduct security reviews, penetration tests, and
            infrastructure monitoring to proactively detect and mitigate risks.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
