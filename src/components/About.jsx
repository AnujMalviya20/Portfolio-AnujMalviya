import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          About Me
        </motion.h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-center">
            I am passionate about data science and artificial intelligence, constantly exploring how data-driven insights can solve real-world problems. 
            Through hands-on projects and active participation in hackathons, I've developed a strong foundation in machine learning, data analysis, and predictive modeling. 
            I thrive in collaborative environments where I can apply my technical skills to tackle complex challenges and deliver impactful solutions. 
            Currently seeking internships and entry-level opportunities where I can contribute to meaningful data science projects while continuing to grow and learn from experienced professionals in the field.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
