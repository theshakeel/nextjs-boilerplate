"use client";

import React from "react";

export default function FeaturesPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-medicine-background-2140-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/50 to-cyan-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="floating-particle" style={{ left: "10%", top: "20%", animationDelay: "0s" }}></div>
          <div className="floating-particle" style={{ left: "20%", top: "60%", animationDelay: "1s" }}></div>
          <div className="floating-particle" style={{ left: "80%", top: "30%", animationDelay: "2s" }}></div>
          <div className="floating-particle" style={{ left: "70%", top: "70%", animationDelay: "3s" }}></div>
          <div className="floating-particle" style={{ left: "50%", top: "10%", animationDelay: "4s" }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-xl tracking-wide">
              <svg
                className="w-4 h-4 mr-2 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              REMOTE HEALTHCARE PLATFORM
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              A DOCTOR PLATFORM
            </span>
            <span className="block gradient-text">DESIGNED FOR</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              REMOTE SUPPORT
            </span>
          </h1>

          <div className="mb-8">
            <div className="text-base md:text-lg font-bold text-cyan-400 mb-1 tracking-wide">
              The Best Doctors Under One Roof
            </div>
            <div className="text-sm md:text-base font-semibold text-purple-400 tracking-wide">
              Reach the Most Successful Doctors with Just One Touch
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            XHOSPITAL connects patients with specialized doctors for health conditions that can be resolved through remote support.
            Experience simple appointment flows, secure communication, document sharing, and transparent pricing.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <span className="flex items-center bg-black px-8 py-4 rounded-xl group-hover:bg-transparent transition-all duration-500 text-base font-black tracking-wide">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                START CONSULTATION
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>

            <button className="group bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-cyan-400/50 px-8 py-4 rounded-xl text-base font-black tracking-wide transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                JOIN AS DOCTOR
              </span>
            </button>
          </div>
        </div>
      </section>
    <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">
                        <span className="gradient-text">SUITABLE SPECIALTIES</span>
                        <br />
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            FOR REMOTE CARE
                        </span>
                    </h2>
                    <p className="text-sm text-cyan-400 font-semibold tracking-wide">
                        The Strongest Team for Your Health
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="feature-card rounded-2xl p-6 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-3 tracking-tight">Dermatology</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Skin condition assessments, rash evaluations, and dermatological consultations through high-quality image sharing.
                        </p>
                    </div>

                    <div className="feature-card rounded-2xl p-6 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-3 tracking-tight">Nutrition Counseling</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Personalized diet plans, nutritional guidance, and lifestyle recommendations from certified nutritionists.
                        </p>
                    </div>

                    <div className="feature-card rounded-2xl p-6 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-3 tracking-tight">Second Opinions</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Expert medical second opinions on diagnoses, treatment plans, and medical reports from specialists.
                        </p>
                    </div>

                    <div className="feature-card rounded-2xl p-6 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-3 tracking-tight">Mental Health</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Psychological consultations, therapy sessions, and mental wellness support through secure video calls.
                        </p>
                    </div>

                    <div className="feature-card rounded-2xl p-6 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-400 to-pink-500 mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-3 tracking-tight">Lab Result Reviews</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Professional interpretation of blood tests, imaging results, and diagnostic reports by specialists.
                        </p>
                    </div>

                    <div className="feature-card rounded-2xl p-6 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-3 tracking-tight">Follow-up Care</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Post-treatment monitoring, medication adjustments, and recovery progress tracking with your doctor.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">
                        <span className="gradient-text">SECURE</span>
                        <br />
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            CONSULTATION
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="feature-card rounded-2xl p-8 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Identity Verification</h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4">
                            All doctors undergo rigorous identity verification and credential validation. Patients are verified through secure authentication methods.
                        </p>
                        <ul className="text-white/60 text-sm space-y-2">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Medical license verification
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Biometric authentication
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Multi-factor authentication
                            </li>
                        </ul>
                    </div>

                    <div className="feature-card rounded-2xl p-8 transition-all duration-500 hover:scale-105">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">End-to-End Security</h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4">
                            Military-grade encryption protects all communications. No off-record sharing is permitted, ensuring complete privacy.
                        </p>
                        <ul className="text-white/60 text-sm space-y-2">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                AES-256 encryption
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                HIPAA compliant
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Zero data retention
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">
                        <span className="gradient-text">DOCUMENT</span>
                        <br />
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            SHARING
                        </span>
                    </h2>
                </div>

                <div className="feature-card rounded-2xl p-12 transition-all duration-500 hover:scale-[1.02]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="text-center">
                            <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 mb-6 pulse-glow">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3 tracking-tight">Medical Reports</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Upload and share medical reports, lab results, and diagnostic documents securely.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 mb-6 pulse-glow" style={{animationDelay: "0.5s" }}>
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3 tracking-tight">Medical Images</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Share X-rays, MRI scans, CT scans, and other medical imaging with high-resolution quality.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 mb-6 pulse-glow" style={{animationDelay: "1s"}}>
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3 tracking-tight">Test Results</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Upload blood work, pathology reports, and other test results for professional analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">
                        <span className="gradient-text">TRANSPARENT</span>
                        <br />
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            PRICING
                        </span>
                    </h2>
                </div>

                <div className="feature-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] text-center">
                    <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-8 pulse-glow mx-auto">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">See Estimated Fees Before You Start</h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                        No hidden costs or surprise charges. View consultation fees, specialist rates, and any additional costs upfront before booking your appointment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-2xl font-black text-cyan-400 mb-2">$25-50</div>
                            <div className="text-white font-semibold mb-2">General Consultation</div>
                            <div className="text-white/60 text-sm">Basic remote consultation</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-2xl font-black text-purple-400 mb-2">$75-150</div>
                            <div className="text-white font-semibold mb-2">Specialist Review</div>
                            <div className="text-white/60 text-sm">Expert specialist consultation</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-2xl font-black text-pink-400 mb-2">$100-200</div>
                            <div className="text-white font-semibold mb-2">Second Opinion</div>
                            <div className="text-white/60 text-sm">Comprehensive second opinion</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border-2 border-red-500/50 rounded-2xl p-8 text-center backdrop-blur-xl">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 mb-6 animate-pulse">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">IMPORTANT: NON-EMERGENCY NOTICE</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                        <strong>Do not use this platform for medical emergencies.</strong> For life-threatening conditions, severe injuries, or urgent medical situations, immediately call your local emergency services.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                            <h4 className="text-lg font-bold text-red-400 mb-3">Emergency Situations - Call 112:</h4>
                            <ul className="text-white/80 text-sm space-y-2">
                                <li>• Chest pain or heart attack symptoms</li>
                                <li>• Difficulty breathing or choking</li>
                                <li>• Severe bleeding or trauma</li>
                                <li>• Loss of consciousness</li>
                                <li>• Stroke symptoms</li>
                            </ul>
                        </div>
                        <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                            <h4 className="text-lg font-bold text-green-400 mb-3">Suitable for Remote Care:</h4>
                            <ul className="text-white/80 text-sm space-y-2">
                                <li>• Skin condition consultations</li>
                                <li>• Follow-up appointments</li>
                                <li>• Medication reviews</li>
                                <li>• Second opinions on reports</li>
                                <li>• Nutrition counseling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  );
}
