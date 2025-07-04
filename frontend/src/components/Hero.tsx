import React from 'react'
import { Button } from './ui/Button'
import { ArrowDown, Code, Zap, Users, Linkedin, Mic } from 'lucide-react'
import kasperImage from '../assets/kasperjunge.jpg'
import christianImage from '../assets/christianbechnørhave.png'

const Hero: React.FC = () => {
  const scrollToWorkshop = () => {
    const workshopSection = document.getElementById('workshop')
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // YouTube icon component
  const YouTubeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 gradient-radial opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full gradient-conic opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center space-y-16">
          {/* Main Workshop Title */}
          <div className="space-y-12 animate-fadeInUp">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Code className="w-10 h-10 text-white" />
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-none text-shadow-lg">
              Agent-baseret<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Softwareudvikling
              </span>
            </h1>
            
            <h2 className="text-3xl lg:text-4xl text-gray-700 dark:text-gray-200 font-semibold max-w-5xl mx-auto leading-tight">
              Workshoppen der gør dit udviklerteam klar til en fremtid med AI-agenter
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Lær at mestre AI-værktøjer, implementere dem effektivt og øg dit teams produktivitet og arbejdsglæde markant - på bare 2 dage
            </p>
          </div>

          {/* Facilitators */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 lg:p-16 max-w-7xl mx-auto border border-white/20 dark:border-gray-700/50 animate-scaleIn">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-shadow-md">
              Faciliteret af Danmarks førende AI-eksperter
            </h3>
            
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {/* Kasper Junge */}
              <div className="flex flex-col items-center text-center space-y-8 animate-slideInLeft">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                    src={kasperImage} 
                    alt="Kasper Junge"
                    className="relative w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-600 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Kasper Junge
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-xl">
                    Lead AI Engineer, Dinero
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-md">
                    Prisvindende AI-ingeniør og community-builder. Nordic DAIR-prismodtager 2023, 
                    formand for Danish Data Science Community og vært på Verbos Podcast.
                  </p>
                </div>
                {/* Social Media Links - Kasper */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/kasper-juunge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="Kasper på LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://podcasts.apple.com/dk/podcast/verbos-ai-og-softwareudvikling/id1650151292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="Verbos Podcast"
                  >
                    <Mic className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCB1Cg40cN77lhbKBColnbCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="YouTube"
                  >
                    <YouTubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Christian Bech Nørhave */}
              <div className="flex flex-col items-center text-center space-y-8 animate-slideInRight">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                    src={christianImage} 
                    alt="Christian Bech Nørhave"
                    className="relative w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-600 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Christian Bech Nørhave
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-xl">
                    Futurist & AI-strategirådgiver
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-md">
                    Dansk futurist og digitaliseringsrådgiver med 20+ års erfaring. 
                    Tidligere chefkonsulent for AI i Dansk Erhverv, nu CEO i Just Trust IT ApS.
                  </p>
                </div>
                {/* Social Media Links - Christian */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/cbechn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="Christian på LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 animate-fadeInUp">
            <Button 
              size="lg" 
              onClick={scrollToWorkshop}
              className="text-xl px-16 py-8 h-auto shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-2xl font-semibold"
            >
              Se Workshop Program
              <ArrowDown className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl px-16 py-8 h-auto border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-2xl font-semibold backdrop-blur-sm"
            >
              Book gratis konsultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 