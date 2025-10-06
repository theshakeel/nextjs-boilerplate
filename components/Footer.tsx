"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight">
              Xhospital
            </h3>
            <div className="text-sm text-cyan-400 font-bold mb-2 tracking-wide">
              The Best Doctors Under One Roof
            </div>
            <div className="text-xs text-purple-400 font-semibold mb-4 tracking-wide">
              The Strongest Team for Your Health
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Reach top doctors anytime, anywhere. Redefining digital healthcare
              with AI-driven diagnostics and secure teleconsultation.
            </p>

            <div className="flex space-x-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/50 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-base font-black text-white mb-6 tracking-wide">
              PLATFORM
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <Link
                  href="/patient-portal"
                  className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor-portal"
                  className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  Doctor Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-overview"
                  className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  AI Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-base font-black text-white mb-6 tracking-wide">
              SUPPORT
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-we-cover"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Conditions We Cover
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 font-medium text-sm">
            © {new Date().getFullYear()} Xhospital Healthcare.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Empowering Smarter Healthcare.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
