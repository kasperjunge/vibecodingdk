import React from 'react'
import { Award, Users, Mic, Star, Calendar, GitBranch } from 'lucide-react'

const Credibility: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Nordic DAIR \"Data & AI Influencer of the Year\" 2023",
      description: "Anerkendt som førende stemme inden for AI i Norden"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Keynote Speaker - AI Day 2025 Aarhus",
      description: "Hovedtaler på Nordens største AI-konference"
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-600" />,
      title: "Citeret i Folketinget om danske sprogmodeller",
      description: (
        <span>
          Citeret af Mona Juul fra Folketingets talerstol i debat om danske AI-modeller.{' '}
          <a 
            href="https://youtube.com/shorts/4PWvRZRSEds?si=qDFDMwwkGUsTEAEL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Se videoen her
          </a>
        </span>
      )
    }
  ]

  const roles = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Lead AI Engineer",
      company: "Dinero",
      period: "2024-nutid",
      description: "Leder AI-initiativer for Danmarks største regnskabssystem"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Formand",
      company: "Danish Data Science Community",
      period: "2021-nutid",
      description: "Leder Danmarks største data science fællesskab"
    },
    {
      icon: <Mic className="w-6 h-6 text-purple-600" />,
      title: "Co-host",
      company: "Verbos Podcast",
      period: "2022-nutid",
      description: "80+ episoder • 5000+ abonnenter"
    }
  ]

  const projects = [
    {
      icon: <GitBranch className="w-6 h-6 text-orange-600" />,
      title: "Copcon CLI",
      description: "AI-drevet CLI-værktøj til udviklere",
      stats: "~60 GitHub stars"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Danish Foundation Models",
      description: "Bidragyder til danske sprogmodeller",
      stats: "Open source projekt"
    },
    {
      icon: <Mic className="w-6 h-6 text-green-600" />,
      title: "MacScribe",
      description: "Lokal Whisper-baseret transkriberingssoftware",
      stats: "MacOS app"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Erfaring & Anerkendelse
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Etableret ekspert inden for AI-udvikling med dokumenterede resultater og brancheanerkendelse
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Anerkendelse & Milepæle
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Roles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nuværende Roller
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-center mb-4">
                  {role.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {role.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {role.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {role.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Bemærkelsesværdige Projekter
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {project.stats}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credibility 