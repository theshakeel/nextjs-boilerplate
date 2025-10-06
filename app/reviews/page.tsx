"use client";

import React from "react";

export default function ReviewsPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Video / Overlay */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-hospital-corridor-2949-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/50 to-cyan-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="block gradient-text">
              Doctor and Patient Feedback
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            Here we showcase real user experiences. Doctors highlight the
            practical file sharing and video consultation flow, while patients
            emphasize the ease of accessing specialists and transparent pricing.
            <br />
            <span className="text-sm text-red-400 font-semibold">
              Note: Health-related statements are screened; unverifiable claims
              or treatment promises are not published.
            </span>
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Doctor Feedback */}
            <div className="feature-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  Doctor Experiences
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                “The integrated video consultations save significant time and
                provide clarity during follow-ups. Secure document sharing lets
                patients upload test results directly, which is a game changer
                for remote care.”
              </p>
              <p className="text-white/50 text-sm">
                — Dr. Saad R., Cardiologist
              </p>
            </div>

            {/* Patient Feedback */}
            <div className="feature-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  Patient Experiences
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                “Booking was simple, pricing was clear before I even started.
                I got my dermatology consult within 2 hours and received a
                prescription instantly. The process was smoother than visiting a
                clinic.”
              </p>
              <p className="text-white/50 text-sm">
                — Ayesha K., Patient
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
