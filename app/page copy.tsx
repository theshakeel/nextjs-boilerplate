'use client'

import React, { useEffect, useState } from 'react'
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: '🔒',
      title: 'Secure Payment System',
      description: 'Escrow-protected transactions ensure safe payments for both doctors and patients with full refund support.'
    },
    {
      icon: '📊',
      title: 'Data Visualization',
      description: 'Interactive treatment timelines and Kanban boards to track progress and manage care efficiently.'
    },
    {
      icon: '📱',
      title: 'Smart Notifications',
      description: 'WhatsApp and Telegram integration for appointment reminders and medication schedules.'
    },
    {
      icon: '💬',
      title: 'Real-time Chat',
      description: 'Secure messaging between doctors and patients with file sharing and voice notes.'
    },
    {
      icon: '📈',
      title: 'Live Monitoring',
      description: 'Real-time health status tracking with automated alerts and progress reports.'
    },
    {
      icon: '🗓️',
      title: 'Smart Scheduling',
      description: 'Advanced appointment management with automated rescheduling and availability sync.'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      image: '/api/placeholder/64/64',
      quote: 'This platform has revolutionized how I manage my patients. The real-time monitoring and communication tools are exceptional.'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: '/api/placeholder/64/64',
      quote: 'The treatment tracking and secure payment system gave me complete confidence in my healthcare journey.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Dermatologist',
      image: '/api/placeholder/64/64',
      quote: 'The data visualization tools help me provide better care and keep my patients engaged in their treatment.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">MediCare+</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
          <div className="relative w-full h-full bg-gradient-to-r from-blue-900/80 to-purple-900/80">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-doctor-writing-on-a-clipboard-44538-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
          </div>
        </div>

        {/* Parallax Content */}
        <div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Healthcare with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Smart Treatment</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Connect patients with doctors through our secure platform featuring real-time monitoring, smart scheduling, and comprehensive treatment management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Register as Patient
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Register as Doctor
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm">Active Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Verified Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ transform: `translateY(${(scrollY - 800) * 0.1}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with healthcare expertise to deliver exceptional patient care and doctor efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started with your healthcare journey in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Register & Describe</h3>
              <p className="text-gray-600">
                Create your account and describe your health concerns or medical expertise. Upload relevant documents securely.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect & Schedule</h3>
              <p className="text-gray-600">
                Find the right doctor or patient match. Schedule appointments with our smart calendar system and secure payment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track & Treat</h3>
              <p className="text-gray-600">
                Monitor treatment progress with real-time updates, chat support, and comprehensive health tracking tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Treatment Management
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Multi-Device Accessibility</h3>
                    <p className="text-gray-600">Access your healthcare data from any device, anywhere, anytime with seamless synchronization.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Flexible Refund System</h3>
                    <p className="text-gray-600">Complete refund protection for unsatisfactory treatments with transparent dispute resolution.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Detailed Treatment History</h3>
                    <p className="text-gray-600">Comprehensive medical records with timeline visualization and progress analytics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Progress Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Medication Adherence</span>
                      <span className="text-sm font-semibold text-green-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-600">Appointments</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-gray-600">Reports</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  View Full Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of healthcare professionals and patients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users who have revolutionized their healthcare journey with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start as Patient
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-all transform hover:scale-105 shadow-lg">
              Join as Doctor
            </button>
          </div>

          <div className="mt-8 text-blue-100">
            <p className="text-sm">✓ No setup fees ✓ 30-day free trial ✓ Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">MediCare+</h3>
              <p className="text-gray-400">
                Transforming healthcare through innovative technology and compassionate care.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">For Patients</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Doctors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediCare+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
