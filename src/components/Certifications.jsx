const Certifications = () => {
  const items = [
    {
      title: 'RAMSITA 2026 — Outstanding Research Poster Award',
      event: '2nd International Conference on Recent Advancement and Modernization in Sustainable Intelligent Technologies & Applications (RAMSITA 2026)',
      location: 'Acropolis Institute of Technology & Research, Indore',
      date: 'February 2026',
      description:
        "Received the Outstanding Research Poster Award for presenting FlowGuard, a smart traffic management system focused on dynamic congestion control and emergency corridor creation using intelligent automation and sensor integration.",
      highlights: [
        'Smart traffic optimization & emergency vehicle prioritization',
        'Real-time signal automation using sensors',
        'Research presentation at an international conference',
        'Team-based innovation & implementation'
      ]
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Certifications & Achievements</h2>

        <div className="space-y-8">
          {items.map((it, idx) => (
            <div key={idx} className="bg-app-card border border-app-border rounded-lg p-6 md:p-8 shadow-card-soft">
              <h3 className="text-2xl font-bold mb-2 text-white">{it.title}</h3>
              <div className="text-sm text-text-secondary mb-4">{it.event} — {it.location} — {it.date}</div>
              <p className="text-text-secondary leading-relaxed mb-4">{it.description}</p>

              <ul className="list-disc pl-6 text-text-secondary">
                {it.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
