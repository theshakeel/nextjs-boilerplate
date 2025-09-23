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
  PlayIcon,
  ArrowRightIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Quantum Security',
      description: 'Military-grade quantum encryption with biometric authentication and zero-knowledge architecture.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-security-hud-2130-large.mp4',
      accent: 'from-red-500 via-pink-500 to-purple-500'
    },
    {
      icon: LightBulbIcon,
      title: 'Neural Treatment AI',
      description: 'Advanced machine learning algorithms that predict treatment outcomes with 99.7% accuracy.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-brain-hologram-2131-large.mp4',
      accent: 'from-cyan-400 via-blue-500 to-indigo-600'
    },
    {
      icon: CreditCardIcon,
      title: 'Blockchain Payments',
      description: 'Decentralized payment system with smart contracts and instant global transactions.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-cryptocurrency-blockchain-2132-large.mp4',
      accent: 'from-yellow-400 via-orange-500 to-red-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Holographic Analytics',
      description: '3D data visualization with AR/VR integration for immersive health monitoring.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-data-visualization-2133-large.mp4',
      accent: 'from-green-400 via-emerald-500 to-teal-500'
    },
    {
      icon: VideoCameraIcon,
      title: 'Metaverse Consultations',
      description: 'Virtual reality medical consultations with haptic feedback and real-time diagnostics.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-virtual-reality-2134-large.mp4',
      accent: 'from-purple-400 via-violet-500 to-indigo-500'
    },
    {
      icon: BellIcon,
      title: 'Quantum Notifications',
      description: 'Instantaneous multi-dimensional alerts across all devices and platforms simultaneously.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-notification-system-2135-large.mp4',
      accent: 'from-pink-400 via-rose-500 to-red-500'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Zara Okafor',
      role: 'Neurosurgeon & AI Researcher',
      image: '/api/placeholder/100/100',
      rating: 5,
      quote: 'This platform is from the future. The neural AI predicted my patient outcomes better than 20 years of experience. Revolutionary.',
      specialty: 'Neural Interface Surgery'
    },
    {
      name: 'Alex Chen',
      role: 'Biohacker & Patient',
      image: '/api/placeholder/100/100',
      rating: 5,
      quote: 'The metaverse consultations feel more real than reality. My doctor examined me in VR and caught issues traditional methods missed.',
      specialty: 'Longevity Medicine'
    },
    {
      name: 'Dr. Kai Nakamura',
      role: 'Quantum Medicine Pioneer',
      image: '/api/placeholder/100/100',
      rating: 5,
      quote: 'The holographic analytics changed everything. I can literally walk through my patients data in 3D space. Mind-blowing technology.',
      specialty: 'Quantum Diagnostics'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.5 + 1})`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-2xl z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="relative">
                <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  NEXUS
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/70 hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide">
                FEATURES
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-purple-400 transition-all duration-300 font-medium tracking-wide">
                REVIEWS
              </a>
              <a href="#contact" className="text-white/70 hover:text-pink-400 transition-all duration-300 font-medium tracking-wide">
                CONTACT
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-white/70 hover:text-white px-6 py-3 font-medium tracking-wide transition-all duration-300">
                LOGIN
              </button>
              <button className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-xl overflow-hidden">
                <span className="block bg-black px-6 py-3 rounded-xl group-hover:bg-transparent transition-all duration-300 font-bold tracking-wide">
                  START FREE
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multiple Video Layers */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Chiron.mp4" type="video/mp4" />
          </video>
          
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
            style={{ animationDelay: '2s' }}
          >
            <source src="/Chiron.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/50 to-cyan-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY * 0.001
          }}
        >
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-xl">
              <SparklesIcon className="w-5 h-5 mr-3 text-cyan-400" />
              NEXT-GEN HEALTHCARE PROTOCOL
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              FUTURE
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              MEDICINE
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/80 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            Experience healthcare beyond imagination. Neural AI, quantum security, 
            metaverse consultations, and holographic data visualization.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20">
            <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[3px] rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <span className="flex items-center bg-black px-12 py-6 rounded-2xl group-hover:bg-transparent transition-all duration-500 text-xl font-black tracking-wide">
                <PlayIcon className="w-6 h-6 mr-4" />
                ENTER NEXUS
                <ArrowRightIcon className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-cyan-400/50 px-12 py-6 rounded-2xl text-xl font-black tracking-wide transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center">
                <UserPlusIcon className="w-6 h-6 mr-4" />
                DOCTOR ACCESS
              </span>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '∞', label: 'QUANTUM SPEED', color: 'from-cyan-400 to-blue-500' },
              { value: '99.9%', label: 'AI ACCURACY', color: 'from-purple-400 to-pink-500' },
              { value: '24/7', label: 'NEURAL SUPPORT', color: 'from-green-400 to-emerald-500' },
              { value: '∆∇∞', label: 'DIMENSIONS', color: 'from-yellow-400 to-orange-500' }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className={`text-4xl lg:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-white/60 font-bold tracking-widest text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Individual Video Backgrounds */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                QUANTUM
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CAPABILITIES
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-700 transform hover:scale-[1.02]"
                >
                  {/* Video Background */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={feature.video} type="video/mp4" />
                    </video>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  
                  <div className="relative p-12">
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${feature.accent} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {feature.description}
                    </p>

                    {/* Hover Effect Lines */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Immersive CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/80 to-black"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h2 className="text-5xl lg:text-8xl font-black mb-12">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              READY TO
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              TRANSCEND?
            </span>
          </h2>
          
          <p className="text-2xl text-white/80 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
            Join the healthcare revolution. Experience medicine beyond the boundaries of reality.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center mb-16">
            <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[3px] rounded-2xl overflow-hidden transform hover:scale-110 transition-all duration-500">
              <span className="flex items-center justify-center bg-black px-16 py-8 rounded-2xl group-hover:bg-transparent transition-all duration-500 text-2xl font-black tracking-wide">
                <HeartIcon className="w-8 h-8 mr-4 animate-pulse" />
                PATIENT PORTAL
              </span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-cyan-400 px-16 py-8 rounded-2xl text-2xl font-black tracking-wide transition-all duration-500 transform hover:scale-110">
              <span className="flex items-center justify-center">
                <LightBulbIcon className="w-8 h-8 mr-4" />
                DOCTOR NEXUS
              </span>
            </button>
          </div>

          <div className="text-white/60 text-lg font-medium tracking-wide">
            ✦ QUANTUM ENCRYPTED ✦ ZERO LATENCY ✦ INFINITE POSSIBILITIES ✦
          </div>
        </div>
      </section>

      {/* Futuristic Testimonials */}
      <section id="testimonials" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PIONEER
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-16 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              </div>
              
              <div className="relative text-center">
                <div className="mb-12">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-2xl"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-xl"></div>
                </div>
                
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                
                <blockquote className="text-2xl lg:text-3xl text-white/90 italic mb-12 leading-relaxed font-light max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="mb-4">
                  <h4 className="text-2xl font-black text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-cyan-400 font-bold text-lg mb-2">{testimonials[currentTestimonial].role}</p>
                  <p className="text-white/60 font-medium">{testimonials[currentTestimonial].specialty}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-16 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-125 shadow-lg' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                NEXUS
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                Pioneering the future of healthcare through quantum computing, neural AI, 
                and metaverse integration for unprecedented medical experiences.
              </p>
              <div className="flex space-x-6">
                {['twitter', 'linkedin', 'github'].map((social, index) => (
                  <a key={social} href="#" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-black text-white mb-8 tracking-wide">PLATFORM</h4>
              <ul className="space-y-4 text-white/70">
                {['Patient Portal', 'Doctor Nexus', 'Neural AI', 'Quantum Security', 'Metaverse'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-black text-white mb-8 tracking-wide">SUPPORT</h4>
              <ul className="space-y-4 text-white/70">
                {['Quantum Help', 'Neural Support', 'Privacy Shield', 'Terms Matrix', 'Contact Nexus'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-400 transition-colors duration-300 font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 font-medium">
              © 2024 NEXUS Healthcare Protocol. 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Transcending Reality.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
