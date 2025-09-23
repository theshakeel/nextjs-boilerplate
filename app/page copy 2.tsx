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
  CheckCircleIcon
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
      description: 'HIPAA-compliant registration system for both doctors and patients with advanced verification and security protocols.',
      color: 'blue'
    },
    {
      icon: UserPlusIcon,
      title: 'Easy Treatment Start',
      description: 'Describe your health issues, select qualified doctors, and upload medical reports with our intuitive interface.',
      color: 'green'
    },
    {
      icon: CreditCardIcon,
      title: 'Escrow Payments',
      description: 'Secure payment system with escrow protection and full refund guarantee if treatment is not completed satisfactorily.',
      color: 'purple'
    },
    {
      icon: ChartBarIcon,
      title: 'Treatment Timeline',
      description: 'Visual Kanban boards and timeline views to track treatment progress, milestones, and recovery stages.',
      color: 'indigo'
    },
    {
      icon: VideoCameraIcon,
      title: 'Live Monitoring',
      description: 'Real-time telemedicine consultations with video calls, chat support, and continuous health monitoring.',
      color: 'red'
    },
    {
      icon: BellIcon,
      title: 'Smart Notifications',
      description: 'WhatsApp and Telegram integration for appointment reminders, medication schedules, and treatment updates.',
      color: 'yellow'
    },
    {
      icon: CalendarIcon,
      title: 'Smart Scheduling',
      description: 'Advanced appointment booking system with automatic rescheduling, availability sync, and conflict resolution.',
      color: 'pink'
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Data Visualization',
      description: 'Comprehensive dashboards with interactive charts, progress reports, and treatment analytics.',
      color: 'cyan'
    },
    {
      icon: CloudArrowUpIcon,
      title: 'File Management',
      description: 'Secure cloud storage for medical reports, prescriptions, and treatment documents with easy sharing.',
      color: 'emerald'
    },
    {
      icon: SparklesIcon,
      title: 'AI-Powered Insights',
      description: 'Automatic follow-ups and AI-driven treatment suggestions based on patient history and medical data.',
      color: 'orange'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'This platform has revolutionized my practice. The patient monitoring tools and secure communication features are exceptional. I can provide better care while managing my time more efficiently.'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The treatment tracking and payment security gave me complete confidence. My doctor was able to monitor my progress remotely, and the WhatsApp reminders kept me on track with my medication.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Dermatologist',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The data visualization tools help me provide evidence-based care. Patients love the transparency of seeing their progress, and the AI suggestions have improved my treatment outcomes.'
    },
    {
      name: 'James Wilson',
      role: 'Patient',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Scheduling appointments and uploading reports is so simple. The escrow payment system made me feel secure, and getting a full refund when I had to cancel was hassle-free.'
    }
  ]

  const trustBadges = [
    { icon: ShieldCheckIcon, text: 'HIPAA Compliant' },
    { icon: CheckCircleIcon, text: 'SSL Encrypted' },
    { icon: CreditCardIcon, text: 'Secure Payments' },
    { icon: StarIcon, text: '99.9% Uptime' }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      pink: 'bg-pink-50 text-pink-600 border-pink-200',
      cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    }
    return colorMap[color] || 'bg-gray-50 text-gray-600 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TreatmentPro
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Testimonials
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        </div>

        {/* Parallax Content */}
        <div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Modern Treatment Platform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              for Patients & Doctors
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with verified healthcare professionals through our secure platform featuring AI-powered insights, 
            real-time monitoring, and comprehensive treatment management tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center">
                Get Started as Patient
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center">
                Join as Doctor
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15K+</div>
              <div className="text-sm md:text-base text-white/70">Active Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">800+</div>
              <div className="text-sm md:text-base text-white/70">Verified Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98.5%</div>
              <div className="text-sm md:text-base text-white/70">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base text-white/70">Support</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform combines cutting-edge technology with healthcare expertise to deliver 
              exceptional patient care and streamlined practice management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-4 rounded-xl border-2 mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(feature.color)}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join thousands of satisfied users who have revolutionized their healthcare journey 
            with our secure, AI-powered platform.
          </p>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div key={index} className="flex flex-col items-center text-white/90">
                  <Icon className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              )
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start as Patient
            </button>
            <button className="bg-blue-800/50 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800/70 transition-all duration-300 transform hover:scale-105">
              Join as Doctor
            </button>
          </div>

          <div className="text-blue-100 text-sm">
            <p>✓ No setup fees ✓ 30-day free trial ✓ Cancel anytime ✓ HIPAA compliant</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of healthcare professionals and patients worldwide
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl">
              <div className="text-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 shadow-lg"
                />
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                TreatmentPro
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Transforming healthcare through innovative technology, secure communications, 
                and AI-powered insights for better patient outcomes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">For Patients</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">For Doctors</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TreatmentPro. All rights reserved. Built with ❤️ for better healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
