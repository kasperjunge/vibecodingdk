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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Professional Portrait */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src={kasperImage} 
                alt="Kasper Junge - Lead AI Engineer & Workshop Facilitator"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Kasper Junge
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Lead AI Engineer & Workshop Facilitator
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 mb-10 max-w-2xl">
              Hjælper udviklerteams med at mestre AI-værktøjer i deres daglige arbejde
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToWorkshop}
                className="text-lg px-8 py-4 h-auto"
              >
                Se Workshop
                <ArrowDown className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4 h-auto"
              >
                Kontakt mig
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  )
}

export default Hero 