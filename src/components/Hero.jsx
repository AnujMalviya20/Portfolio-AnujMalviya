const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-accent-primary uppercase">ANUJ</span>{' '}
          <span className="text-text-primary uppercase">MALVIYA</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-text-secondary">
          Data Science & AI Enthusiast
        </h2>
        
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          I build data-driven and AI-powered solutions through hands-on projects,
          hackathons, and continuous learning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-accent-soft"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
