"use client";

import { motion } from "framer-motion";
import { CalendarClock, FileSearch, ClipboardList, DollarSign } from "lucide-react";

export default function DoctorPortalPage() {
  const sections = [
    {
      icon: <CalendarClock className="w-6 h-6 text-cyan-400" />,
      title: "Set Your Availability",
      desc: "Easily define your available hours and days so patients can schedule consultations that work for you.",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-purple-400" />,
      title: "Secure Document Access",
      desc: "Review patient-uploaded reports and test results in a protected, encrypted environment.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-pink-400" />,
      title: "Manage Consultations",
      desc: "Track ongoing sessions, respond to new requests, and keep records of completed cases.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "View Payment Summaries",
      desc: "Get clear, real-time insights into your earnings and payment history with downloadable reports.",
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
          Doctor Portal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Manage your schedule, consultations, and payments — all in one
          streamlined and secure dashboard.
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
              className="flex items-start space-x-4 bg-gray-900/50 border border-gray-700 p-5 rounded-xl hover:border-purple-500 transition"
            >
              {section.icon}
              <div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{section.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Policy Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-400">
            🔒 All communication and transactions are logged for transparency. 
            Off-record consultations are discouraged to ensure compliance and trust.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
