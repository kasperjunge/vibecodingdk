import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Send } from 'lucide-react'
import { apiCall } from '../config/api'
import kasperImage from '../assets/kasperjunge.jpg'
import christianImage from '../assets/christianbechnørhave.png'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: 'workshop',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await apiCall('/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          inquiry_type: formData.inquiryType,
          message: formData.message
        }),
      })
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          email: '',
          inquiryType: 'workshop',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Klar til at komme i gang?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interesseret i vores workshop eller har spørgsmål? Vi svarer typisk inden for 24 timer.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Send besked
              </h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-700 rounded-2xl p-6 mb-8">
                  <p className="text-green-800 dark:text-green-200 text-lg">
                    Tak for din besked! Vi vender tilbage til dig inden for 24 timer.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 rounded-2xl p-6 mb-8">
                  <p className="text-red-800 dark:text-red-200 text-lg">
                    Der skete en fejl. Prøv igen eller kontakt os direkte på email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      Virksomhed
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Type af forespørgsel
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                  >
                    <option value="workshop">Workshop</option>
                    <option value="speaking">Foredrag & Konferencer</option>
                    <option value="consulting">Rådgivning</option>
                    <option value="general">Generel forespørgsel</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Besked *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Fortæl os om jeres team, udfordringer, og hvad I håber at opnå med workshoppen..."
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full text-lg py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    "Sender..."
                  ) : (
                    <>
                      Send besked
                      <Send className="w-6 h-6 ml-3" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Mød holdet bag workshoppen
                </h4>
                <div className="space-y-8">
                  {/* Kasper Junge */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={kasperImage} 
                        alt="Kasper Junge" 
                        className="w-20 h-20 rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Kasper Junge
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                        Danmarks førende AI-influencer og AI Engineer community bygger.
                      </p>
                    </div>
                  </div>

                  {/* Christian Bech Nørhave */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={christianImage} 
                        alt="Christian Bech Nørhave" 
                        className="w-20 h-20 rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Christian Bech Nørhave
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                        Futurist og digitaliseringsrådgiver med 20+ års erfaring i at omsætte AI-hype til konkrete resultater.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                  <p className="text-blue-800 dark:text-blue-200 text-lg font-medium text-center">
                    Vi svarer personligt på alle henvendelser inden for 24 timer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 