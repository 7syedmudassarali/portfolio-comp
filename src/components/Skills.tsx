import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Areas of Expertise',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Analysis',
      'Python Programming',
      'Neural Networks',
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      'Python',
      'C++',
      'C',
      'HTML / CSS',
      'SystemVerilog',
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      'Neural Networks & Architectures',
      'Generative AI',
      'Machine Learning Fundamentals',
      'Linear & Logistic Regression',
      'Model Evaluation & Metrics',
    ],
  },
  {
    category: 'Data Science & Frameworks',
    skills: [
      'PyTorch',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib & Data Visualization',
    ],
  },
  {
    category: 'Backend & Systems Architecture',
    skills: [
      'SQL Database Concurrency',
      'Anti-Cheating Security Architecture',
      'Algorithm Design & Optimization',
      'System Testing & Verification',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Technical Competencies</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          TECHNICAL<br />SKILLS
        </motion.h2>

        {/* Skill Groups */}
        <div className="space-y-16">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className="border-t border-gray-800 pt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                <div className="lg:col-span-4">
                  <h3 className="text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase">
                    {group.category}
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 py-2 border-b border-gray-800/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                        <span className="text-base sm:text-lg text-gray-200 font-light">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}

