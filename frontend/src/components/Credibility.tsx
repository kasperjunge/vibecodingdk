import React from 'react'
import { Award, Users, Mic, Star, Radio, Building, Briefcase, Trophy, Target } from 'lucide-react'

const Credibility: React.FC = () => {
  const kasperAchievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Nordic DAIR \"Data & AI Influencer of the Year\" 2023",
      description: "Anerkendt som førende stemme inden for AI i Norden"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Lead AI Engineer hos Dinero",
      description: "Leder AI-initiativer for en af Danmarks største regnskabssystemer"
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-600" />,
      title: "Formand for Danish Data Science Community",
      description: "Leder Danmarks største data science fællesskab med 1000+ medlemmer"
    },
    {
      icon: <Radio className="w-8 h-8 text-green-600" />,
      title: "Co-host på Verbos Podcast",
      description: "Danmarks mest lyttede podcast om AI og softwareudvikling"
    }
  ]

  const christianAchievements = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Tidligere chefkonsulent for AI i Dansk Erhverv",
      description: "Rådgav danske virksomheder om AI-strategier og implementering"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "CEO i Just Trust IT ApS",
      description: "Uafhængig digitaliseringsrådgiver med fokus på AI og forretningsudvikling"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "20+ års erfaring inden for IT-strategi",
      description: "Dyb erfaring med teknologi-implementering og organisatorisk transformation"
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-600" />,
      title: "Efterspurgt foredragsholder og paneldeltager",
      description: "Ekspert i AI's forretningspotentiale og praktiske anvendelse"
    }
  ]

  const combinedExperience = [
    {
      icon: <Star className="w-10 h-10 text-blue-600" />,
      title: "Kombineret teknisk og strategisk ekspertise",
      description: "Kaspers dybtgående tekniske viden kombineret med Christians strategiske forretningsforståelse giver workshoppen en unik vinkel"
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600" />,
      title: "Dokumenteret formidlingsevne",
      description: "Begge facilitatorer har demonstreret evnen til at formidle komplekse AI-koncepter til forskellige målgrupper"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-green-600" />,
      title: "Hands-on erfaring med implementering",
      description: "Ikke kun teoretisk viden - begge har praktisk erfaring med at implementere AI-løsninger i virksomheder"
    }
  ]

  const mediaHighlights = [
    {
      icon: <Radio className="w-8 h-8 text-blue-600" />,
      title: "Citeret i Folketinget",
      description: (
        <span>
          Kasper citeret af Mona Juul fra Folketingets talerstol i debat om danske AI-modeller.{' '}
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
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-600" />,
      title: "Omfattende medieopbud",
      description: "Tilsammen har facilitatorerne deltaget i 50+ podcasts, artikler og konferencer om AI og digitalisering"
    },
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      title: "Rådgivning til danske virksomheder",
      description: "Dokumenteret track record med at hjælpe virksomheder med AI-transformation"
    }
  ]

  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hvorfor stole på vores workshop?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Faciliteret af Danmarks mest erfarne AI-praktikere med dokumenterede resultater og brancheanerkendelse
          </p>
        </div>

        {/* Combined Experience */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Unik kombination af ekspertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {combinedExperience.map((item, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white dark:bg-gray-600 rounded-full shadow-md">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilitators Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Facilitatorernes baggrund
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Kasper Junge */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Kasper Junge
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  Teknisk AI-ekspert og community-builder
                </p>
              </div>
              
              <div className="grid gap-6">
                {kasperAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                    <div className="flex-shrink-0 p-2 bg-white dark:bg-gray-600 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Christian Bech Nørhave */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Christian Bech Nørhave
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                  Strategisk AI-rådgiver og futurist
                </p>
              </div>
              
              <div className="grid gap-6">
                {christianAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                    <div className="flex-shrink-0 p-2 bg-white dark:bg-gray-600 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Media Highlights */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Medieanerkendelse & troværdighed
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mediaHighlights.map((highlight, index) => (
              <div key={index} className="text-center p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full">
                    {highlight.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {highlight.title}
                </h4>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credibility 