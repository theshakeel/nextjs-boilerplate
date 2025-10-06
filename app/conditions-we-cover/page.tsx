"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ConditionsPage() {
  const conditions = [
    "Skin rashes & dermatology advice",
    "Nutrition & lifestyle counseling",
    "Interpretation of lab results",
    "General drug interaction information",
    "Second opinions on diagnoses",
    "Report review & treatment advice",
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
          What We Cover
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Get expert help for non-emergency health issues — all from the comfort
          of your home.
        </motion.p>
      </section>

      {/* Conditions List */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start space-x-3 bg-gray-900/50 border border-gray-700 p-4 rounded-xl hover:border-cyan-500 transition"
            >
              <CheckCircle className="text-cyan-400 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-200">{condition}</p>
            </motion.div>
          ))}
        </div>

        {/* Exclusion Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-400">
            ⚠️ <span className="font-semibold">Important:</span> Emergency or
            life-threatening situations are not covered by our service.  
            In such cases, please call your local emergency number (112) or go
            to the nearest hospital.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
