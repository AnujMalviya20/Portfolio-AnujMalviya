const Hackathons = () => {
  const events = [
    {
      name: 'RAMSITA 2026 — Outstanding Research Poster Award',
      year: '2026',
      teamSize: 'Team',
      contribution: 'Presented FlowGuard — a smart traffic management system focused on dynamic congestion control and emergency corridor creation using intelligent automation and sensor integration. Received Outstanding Research Poster Award.',
      certificate: null,
      details: {
        location: 'Acropolis Institute of Technology & Research, Indore',
        date: 'February 2026',
        highlights: [
          'Smart traffic optimization & emergency vehicle prioritization',
          'Real-time signal automation using sensors',
          'Research presentation at international conference',
          'Team-based innovation & implementation'
        ]
      }
    },
    {
      name: 'TIT Srijan 2026 — 5th Position',
      year: '2026',
      teamSize: 'Team',
      contribution: 'Built Alexandria — AI-powered video learning companion with RAG-based contextual Q&A, summaries, and timestamp navigation. Secured 5th position.',
      certificate: null,
      details: {
        location: 'Technocrats Institute of Technology, Bhopal',
        date: 'May 2026',
        highlights: [
          'AI-generated summaries & topic breakdowns',
          'RAG-based contextual Q&A system',
          'Timestamp navigation & smart retrieval',
          'Responsive full-stack AI platform'
        ]
      }
    },
    {
      name: 'Prayatna 3.0 — Participant',
      year: '2026',
      teamSize: 'Team',
      contribution: 'Built AI-based Structural Health Monitoring System for high-rise buildings using IoT sensors and real-time analytics.',
      certificate: null,
      details: {
        location: 'Acropolis Institute of Technology & Research, Indore',
        date: 'March 2026',
        highlights: [
          'Real-time vibration & tilt monitoring',
          'Edge AI processing with ESP32',
          'Live dashboard & anomaly detection',
          'Predictive structural safety monitoring'
        ]
      }
    },
    {
      name: 'AI मंथन 2025 — Participant',
      year: '2025',
      teamSize: 'Team',
      contribution: 'Participated in national-level prototype hackathon focused on AI-driven innovation and rapid problem-solving.',
      certificate: null,
      details: {
        location: 'Acropolis Institute of Technology & Research, Indore',
        date: 'November 2025',
        highlights: [
          'AI/ML, Full Stack Development, Rapid Prototyping, Team Collaboration'
        ]
      }
    },
    {
      name: "Hack'Vento 2K26 — Participant",
      year: '2026',
      teamSize: 'Team',
      contribution: 'Participated in Hack\'Vento 2K26 (GDG On Campus) focusing on web technologies and AI solutions.',
      certificate: null,
      details: {
        location: 'IET DAVV, Indore',
        date: '2026',
        highlights: ['Team Collaboration, Innovation, Web Technologies, AI Solutions']
      }
    },
    {
      name: "UDBHAV'26 — Round 1 Qualifier",
      year: '2026',
      teamSize: 'Team',
      contribution: 'Qualified initial online PPT submission round presenting innovative technical ideas and project solutions.',
      certificate: null,
      details: {
        location: 'SAGE University, Indore',
        date: '2026',
        highlights: ['Technical problem-solving approach', 'Innovation-focused project presentation']
      }
    }
  ]

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Hackathons & Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-app-surface border border-app-border rounded-lg p-6 hover:border-accent-primary/60 transition-all duration-300 animate-slide-up shadow-card-soft hover:shadow-accent-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {event.name}
                </h3>
                <span className="text-sm text-text-secondary md:ml-4">{event.year}</span>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-text-secondary">
                  <span className="text-accent-primary">Team Size:</span> {event.teamSize}
                </span>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                {event.contribution}
              </p>
              
              {event.certificate && (
                <a
                  href={event.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-hover text-sm underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hackathons
