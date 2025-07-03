import React from 'react'
import { Award, Users, Mic, Star, GitBranch, Radio } from 'lucide-react'

const Credibility: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: "Nordic DAIR \"Data & AI Influencer of the Year\" 2023",
      description: "Anerkendt som førende stemme inden for AI i Norden"
    },
    {
      icon: <Mic className="w-10 h-10 text-purple-600" />,
      title: "Bredt medieopbud og ekspertise",
      description: (
        <span>
          Har deltaget i 25+ podcasts, artikler og konferencer. Fra Folketingets talerstol til DR P1, 
          Computerworld og IDA. Ekspert i AI og softwareudvikling.
        </span>
      )
    },
    {
      icon: <Radio className="w-10 h-10 text-blue-600" />,
      title: "Citeret i Folketinget om danske sprogmodeller",
      description: (
        <span>
          Citeret af Mona Juul fra Folketingets talerstol i debat om danske AI-modeller.{' '}
          <a 
            href="https://youtube.com/shorts/4PWvRZRSEds?si=qDFDMwwkGUsTEAEL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Se videoen her
          </a>
        </span>
      )
    }
  ]

  const roles = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Lead AI Engineer",
      company: "Dinero",
      period: "2024-nu",
      description: "Leder AI-initiativer for Danmarks største regnskabssystem"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Formand",
      company: "Danish Data Science Community",
      period: "2022-nu",
      description: "Leder Danmarks største data science fællesskab"
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-600" />,
      title: "Co-host",
      company: "Verbos Podcast",
      period: "2023-nu",
      description: "Danmarks mest lyttede podcast om AI og softwareudvikling"
    }
  ]

  const projects = [
    {
      icon: <GitBranch className="w-8 h-8 text-orange-600" />,
      title: "Copcon CLI",
      description: "CLI-værktøj til AI-baseret udvikling",
      stats: "~60 GitHub stars"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Danish Foundation Models",
      description: "Contributor til danske sprogmodeller",
      stats: "Open source projekt"
    },
    {
      icon: <Mic className="w-8 h-8 text-green-600" />,
      title: "MacScribe",
      description: "Lokal Whisper-baseret transkriberingssoftware",
      stats: "MacOS app"
    }
  ]

  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Erfaring & Anerkendelse
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Etableret ekspert inden for AI-udvikling med dokumenterede resultater og brancheanerkendelse
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Anerkendelse & Milepæle
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex-shrink-0 p-4 bg-white dark:bg-gray-600 rounded-full shadow-md">
                  {achievement.icon}
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {achievement.title}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Current Roles */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Nuværende Roller
          </h3>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-white dark:bg-gray-600 rounded-full shadow-md">
                    {role.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {role.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                  {role.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
                  {role.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Bemærkelsesværdige Projekter
          </h3>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="text-center p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full">
                    {project.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-bold">
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