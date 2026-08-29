import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Developer — University Quiz Portal System',
    company: 'University of Engineering and Technology (UET)',
    location: 'Lahore, Pakistan',
    period: '2026 — Present',
    description: 'Designed and built a secure, anti-cheating online quiz platform for university-wide assessments. Conducted pre-deployment system testing and functional verification for multi-user examination workflows, utilizing robust backend logic and SQL database structures to handle concurrency smoothly under high load.',
    skills: ['Python', 'Anti-Cheating Architecture', 'SQL Concurrency', 'Backend Systems', 'System Testing', 'Security'],
  },
  {
    title: 'Developer — Timetable Management System',
    company: 'Department of Electrical Engineering, UET Lahore',
    location: 'Lahore, Pakistan',
    period: '2026 — Present',
    description: 'Developed an automated scheduling application to structure and manage departmental class timetables, eliminating room clashes, optimizing professor schedules, and streamlining semester-wide academic logistics.',
    skills: ['Python', 'Algorithm Design', 'Automated Scheduling', 'Data Modeling', 'UI/UX Design'],
  },
  {
    title: 'Co-Lead — CSS Society',
    company: 'Department of Computer Engineering, UET Lahore',
    location: 'Lahore, Pakistan',
    period: '2026 — Present',
    description: 'Coordinate technical events, hands-on programming workshops, algorithmic problem-solving sessions, and student competitions for the departmental society, fostering engineering excellence and peer mentorship.',
    skills: ['Technical Leadership', 'Community Organizing', 'Workshops', 'Hackathons', 'Mentorship'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Experience & Roles</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EXPERIENCE &<br />LEADERSHIP
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 font-light">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 font-mono">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-xs sm:text-sm text-gray-500 font-mono tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base font-light">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-400 border border-gray-800 rounded-full font-mono bg-[#111]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}

