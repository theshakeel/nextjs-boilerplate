"use client";

import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-16">
      {/* Hero / Title */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight gradient-text"
        >
          Transparent Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Simple, clear fees — no surprises. Pay securely and know what you are
          getting before you begin.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Standard Consultation",
              price: "$50",
              desc: "Starting fee for 15 minutes of consultation with a verified doctor.",
            },
            {
              title: "Second Opinion",
              price: "$50",
              desc: "Includes report review and a written evaluation from a specialist.",
            },
            {
              title: "Custom Packages",
              price: "Varies",
              desc: "Packages may differ by specialty and are displayed on doctor profiles.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-3">
                {item.title}
              </h3>
              <p className="text-3xl font-black mb-2">{item.price}</p>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-400 mt-10 text-sm"
        >
          All payments are made securely. No hidden fees. Receipts are provided
          instantly.
        </motion.p>
      </section>
    </main>
  );
}
