import React from 'react'
import { Button } from './ui/Button'
import { ArrowDown } from 'lucide-react'
import kasperImage from '../assets/kasperjunge.jpg'

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
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Professional Portrait */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img 
                src={kasperImage} 
                alt="Kasper Junge - Lead AI Engineer & Workshop Facilitator"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-600 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Kasper Junge
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                Lead AI Engineer & Workshop Facilitator
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed">
              Hjælper udviklerteams med at komme i gang med agent-baseret softwareudvikling
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={scrollToWorkshop}
                className="text-lg px-10 py-5 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Se Workshop
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-10 py-5 h-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Kontakt mig
              </Button>
            </div>
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