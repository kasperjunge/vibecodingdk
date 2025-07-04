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
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <p className="text-gray-300 text-lg font-medium mb-2">
                © 2024 Kasper Junge. Alle rettigheder forbeholdes.
              </p>
              <p className="text-gray-400">
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