'use client'

import React, { useEffect, useState } from 'react'
import { 
  ShieldCheckIcon, 
  UserPlusIcon, 
  CreditCardIcon, 
  ChartBarIcon,
  VideoCameraIcon,
  BellIcon,
  CalendarIcon,
  DocumentChartBarIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  CheckCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Secure Registration',
      description: 'Military-grade encryption for both doctors and patients with biometric verification and multi-factor authentication.',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      icon: UserPlusIcon,
      title: 'Instant Treatment Access',
      description: 'AI-powered symptom analysis, smart doctor matching, and seamless medical document processing.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: CreditCardIcon,
      title: 'Smart Escrow System',
      description: 'Blockchain-secured payments with automatic refunds and transparent fee structure.',
      gradient: 'from-violet-400 to-purple-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Visual Progress Tracking',
      description: 'Interactive timelines, milestone celebrations, and predictive health analytics.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: VideoCameraIcon,
      title: 'Telemedicine Suite',
      description: 'HD video consultations, real-time vital monitoring, and emergency alert systems.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      icon: BellIcon,
      title: 'Multi-Channel Alerts',
      description: 'Smart notifications via WhatsApp, Telegram, SMS, and in-app with personalized timing.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: CalendarIcon,
      title: 'Intelligent Scheduling',
      description: 'AI-optimized appointment booking with conflict resolution and automatic rescheduling.',
      gradient: 'from-indigo-400 to-blue-500'
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Machine learning insights, treatment outcome predictions, and personalized recommendations.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: CloudArrowUpIcon,
      title: 'Secure Cloud Storage',
      description: 'HIPAA-compliant document management with OCR scanning and intelligent categorization.',
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      icon: SparklesIcon,
      title: 'AI Health Assistant',
      description: 'Personalized treatment plans, medication reminders, and 24/7 health monitoring.',
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Marcus Thompson',
      role: 'Orthopedic Surgeon',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The AI-powered insights have transformed my practice. Patient outcomes improved by 40% since implementing this platform. The interface is intuitive and the security features are top-notch.'
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Chronic Pain Patient',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Finally, a platform that understands patient needs. The visual progress tracking kept me motivated throughout my recovery. The payment system is transparent and fair.'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Telemedicine Specialist',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The telemedicine suite is revolutionary. High-quality video calls, real-time data sharing, and seamless patient monitoring. My efficiency increased by 60%.'
    },
    {
      name: 'David Kim',
      role: 'Diabetes Patient',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The AI health assistant is like having a personal doctor 24/7. Smart reminders, personalized insights, and the multi-channel notifications keep me on track.'
    }
  ]

  const trustBadges = [
    { icon: ShieldCheckIcon, text: 'ISO 27001 Certified', color: 'text-emerald-400' },
    { icon: CheckCircleIcon, text: 'GDPR Compliant', color: 'text-cyan-400' },
    { icon: CreditCardIcon, text: 'PCI DSS Level 1', color: 'text-violet-400' },
    { icon: StarIcon, text: '99.99% Uptime SLA', color: 'text-orange-400' }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-xl z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-emerald-400">Health</span>Flow
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#testimonials" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Reviews
                </a>
                <a href="#contact" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Login
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Start Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8">
              <SparklesIcon className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Healthcare
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of medical care with AI-driven insights, seamless telemedicine, 
            and blockchain-secured payments. Where technology meets compassionate healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
              <span className="flex items-center">
                <PlayIcon className="w-5 h-5 mr-3" />
                Start as Patient
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white border-2 border-slate-600 hover:border-emerald-400 px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center">
                <UserPlusIcon className="w-5 h-5 mr-3" />
                Join as Doctor
              </span>
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                25K+
              </div>
              <div className="text-slate-400 font-medium">Active Users</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                1.2K+
              </div>
              <div className="text-slate-400 font-medium">Expert Doctors</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99.2%
              </div>
              <div className="text-slate-400 font-medium">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-slate-400 font-medium">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              <ChartBarIcon className="w-4 h-4 mr-2" />
              Advanced Features
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Next-Gen Healthcare
              <span className="block text-slate-400">Technology Stack</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge features designed to revolutionize patient care and streamline 
              medical practice management with AI-powered intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Transform
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Your Healthcare?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join the healthcare revolution. Experience AI-powered care, secure payments, 
            and seamless doctor-patient connections.
          </p>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div key={index} className="flex flex-col items-center group">
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 group-hover:border-slate-600 transition-colors duration-300 mb-3">
                    <Icon className={`w-8 h-8 ${badge.color}`} />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                    {badge.text}
                  </span>
                </div>
              )
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span>Launch Patient Portal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white border-2 border-slate-600 hover:border-emerald-400 px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105">
              Access Doctor Dashboard
            </button>
          </div>

          <div className="text-slate-400 text-sm">
            <p>✓ Free 30-day trial ✓ No setup fees ✓ Cancel anytime ✓ Enterprise-grade security</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              User Reviews
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Trusted by Healthcare
              <span className="block text-slate-400">Professionals Worldwide</span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
              <div className="text-center">
                <div className="relative mb-8">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full mx-auto shadow-2xl border-4 border-emerald-400/20"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-xl"></div>
                </div>
                
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-slate-200 italic mb-8 leading-relaxed font-light">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-emerald-400 font-medium">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 border border-slate-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 border border-slate-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/50' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-black text-white mb-4">
                <span className="text-emerald-400">Health</span>Flow
              </h3>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                Revolutionizing healthcare through AI-powered technology, secure blockchain payments, 
                and seamless telemedicine experiences for better patient outcomes.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Platform</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Patient Portal</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Doctor Dashboard</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">AI Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Telemedicine</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">API Access</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Support</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">24/7 Support</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 HealthFlow. All rights reserved. 
              <span className="text-emerald-400"> Built for the future of healthcare.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
