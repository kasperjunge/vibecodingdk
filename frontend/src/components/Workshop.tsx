import React from 'react'
import { Button } from './ui/Button'
import { Check, Calendar, Users, Clock, Star } from 'lucide-react'

const Workshop: React.FC = () => {
  const workshopFeatures = [
    "Hands-on AI værktøjsintegrering",
    "Praktiske coding sessioner",
    "Reelle case studies fra danske virksomheder",
    "Personlige følg-op sessioner",
    "Omfattende materialer og ressourcer",
    "Netværk med andre tech-ledere"
  ]

  const dayStructure = [
    {
      day: "Dag 1",
      title: "Fundamentals & Greenfield Practice",
      topics: [
        "AI værktøjsoversigt og -evaluering",
        "Hands-on implementering af populære AI-værktøjer",
        "Best practices for AI-integration",
        "Team onboarding strategier"
      ]
    },
    {
      day: "Dag 2",
      title: "Real-World Application (Valgfri)",
      topics: [
        "Arbejde med eksisterende codebase",
        "Legacy system integration",
        "Skalering og performance optimering",
        "Måling af ROI og success metrics"
      ]
    }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="workshop" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Modern AI Development Workshop
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            En intensiv, praktisk workshop designet til udviklerteams, der vil mestre AI-værktøjer og implementere dem effektivt i deres daglige arbejde
          </p>
        </div>

        {/* Workshop Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gruppestørrelse</h3>
                <p className="text-gray-600 dark:text-gray-300">15 ideal, max 20 deltagere</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Varighed</h3>
                <p className="text-gray-600 dark:text-gray-300">1-2 dage (fleksibelt)</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Format</h3>
                <p className="text-gray-600 dark:text-gray-300">Kun on-site i Danmark</p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-800 dark:text-yellow-200 font-medium">Early Bird Tilbud</span>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">30.000 DKK</span>
                <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-4">75.000 DKK</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Pris gælder for hele workshoppen, uanset antal deltagere (op til 20)
              </p>
            </div>
          </div>
        </div>

        {/* Day Structure */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Workshop Program
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {dayStructure.map((day, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{day.day}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{day.title}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {day.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Hvad du får med
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {workshopFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Return on Investment
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Gennemsnitlige teams rapporterer <strong>25-40% produktivitetsstigning</strong> inden for de første 3 måneder efter workshoppen
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">25-40%</div>
                <div className="text-gray-600 dark:text-gray-300">Produktivitetsstigning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600 dark:text-gray-300">Hurtigere code reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-gray-600 dark:text-gray-300">Færre bugs i production</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-4 h-auto"
          >
            Book Workshop Nu
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
            Kontakt mig for at diskutere tilpasning til jeres specifikke behov
          </p>
        </div>
      </div>
    </section>
  )
}

export default Workshop 