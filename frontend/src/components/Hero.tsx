import React from 'react'
import { Button } from './ui/Button'
import { ArrowDown, Code, Zap, Users } from 'lucide-react'
import kasperImage from '../assets/kasperjunge.jpg'
import christianImage from '../assets/christianbechnørhave.png'

const Hero: React.FC = () => {
  const scrollToWorkshop = () => {
    const workshopSection = document.getElementById('workshop')
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center space-y-12">
          {/* Main Workshop Title */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Agent-baseret<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Softwareudvikling
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto">
              Den intensive workshop der gør dit udviklerteam klar til AI-fremtiden
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Lær at mestre AI-værktøjer, implementere dem effektivt og øg din produktivitet markant - på bare 2 dage
            </p>
          </div>

          {/* Facilitators */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Faciliteret af Danmarks førende AI-eksperter
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Kasper Junge */}
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <img 
                    src={kasperImage} 
                    alt="Kasper Junge"
                    className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-600"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Kasper Junge
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                    Lead AI Engineer, Dinero
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Prisvindende AI-ingeniør og community-builder. Nordic DAIR-prismodtager 2023, 
                    formand for Danish Data Science Community og vært på Verbos Podcast.
                  </p>
                </div>
              </div>

              {/* Christian Bech Nørhave */}
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <img 
                    src={christianImage} 
                    alt="Christian Bech Nørhave"
                    className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-600"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Christian Bech Nørhave
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                    Futurist & AI-strategirådgiver
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dansk futurist og digitaliseringsrådgiver med 20+ års erfaring. 
                    Tidligere chefkonsulent for AI i Dansk Erhverv, nu CEO i Just Trust IT ApS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToWorkshop}
              className="text-lg px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Se Workshop Program
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-12 py-6 h-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Book gratis konsultation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll ned</span>
          <ArrowDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero 