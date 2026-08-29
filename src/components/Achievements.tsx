import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'Generative AI Certification',
    issuer: 'NAVTTC',
    year: '2025',
    type: 'Professional Certification',
    description: 'Specialized training in generative modeling, prompt engineering, fine-tuning, and practical generative AI deployment workflows.',
  },
  {
    title: 'Ethical Hacking Certification',
    issuer: 'NAVTTC',
    year: '2025',
    type: 'Professional Certification',
    description: 'Rigorous course covering network security assessments, vulnerability scanning, and cybersecurity defenses.',
  },
  {
    title: 'Python & AI/ML Coursework Series',
    issuer: 'HEC Coursera License',
    year: '2024 — 2025',
    type: 'Academic Specialization',
    description: 'Comprehensive foundational online coursework covering Python for Data Science, Neural Networks, and Scikit-learn.',
  },
]

const achievements = [
  {
    title: "Prime Minister's Laptop Scheme Award",
    organization: 'Government of Pakistan',
    type: 'National Merit Honor',
    year: 'Merit Award',
    description: 'Selected as a merit-based award recipient under the Government of Pakistan scheme recognizing top-tier academic performers.',
  },
  {
    title: 'Engineering College Admission Test (ECAT) Qualification',
    organization: 'Standardized Engineering Entrance Exam',
    type: 'Competitive Examination',
    year: 'Qualified',
    description: 'Successfully qualified Pakistan’s prestigious competitive engineering entrance examination with top standing for AI admission.',
  },
  {
    title: 'Inter-College Chess Competition Runner-Up',
    organization: 'Inter-Collegiate Sports Board',
    type: 'Strategic Competition',
    year: 'Runner-Up',
    description: 'Achieved runner-up position, showcasing advanced strategic planning, spatial reasoning, and critical decision-making under intense constraints.',
  },
]

const memberships = [
  {
    organization: 'Institute of Electrical and Electronics Engineers (IEEE)',
    role: 'Member',
    detail: 'Active participant in university-level technical workshops, engineering hackathons, and research symposiums.',
  },
  {
    organization: 'Google Developer Group (GDG)',
    role: 'Community Member',
    detail: 'Engaged attendee in technical AI/ML developer conferences, Google Cloud workshops, and developer meetups.',
  },
  {
    organization: 'Amazon Web Services (AWS) Community',
    role: 'Community Member',
    detail: 'Participated in AWS cloud architecture, serverless workflows, and scalable cloud computing development sessions.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Honors & Activities</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          HONORS &<br />CERTIFICATIONS
        </motion.h2>

        {/* Certifications Block */}
        <div className="mb-20">
          <motion.h3
            {...fadeInUp}
            className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-8"
          >
            // CERTIFICATIONS & CREDENTIALS
          </motion.h3>

          <div className="space-y-0">
            {certifications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/20 transition-colors px-4 -mx-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-5">
                    <span className="text-xs font-mono text-emerald-400 block mb-1">
                      {item.issuer} • {item.year}
                    </span>
                    <h4 className="text-lg md:text-xl text-white font-light">
                      {item.title}
                    </h4>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </div>

        {/* Honors & Awards Block */}
        <div className="mb-20">
          <motion.h3
            {...fadeInUp}
            className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-8"
          >
            // AWARDS & RECOGNITIONS
          </motion.h3>

          <div className="space-y-0">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/20 transition-colors px-4 -mx-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-5">
                    <span className="text-xs font-mono text-gray-500 block mb-1">
                      {item.organization}
                    </span>
                    <h4 className="text-lg md:text-xl text-white font-light">
                      {item.title}
                    </h4>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </div>

        {/* Professional Community Memberships */}
        <div>
          <motion.h3
            {...fadeInUp}
            className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-8"
          >
            // COMMUNITY INVOLVEMENT & ACTIVITIES
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.organization}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-800 p-6 bg-[#0a0a0a]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-gray-400 uppercase">
                    {membership.role}
                  </span>
                </div>
                <h4 className="text-base font-light text-white mb-2">
                  {membership.organization}
                </h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {membership.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Achievements as Speaking }
