"use client";

import { motion } from "framer-motion";
import { FileUp, Calendar, CreditCard, LogIn } from "lucide-react";

export default function PatientPortalPage() {
  const sections = [
    {
      icon: <LogIn className="w-6 h-6 text-cyan-400" />,
      title: "Login / Signup",
      desc: "Securely access your personal dashboard with 2-step authentication support.",
    },
    {
      icon: <FileUp className="w-6 h-6 text-purple-400" />,
      title: "Upload Documents",
      desc: "Easily share reports and test results with your doctor for review.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-pink-400" />,
      title: "Manage Appointments",
      desc: "View upcoming consultations, reschedule, or cancel directly from your dashboard.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-400" />,
      title: "Payment History",
      desc: "Track payments, view invoices, and download receipts for your consultations.",
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
          Patient Portal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Manage consultations, share documents, and review your appointment history — 
          all in one secure place.
        </motion.p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-4 bg-gray-900/50 border border-gray-700 p-5 rounded-xl hover:border-cyan-500 transition"
            >
              {section.icon}
              <div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{section.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-400">
            ⚠️ This portal is intended for conditions suitable for remote support.
            For emergencies or in-person care requirements, you will be guided to the proper resources.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
