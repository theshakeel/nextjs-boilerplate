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
   const portalBase = process.env.NEXT_PUBLIC_PORTAL || "";
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
      description: 'Advanced machine learning algorithms that deliver highly reliable treatment insights.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-brain-hologram-2131-large.mp4',
      accent: 'from-cyan-400 via-blue-500 to-indigo-600'
    }
    ,
    {
      icon: CreditCardIcon,
      title: 'Stripe/Card Payments',
      description: 'Traditional payment methods and instant global transactions.',
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
  title: 'Virtual Consultations',
  description: 'Seamless video consultations with real-time data sharing and integrated diagnostics.',
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
 const handleRedirect = (role: "patient" | "doctor") => {
    window.location.href = `${portalBase}/dashboard/auth?role=${role}`;
  };
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor Follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.3 + 1})`
        }}
      />

    
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
          {[...Array(30)].map((_, i) => (
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
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY * 0.001
          }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-xl tracking-wide">
              <SparklesIcon className="w-4 h-4 mr-2 text-cyan-400" />
              NEXT-GEN HEALTHCARE PROTOCOL
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                FUTURE
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                MEDICINE.
              </span>
            </h1>
            <div className="text-base md:text-lg font-bold text-cyan-400 mb-1 tracking-wide">
              The Best Doctors Under One Roof
            </div>
            <div className="text-sm md:text-base font-semibold text-purple-400 tracking-wide">
              The Strongest Team for Your Health
            </div>
          </div>
          
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Reach the Most Successful Doctors with Just One Touch. Experience healthcare beyond imagination with neural AI and quantum security.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <button onClick={() => handleRedirect("patient")} className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <span className="flex items-center bg-black px-8 py-4 rounded-xl group-hover:bg-transparent transition-all duration-500 text-base font-black tracking-wide">
                <PlayIcon className="w-5 h-5 mr-3" />
                ENTER Xhospital
                <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button  onClick={() => handleRedirect("doctor")} className="group bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-cyan-400/50 px-8 py-4 rounded-xl text-base font-black tracking-wide transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center">
                <UserPlusIcon className="w-5 h-5 mr-3" />
                DOCTOR ACCESS
              </span>
            </button>
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { value: '∞', label: 'SPEED', color: 'from-cyan-400 to-blue-500' },
              { value: '99.9%', label: 'ACCURACY', color: 'from-purple-400 to-pink-500' },
              { value: '99%', label: 'UPTIME', color: 'from-green-400 to-emerald-500' },
              { value: '∆∇∞', label: 'DIMENSIONS', color: 'from-yellow-400 to-orange-500' }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-white/60 font-bold tracking-wider text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Individual Video Backgrounds */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                QUANTUM
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CAPABILITIES
              </span>
            </h2>
            <p className="text-sm text-cyan-400 font-semibold tracking-wide">
              The Best Doctors Under One Roof
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-700 transform hover:scale-[1.02]"
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
                  
                  <div className="relative p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.accent} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500 tracking-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {feature.description}
                    </p>

                    {/* Hover Effect Lines */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Immersive CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-medical-interface-2142-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/80 to-black"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-6xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              READY TO
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              TRANSCEND?
            </span>
          </h2>
          
          <div className="text-base text-purple-400 font-bold mb-2 tracking-wide">
            The Strongest Team for Your Health
          </div>
          
          <p className="text-lg text-white/80 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Reach the Most Successful Doctors with Just One Touch. Join the healthcare revolution.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
            <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-xl overflow-hidden transform hover:scale-110 transition-all duration-500">
              <span className="flex items-center justify-center bg-black px-12 py-5 rounded-xl group-hover:bg-transparent transition-all duration-500 text-lg font-black tracking-wide">
                <HeartIcon className="w-6 h-6 mr-3 animate-pulse" />
                PATIENT PORTAL
              </span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-cyan-400 px-12 py-5 rounded-xl text-lg font-black tracking-wide transition-all duration-500 transform hover:scale-110">
              <span className="flex items-center justify-center">
                <LightBulbIcon className="w-6 h-6 mr-3" />
                DOCTOR Xhospital
              </span>
            </button>
          </div>

          <div className="text-white/60 text-sm font-medium tracking-wide">
            ✦ QUANTUM ENCRYPTED ✦ ZERO LATENCY ✦ INFINITE POSSIBILITIES ✦
          </div>
        </div>
      </section>

      {/* Futuristic Testimonials */}
      <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PIONEER
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </h2>
            <p className="text-sm text-purple-400 font-semibold tracking-wide">
              The Best Doctors Under One Roof
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 p-12 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              </div>
              
              <div className="relative text-center">
                <div className="mb-8">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-2xl"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-xl"></div>
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-white/90 italic mb-8 leading-relaxed font-light max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="mb-4">
                  <h4 className="text-xl font-black text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-cyan-400 font-bold text-base mb-1">{testimonials[currentTestimonial].role}</p>
                  <p className="text-white/60 font-medium text-sm">{testimonials[currentTestimonial].specialty}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
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
      
    </div>
  )
}



