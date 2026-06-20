import { motion } from 'framer-motion'

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
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-app-surface border border-app-border rounded-lg p-6 shadow-card-soft hover:border-purple-500/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-app-card border border-app-border rounded-full text-sm text-text-secondary hover:border-accent-primary hover:text-white transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
