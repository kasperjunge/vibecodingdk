import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 gradient-radial opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full gradient-conic opacity-15"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <p className="text-gray-300 text-xl lg:text-2xl font-medium mb-4 text-shadow-sm">
                © 2024 Kasper Junge. Alle rettigheder forbeholdes.
              </p>
              <p className="text-gray-400 text-lg lg:text-xl">
                Lead AI Engineer & Workshop Facilitator
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 