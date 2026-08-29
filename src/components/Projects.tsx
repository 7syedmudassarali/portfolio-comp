import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Titanic Dataset Exploratory Data Analysis & Modeling',
    category: 'Data Science & Machine Learning',
    period: 'Academic / Independent Project',
    description: 'Conducted structured exploratory data analysis (EDA), statistical visualization, and feature manipulation on the Titanic benchmark dataset. Leveraged NumPy and Pandas for data wrangling, missing data imputation, and Matplotlib for deep demographic and survival correlation modeling.',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'EDA'],
    link: 'https://github.com/7syedmudassarali',
  },
  {
    title: 'University Quiz Portal System',
    category: 'Full-Stack Systems & Security',
    period: 'Academic Systems Project',
    description: 'Engineered an anti-cheating, high-concurrency online evaluation engine for university-scale student assessments. Implemented robust SQL transactional schemas, concurrent session locks, and strict backend verification.',
    tags: ['Python', 'SQL Concurrency', 'Anti-Cheating', 'Backend Architecture', 'Testing'],
    link: 'https://github.com/7syedmudassarali',
  },
  {
    title: 'Department Timetable Management System',
    category: 'Optimization & Algorithms',
    period: 'Department of Electrical Engineering, UET Lahore',
    description: 'Developed an automated class scheduling application used by the Department of Electrical Engineering at UET Lahore to resolve complex timetable conflicts across semesters, instructors, and laboratory resources, minimizing schedule friction and streamlining academic operations.',
    tags: ['Python', 'Constraint Optimization', 'Scheduling Algorithms', 'Data Modeling'],
    link: 'https://github.com/7syedmudassarali',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Featured Projects</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS &<br />RESEARCH
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 group hover:bg-gray-900/20 transition-colors px-4 -mx-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left: Title & Category */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-emerald-400/90 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs font-mono text-gray-500">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Right: Description & Tags */}
                <div className="lg:col-span-6">
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-gray-400 border border-gray-800 rounded bg-[#111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    <span>View Repository on GitHub</span>
                    <span>↗</span>
                  </a>
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
