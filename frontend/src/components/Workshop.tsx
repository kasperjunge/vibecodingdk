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
    <section id="workshop" className="py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Agent-baseret Softwareudvikling Workshop
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            En intensiv, praktisk workshop designet til udviklerteams, der vil mestre AI-værktøjer og implementere dem effektivt i deres daglige arbejde
          </p>
        </div>

        {/* Day Structure */}
        <div className="max-w-7xl mx-auto mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Workshop Program
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {dayStructure.map((day, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{day.day}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">{day.title}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {day.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300 text-lg">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-7xl mx-auto mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Priser
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Free Consultation */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6">
                  <span className="text-2xl font-bold text-green-600">💬</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Gratis Konsultation
                </h4>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-green-600">Gratis</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  15 minutters uforpligtende møde om jeres AI-behov
                </p>
                <ul className="space-y-4 mb-10 text-left">
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
                  className="w-full text-lg py-4 h-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book gratis møde
                </Button>
              </div>
            </div>

            {/* Standard Workshop */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border-2 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold">
                  Mest populære
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
                  <span className="text-2xl font-bold text-blue-600">🎯</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Standard Workshop
                </h4>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">30.000</span>
                  <span className="text-xl text-gray-500 dark:text-gray-400 ml-2">DKK</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Komplet 2-dages workshop for dit team
                </p>
                <ul className="space-y-4 mb-10 text-left">
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
                  className="w-full text-lg py-4 h-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Vælg Standard
                </Button>
              </div>
            </div>

            {/* Premium Workshop */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-6">
                  <span className="text-2xl font-bold text-purple-600">⭐</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Premium Workshop
                </h4>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">60.000</span>
                  <span className="text-xl text-gray-500 dark:text-gray-400 ml-2">DKK</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Workshop + anvendelse på intern kodebase
                </p>
                <ul className="space-y-4 mb-10 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">2 dages intensiv training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Anvendelse på jeres kodebase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Skræddersyet til jeres projekter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">30 dages opfølgning</span>
                  </li>
                </ul>
                <Button 
                  className="w-full text-lg py-4 h-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Vælg Premium
                </Button>
              </div>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Klar til at revolutionere dit teams AI-workflow?
            </h3>
            <p className="text-xl lg:text-2xl mb-10 opacity-90">
              Kontakt mig for at diskutere dine specifikke behov og få et skræddersyet tilbud.
            </p>
            <Button 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl px-12 py-6 h-auto bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Kontakt mig nu
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshop 