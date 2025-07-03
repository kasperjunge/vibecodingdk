import React from 'react'
import { Button } from './ui/Button'
import { Check, Calendar, Users, Clock, Star, ArrowRight } from 'lucide-react'

const Workshop: React.FC = () => {
  const workshopFeatures = [
    "Hands-on øvelser med jeres egen kode",
    "Avancerede prompt engineering teknikker",
    "Automatisering af repetitive tasks",
    "Integration med populære IDE'er",
    "Code review og debugging med AI",
    "Refactoring og optimeringsteknikker",
    "Best practices for AI-assisteret udvikling",
    "Sikkerhed og etik i AI-værktøjer",
    "Team workflows og samarbejdsstrategier",
    "Måling og optimering af AI-produktivitet"
  ]

  const dayStructure = [
    {
      day: "Dag 1",
      title: "Grundlæggende AI-værktøjer",
      topics: [
        "Introduktion til AI-værktøjer for udviklere",
        "Opsætning og konfiguration",
        "Basis prompt engineering",
        "Code generation og completion",
        "Debugging og fejlfinding",
        "Hands-on øvelser"
      ]
    },
    {
      day: "Dag 2", 
      title: "Avancerede teknikker",
      topics: [
        "Avanceret prompt engineering",
        "Workflow automation",
        "Code review og refactoring",
        "Team integration",
        "Produktivitetsmåling",
        "Implementeringsplan for jeres team"
      ]
    }
  ]

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

        {/* Pricing */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Vælg din pakke
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Consultation */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Gratis Konsultation
                </h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">Gratis</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  30 minutters uforpligtende møde om jeres AI-behov
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">AI-readiness vurdering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Skræddersyet anbefaling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Ingen forpligtelse</span>
                  </li>
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book gratis møde
                </Button>
              </div>
            </div>

            {/* Standard Workshop */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg border-2 border-blue-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Mest populære
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Standard Workshop
                </h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">30.000</span>
                  <span className="text-lg text-gray-500 dark:text-gray-400 ml-2">DKK</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Komplet 2-dages workshop for dit team
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">2 dages intensiv training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Op til 20 deltagere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Materialer og værktøjer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">30 dages opfølgning</span>
                  </li>
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Vælg Standard
                </Button>
              </div>
            </div>

            {/* Premium Workshop */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Premium Workshop
                </h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">60.000</span>
                  <span className="text-lg text-gray-500 dark:text-gray-400 ml-2">DKK</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Workshop + 3 måneders mentoring
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Alt fra Standard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">3 måneders mentoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Månedlige check-ins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Prioritet support</span>
                  </li>
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Vælg Premium
                </Button>
              </div>
            </div>
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

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Klar til at revolutionere dit teams AI-workflow?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Kontakt mig for at diskutere dine specifikke behov og få et skræddersyet tilbud.
          </p>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4 h-auto"
          >
            Kontakt mig nu
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Workshop 