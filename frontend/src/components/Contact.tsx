import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Mail, MapPin, Linkedin, Mic, Send } from 'lucide-react'
import { apiCall } from '../config/api'

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
            Skal vi tage en snak?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interesseret i en workshop eller har spørgsmål? Jeg svarer typisk inden for 24 timer.
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
                    Tak for din besked! Jeg vender tilbage til dig inden for 24 timer.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 rounded-2xl p-6 mb-8">
                  <p className="text-red-800 dark:text-red-200 text-lg">
                    Der skete en fejl. Prøv igen eller kontakt mig direkte på email.
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
                    placeholder="Fortæl mig om jeres team, udfordringer, og hvad I håber at opnå..."
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
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
                  Kontakt information
                </h3>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h4>
                      <a 
                        href="mailto:kasper@kasperjunge.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
                      >
                        kasper@kasperjunge.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                      <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lokation</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">Danmark</p>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        Workshop kun on-site i Danmark
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Følg mig</h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/in/kasper-juunge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="text-lg font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://podcasts.apple.com/dk/podcast/verbos-ai-og-softwareudvikling/id1650151292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Mic className="w-6 h-6" />
                    <span className="text-lg font-medium">Verbos Podcast</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCB1Cg40cN77lhbKBColnbCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-lg font-medium">YouTube</span>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-3xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Response tid
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Jeg svarer typisk inden for <strong className="text-blue-600 dark:text-blue-400">24 timer</strong> på arbejdsdage. 
                  For akutte forespørgsler, kontakt mig venligst på LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 