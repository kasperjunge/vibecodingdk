import React from 'react'
import { Button } from './ui/Button'
import { Check } from 'lucide-react'

const Workshop: React.FC = () => {

  const dayStructure = [
    {
      day: "Dag 1",
      title: "Spec-Driven Development",
      topics: [
        { icon: "🎯", text: "Skab fælles fundament for softwareudvikling med AI" },
        { icon: "🛠️", text: "Hands-on erfaring med AI-agent udvikling" },
        { icon: "📋", text: "Lær at strukturere udviklingsopgaver for AI-agenter" },
        { icon: "🏠", text: "Praktisk erfaring teamet kan tage med hjem samme dag" }
      ]
    },
    {
      day: "Dag 2", 
      title: "Context Engineering",
      topics: [
        { icon: "🧠", text: "Lær grundlæggende Context Engineering principper" },
        { icon: "⚡", text: "Systematisk performance optimering af jeres AI-agent" },
        { icon: "🎯", text: "Praktiske teknikker til forbedring af kontekst" },
        { icon: "📈", text: "Opdag konkrete tiltag forbedre AI-agenter i jeres kontekst" },
      ]
    }
  ]

  return (
    <section id="workshop" className="py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vibe Coding Workshop
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Spørgsmålet er ikke, om dit team bruger Vibe Coding, men om de gør det sammen. Vores workshop sikrer et fælles fundament, så I kan rykke hurtigt – som ét team.
          </p>
        </div>

        {/* Day Structure */}
        <div className="max-w-7xl mx-auto mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Workshop Dage
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
                      <span className="text-2xl flex-shrink-0 mt-0.5">{topic.icon}</span>
                      <span className="text-gray-600 dark:text-gray-300 text-lg">{topic.text}</span>
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
                  Lad os tage en snak
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

            {/* 1-Day Workshop */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
                  <span className="text-2xl font-bold text-blue-600">🚀</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1 Dags Workshop
                </h4>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">40.000</span>
                  <span className="text-xl text-gray-500 dark:text-gray-400 block">DKK</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Introduktion til Vibe Coding og Spec-Driven Development
                </p>
                <ul className="space-y-4 mb-10 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Fælles fundament for udvikling med AI-agenter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Introduktion til Vibe Coding og use-cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Hands-on erfaring med AI-agenter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Lær at strukturere udviklingsopgaver for AI-agenter</span>
                  </li>
                </ul>
                <Button 
                  className="w-full text-lg py-4 h-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Vælg 1 dag
                </Button>
              </div>
            </div>

            {/* 2-Day Workshop */}
            <div className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border-2 border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold">
                  Mest populære
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-6">
                  <span className="text-2xl font-bold text-purple-600">⭐</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2 Dages Workshop
                </h4>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">70.000</span>
                  <span className="text-xl text-gray-500 dark:text-gray-400 block">DKK</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Context Engineering og AI-agent udvikling i jeres kontekst
                </p>
                <ul className="space-y-4 mb-10 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Alt fra Dag 1 workshop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Context Engineering principper</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Metodisk optimering af AI-agenter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">AI-agent udvikling i jeres kontekst</span>
                  </li>
                </ul>
                <Button 
                  className="w-full text-lg py-4 h-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Vælg 2 dage
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Facilitators Call-to-Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Faciliteret af Danmarks førende AI-eksperter
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Kasper Junge (Lead AI Engineer, Dinero) & Christian Bech Nørhave (på vej med noget stort) 
              bringer sammen deres tekniske ekspertise og strategiske forretningsforståelse
            </p>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-12 py-6 h-auto bg-white text-blue-600 hover:bg-gray-100 border-2 border-white"
            >
              Book et møde med os
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshop 