"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight gradient-text">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            Use the contact form for your questions. For topics such as
            appointments and pricing, you will get the fastest response here.
          </p>
          <p className="mt-4 text-sm text-red-400">
            ⚠️ Do not use this form for emergencies — call{" "}
            <span className="font-bold">112</span>.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <form className="bg-gray-900/60 border border-gray-700 rounded-2xl shadow-lg p-8 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white/80">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white/80">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white/80">
                Subject
              </label>
              <input
                type="text"
                placeholder="Your subject"
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg py-3 font-bold tracking-wide hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
