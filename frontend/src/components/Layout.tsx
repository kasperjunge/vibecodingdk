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
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Kasper Junge. Alle rettigheder forbeholdes.
            </div>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/kasper-juunge/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://podcasts.apple.com/dk/podcast/verbos-ai-og-softwareudvikling/id1650151292" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Verbos Podcast
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 