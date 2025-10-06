"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-cyan-900/30 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight gradient-text"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mt-4"
          >
            XHOSPITAL is a healthcare platform that brings together distinguished
            professors and experienced doctors. Our mission is to connect patients
            with the right specialists at the most affordable cost — only for
            conditions that can be addressed through remote support.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 space-y-10">
          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-300 leading-relaxed text-center"
          >
            We believe that quality and accessible healthcare is a right for
            everyone. That’s why at XHOSPITAL we provide:
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Top Specialists",
                desc: "We work with experienced and reliable physicians from across the country.",
                icon: "🩺",
              },
              {
                title: "Fair & Transparent Fees",
                desc: "View all costs clearly before the consultation begins — no hidden charges.",
                icon: "💲",
              },
              {
                title: "Secure Communication",
                desc: "All consultations are conducted over encrypted channels with full data protection.",
                icon: "🔒",
              },
              {
                title: "Easy Access",
                desc: "Select a doctor, upload your documents, and start your consultation in just a few steps.",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-300 text-lg leading-relaxed mt-10"
          >
            XHOSPITAL offers fast, reliable, and high-quality solutions for
            non-emergency health issues. <br />
            Our most important value is to build a trustworthy, transparent, and
            accessible bridge between patients and doctors.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
