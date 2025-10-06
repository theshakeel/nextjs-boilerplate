"use client";

import { motion } from "framer-motion";
import { Brain, Files, SearchCheck, ShieldCheck } from "lucide-react";

export default function AiOverviewPage() {
  const features = [
    {
      icon: <Files className="w-6 h-6 text-cyan-400" />,
      title: "Smart Document Organization",
      desc: "AI automatically groups reports, lab results, and patient notes for easier access during consultations.",
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-purple-400" />,
      title: "Topic Classification",
      desc: "Helps categorize patient issues (e.g., dermatology, nutrition, lab interpretation) so doctors can respond faster.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
      title: "No Diagnosis — Only Support",
      desc: "AI suggestions are just that — suggestions. All medical decisions are made by licensed doctors, not AI.",
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
          How AI Helps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Our AI system helps doctors stay organized and respond faster —
          without replacing clinical judgment or making medical decisions.
        </motion.p>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

        {/* Compliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-400">
            ⚠️ AI is a supportive tool and does not provide medical diagnoses or treatment recommendations.
            All final decisions rest with the physician.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
