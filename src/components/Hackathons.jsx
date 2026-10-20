import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hackathons = () => {
  const [activeGalleryEvent, setActiveGalleryEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewProject = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewGallery = (index) => {
    setActiveGalleryEvent(index);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setActiveGalleryEvent(null);
  };

  // Stats Icons
  const TrophyIcon = () => (
    <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M19 3v4M5 3h14M5 3c0 3.866 3.134 7 7 7s7-3.134 7-7M12 10v4M8 14h8M10 14v4h4v-4M7 18h10v2H7v-2z" />
    </svg>
  );

  const RocketIcon = () => (
    <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 21v-3.5a2 2 0 00-2-2h-1a2 2 0 00-2 2V21M12 11.5v-1.5M12 5.5V3M7.5 16.5A10.5 10.5 0 0112 3a10.5 10.5 0 014.5 13.5l-2.5 4.5h-4l-2.5-4.5z" />
    </svg>
  );

  const DocumentIcon = () => (
    <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6M9 16h6M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  );

  const BulbIcon = () => (
    <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );

  const stats = [
    { label: "Awards", value: "4+", icon: <TrophyIcon /> },
    { label: "Hackathons & Events", value: "8+", icon: <RocketIcon /> },
    { label: "Research Conferences", value: "3", icon: <DocumentIcon /> },
    { label: "Working Projects", value: "7+", icon: <BulbIcon /> }
  ];

  const events = [
    {
      name: 'RAMSITA 2026 — Outstanding Research Poster Award',
      year: '2026',
      contribution: 'Presented FlowGuard — a smart traffic management system focused on dynamic congestion control and emergency corridor creation using intelligent automation and sensor integration. Received Outstanding Research Poster Award.',
      certificate: null,
      images: [
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=RAMSITA+Photo+1', caption: 'Outstanding Research Poster Award presentation.' },
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=RAMSITA+Photo+2', caption: 'Discussing the FlowGuard architecture.' }
      ]
    },
    {
      name: 'TIT Srijan 2026 — 5th Position',
      year: '2026',
      contribution: 'Built Alexandria — AI-powered video learning companion with RAG-based contextual Q&A, summaries, and timestamp navigation. Secured 5th position.',
      certificate: null,
      images: [
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=TIT+Srijan+Photo+1', caption: 'Presenting Alexandria AI at the finals.' }
      ]
    },
    {
      name: 'Prayatna 3.0 — Participant',
      year: '2026',
      contribution: 'Built AI-based Structural Health Monitoring System for high-rise buildings using IoT sensors and real-time analytics.',
      certificate: null,
      images: [
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=Prayatna+Photo+1', caption: 'Working on the Edge AI IoT hardware.' }
      ]
    },
    {
      name: 'AI मंथन 2025 — Participant',
      year: '2025',
      contribution: 'Participated in national-level prototype hackathon focused on AI-driven innovation and rapid problem-solving.',
      certificate: null,
      images: [
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=AI+Manthan+Photo+1', caption: 'Rapid prototyping session during the 24-hour sprint.' }
      ]
    },
    {
      name: "Hack'Vento 2K26 — Participant",
      year: '2026',
      contribution: 'Participated in Hack\'Vento 2K26 (GDG On Campus) focusing on web technologies and AI solutions.',
      certificate: null,
      images: [
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=Hack+Vento+Photo+1', caption: 'Brainstorming web tech solutions.' }
      ]
    },
    {
      name: "UDBHAV'26 — Round 1 Qualifier",
      year: '2026',
      contribution: 'Qualified initial online PPT submission round presenting innovative technical ideas and project solutions.',
      certificate: null,
      images: [
        { src: 'https://placehold.co/800x600/1e1e24/7c3aed?text=UDBHAV+Photo+1', caption: 'Online PPT presentation qualifier round.' }
      ]
    }
  ];

  const activeEvent = activeGalleryEvent !== null ? events[activeGalleryEvent] : null;

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeEvent && activeEvent.images?.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % activeEvent.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeEvent && activeEvent.images?.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + activeEvent.images.length) % activeEvent.images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeGalleryEvent === null) return;
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGalleryEvent]);

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Hackathons & Events
        </motion.h2>

        {/* Section Summary Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="bg-app-surface border border-app-border rounded-xl p-5 shadow-card-soft hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:border-accent-primary/40 transition-all duration-300 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-3 bg-app-bg p-3 rounded-full border border-app-border">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm font-medium text-text-secondary uppercase tracking-wide text-center">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group bg-app-surface border border-app-border rounded-xl p-6 hover:border-accent-primary/60 transition-all duration-300 shadow-card-soft hover:shadow-accent-soft flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-accent-primary transition-colors pr-4">
                    {event.name}
                  </h3>
                  <span className="text-sm font-medium text-accent-primary bg-accent-primary/10 px-2 py-1 rounded border border-accent-primary/20 shrink-0">
                    {event.year}
                  </span>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                {event.contribution}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-app-border/50">
                <button
                  onClick={handleViewProject}
                  className="flex-1 py-2.5 px-4 bg-accent-primary hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] text-center"
                >
                  View Project
                </button>
                <button
                  onClick={() => handleViewGallery(index)}
                  className="flex-1 py-2.5 px-4 bg-transparent border border-accent-primary text-accent-primary hover:bg-accent-primary/10 text-sm font-semibold rounded-lg transition-all duration-300 text-center"
                >
                  View Gallery
                </button>
              </div>
              
              {event.certificate && (
                <div className="mt-4 text-center">
                  <a
                    href={event.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-hover text-sm underline opacity-80 hover:opacity-100"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integrated Lightbox Modal */}
      <AnimatePresence>
        {activeGalleryEvent !== null && activeEvent && activeEvent.images?.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d0f]/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-text-secondary hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons (only show if multiple images) */}
            {activeEvent.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-10 text-text-secondary hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50"
                  onClick={prevImage}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute right-4 md:right-10 text-text-secondary hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50"
                  onClick={nextImage}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image Container */}
            <div className="relative max-w-5xl w-full px-12 md:px-24 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.15)] border border-accent-primary/20 bg-app-surface p-2">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={activeEvent.images[currentImageIndex].src} 
                  alt={`${activeEvent.name} photo ${currentImageIndex + 1}`}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>
              <motion.div 
                key={`text-${currentImageIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6 text-center max-w-2xl"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {activeEvent.name}
                </h3>
                <p className="text-text-secondary text-base md:text-lg">
                  {activeEvent.images[currentImageIndex].caption}
                </p>
                {activeEvent.images.length > 1 && (
                  <p className="text-text-muted text-sm mt-3 font-mono">
                    {currentImageIndex + 1} / {activeEvent.images.length}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hackathons
