"use client";

import Link from "next/link";

export default function Header() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL || "/";

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-2xl z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <div className="relative">
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                Xhospital
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/features"
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide text-sm"
            >
              FEATURES
            </Link>
            <Link
              href="/reviews"
              className="text-white/70 hover:text-purple-400 transition-all duration-300 font-medium tracking-wide text-sm"
            >
              REVIEWS
            </Link>
            <Link
              href="/contact-us"
              className="text-white/70 hover:text-pink-400 transition-all duration-300 font-medium tracking-wide text-sm"
            >
              CONTACT
            </Link>
            <Link
              href="/about-us"
              className="text-white/70 hover:text-pink-400 transition-all duration-300 font-medium tracking-wide text-sm"
            >
              ABOUT US
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Link
              href={portalUrl}
              className="text-white/70 hover:text-white px-4 py-2 font-medium tracking-wide transition-all duration-300 text-sm"
            >
              LOGIN
            </Link>
            <button
              onClick={() => (window.location.href = portalUrl)}
              className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[1px] rounded-lg overflow-hidden"
            >
              <span className="block bg-black px-4 py-2 rounded-lg group-hover:bg-transparent transition-all duration-300 font-bold tracking-wide text-sm">
                START FREE
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
