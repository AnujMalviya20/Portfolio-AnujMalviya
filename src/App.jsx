import { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen bg-app-bg text-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-app-bg/90 backdrop-blur-sm border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-text-primary">Anuj Malviya</div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-text-secondary hover:text-accent-primary transition-colors">Home</a>
              <a href="#skills" className="text-text-secondary hover:text-accent-primary transition-colors">Skills</a>
              <a href="#projects" className="text-text-secondary hover:text-accent-primary transition-colors">Projects</a>
              <a href="#hackathons" className="text-text-secondary hover:text-accent-primary transition-colors">Events</a>
              <a href="#about" className="text-text-secondary hover:text-accent-primary transition-colors">About</a>
              <a href="#contact" className="text-text-secondary hover:text-accent-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Hackathons />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-app-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Anuj Malviya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
