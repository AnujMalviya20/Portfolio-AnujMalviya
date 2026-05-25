const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'PySpark', 'Pandas', 'NumPy']
    },
    {
      title: 'Databases',
      skills: ['SQLite', 'Data Validation', 'Query Processing']
    },
    {
      title: 'Data Engineering',
      skills: ['Data Handling', 'Data Cleaning', 'ETL']
    },
    {
      title: 'Analytics & BI',
      skills: ['Tableau', 'Power BI']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Hugging Face Spaces', 'Docker', 'Git', 'GitHub']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-app-surface border border-app-border rounded-lg p-6 animate-slide-up shadow-card-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-app-card border border-app-border rounded-full text-sm text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
