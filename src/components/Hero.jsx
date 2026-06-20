import { useEffect, useState } from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const [subtitleText, setSubtitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullSubtitle = "Data Science & AI Enthusiast";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setSubtitleText(fullSubtitle);
      setShowCursor(false);
      return;
    }

    let currentIndex = 0;
    let typingInterval;
    const timeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (currentIndex <= fullSubtitle.length) {
          setSubtitleText(fullSubtitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 50);
    }, 800);

    return () => {
      clearTimeout(timeout);
      clearInterval(typingInterval);
    };
  }, []);

  const renderText = (word, startIndex) => {
    return word.split('').map((char, index) => {
      const delay = (startIndex + index) * 0.04;
      return (
        <span 
          key={index} 
          className="inline-block animate-text-blur-in opacity-0"
          style={{ animationFillMode: 'forwards', animationDelay: `${delay}s`, animationDuration: '0.5s' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full h-[1px] animate-aurora-shimmer z-0" style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #a78bfa, transparent)', backgroundSize: '200% 100%' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 flex justify-center gap-4 flex-wrap">
          <span className="text-accent-primary uppercase flex">
            {renderText("ANUJ", 0)}
          </span>
          <span className="text-text-primary uppercase flex">
            {renderText("MALVIYA", 4)} 
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-text-secondary h-8 md:h-9 flex items-center justify-center">
          <span>{subtitleText}</span>
          <span className={`inline-block w-[3px] h-[1em] ml-1 bg-accent-primary align-middle ${showCursor ? 'animate-pulse' : 'opacity-0'} transition-opacity duration-300`}></span>
        </h2>
        
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed animate-text-blur-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards', animationDuration: '0.5s' }}>
          I build data-driven and AI-powered solutions through hands-on projects,
          hackathons, and continuous learning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-text-blur-in opacity-0 pointer-events-auto" style={{ animationDelay: '1.4s', animationFillMode: 'forwards', animationDuration: '0.5s' }}>
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-300 animate-pulse-glow hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(124,58,237,0.6)] hover:![animation:none]"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
