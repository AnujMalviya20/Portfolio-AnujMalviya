const Projects = () => {
  const projects = [
    {
      name: 'SQL Query Debugger & Validation Engine',
      hackathon: 'Independent / Research Project',
      date: '2025-2026',
      role: 'Backend Developer / Data Engineer',
      problem: 'Execute, validate, and optimize SQL queries against a structured SQLite dataset with feedback and scoring.',
      approach: 'Designed backend data processing system with RESTful FastAPI endpoints to simulate iterative query execution and stateful sessions. Implemented query validation and reward-based scoring to provide structured feedback.',
      techStack: 'Python, FastAPI, SQLite, Docker, Hugging Face Spaces',
      outcome: 'Provided a reproducible environment for testing and validating SQL queries with scoring and feedback; containerized for deployment on Hugging Face Spaces.',
      github: '#',
      demo: '#'
    },
    {
      name: 'FlowGuard — Smart Traffic Management (RAMSITA 2026)',
      hackathon: 'RAMSITA 2026 (Outstanding Research Poster Award)',
      date: 'February 2026',
      role: 'Researcher & Developer',
      problem: 'Dynamic congestion control and emergency corridor creation using intelligent automation and sensor integration.',
      approach: 'Developed smart traffic optimization logic with real-time signal automation using sensors and intelligent prioritization for emergency vehicles. Presented research poster at an international conference.',
      techStack: 'IoT, Smart Sensors, Automation Systems, AI-based Traffic Logic',
      outcome: 'Received Outstanding Research Poster Award; demonstrated prototype and research findings at RAMSITA 2026.',
      github: '#',
      demo: '#'
    },
    {
      name: 'Alexandria — AI Video Learning Companion (TIT Srijan 2026)',
      hackathon: 'TIT Srijan 2026',
      date: 'May 2026',
      role: 'Full-Stack AI Developer',
      problem: 'Create an AI-powered platform for smart summarization and contextual learning from video content.',
      approach: 'Built RAG-based contextual Q&A, timestamp navigation, and AI-generated summaries. Implemented a responsive full-stack app integrating transcription and vector search.',
      techStack: 'FastAPI, React.js, Gemini AI, RAG, Vector DB, AssemblyAI',
      outcome: 'Secured 5th position; delivered a functional prototype with summarization and contextual retrieval features.',
      github: '#',
      demo: '#'
    },
    {
      name: 'Structural Health Monitoring System (Prayatna 3.0)',
      hackathon: 'Prayatna 3.0',
      date: 'March 2026',
      role: 'Embedded & ML Engineer',
      problem: 'Monitor vibrations and tilt in high-rise buildings for predictive structural safety.',
      approach: 'Implemented edge AI on ESP32 with MPU6050 sensors, live dashboard for analytics, and anomaly detection for predictive alerts.',
      techStack: 'ESP32, MPU6050, Firebase, React.js, Edge AI',
      outcome: 'Built a working prototype for real-time monitoring and anomaly detection.',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Projects & Hackathon Work
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-app-card border border-app-border rounded-lg p-6 md:p-8 hover:border-accent-primary/60 transition-all duration-300 animate-slide-up shadow-card-soft hover:shadow-accent-soft"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                    <span className="flex items-center">
                      <span className="text-accent-primary mr-2">Event:</span>
                      {project.hackathon}
                    </span>
                    <span className="flex items-center">
                      <span className="text-accent-primary mr-2">Date:</span>
                      {project.date}
                    </span>
                    <span className="flex items-center">
                      <span className="text-accent-primary mr-2">Role:</span>
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-accent-primary mb-2">Problem Statement</h4>
                  <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-primary mb-2">Approach</h4>
                  <p className="text-text-secondary leading-relaxed">{project.approach}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-primary mb-2">Tech Stack</h4>
                  <p className="text-text-secondary">{project.techStack}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-primary mb-2">Outcome / Impact</h4>
                  <p className="text-text-secondary leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-transparent border border-accent-primary/80 hover:border-accent-hover text-text-primary rounded-lg transition-colors hover:shadow-accent-soft"
                >
                  GitHub Repository
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent-primary hover:bg-accent-hover text-white rounded-lg transition-colors shadow-accent-soft"
                >
                  Live Demo / Model / Dashboard
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
