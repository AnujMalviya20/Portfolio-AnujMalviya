import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import About from './components/About'
import Contact from './components/Contact'
import MouseTrail from './components/MouseTrail'
import useStormBackground from './components/useStormBackground'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  const canvasRef = useRef(null);
  const flashRef = useRef(null);
  useStormBackground(canvasRef, flashRef);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ background: '#00000d', minHeight: '100vh' }} className="text-text-primary">
      <MouseTrail />
      
      {/* global canvas — fixed behind entire site */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* screen flash on click */}
      <div
        ref={flashRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(150, 120, 255, 0.07)',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.08s',
        }}
      />

      {/* all your existing sections above z-index 1 */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
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
    </div>
  )
}

export default App
