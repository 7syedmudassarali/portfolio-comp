import { motion } from 'framer-motion'

const educationList = [
  {
    institution: 'University of Engineering and Technology (UET)',
    location: 'Lahore, Pakistan',
    degree: 'Bachelor of Science in Artificial Intelligence',
    period: '2025 — 2029 (In Progress)',
    status: 'Current Status: 4th Semester • Expected Graduation: Jan 2029',
    description: 'Comprehensive study of artificial intelligence, deep learning architectures, mathematical optimization, statistical inference, algorithmic systems, and computational data science.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    imageLabel: 'UET LAHORE — BS ARTIFICIAL INTELLIGENCE (2025 — 2029)',
  },
  {
    institution: 'Punjab College Airline Campus',
    location: 'Lahore, Pakistan',
    degree: 'Intermediate in Computer Science (ICS)',
    period: '2022 — 2024',
    status: 'Completed',
    description: 'Built robust foundations in computer science theory, discrete mathematics, analytical reasoning, and basic software engineering practices.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    imageLabel: 'PUNJAB COLLEGE — INTERMEDIATE IN COMPUTER SCIENCE',
  },
  {
    institution: 'CH Rahmat Ali Memorial High School',
    location: 'Lahore, Pakistan',
    degree: 'Matriculation in Computer Science',
    period: '2020 — 2022',
    status: 'Completed with Distinction',
    description: 'Secondary academic foundation in mathematics, general science, and introductory information technology with high academic performance.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    imageLabel: 'CH RAHMAT ALI MEMORIAL — MATRICULATION IN CS',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Academic Foundation</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {educationList.map((edu, index) => (
            <div
              key={edu.degree}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center"
            >
              {/* Image side */}
              <motion.div
                {...fadeInUp}
                className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}
              >
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800 rounded-2xl"
                />
                <p className="mt-4 text-xs font-mono text-gray-500 tracking-widest uppercase">
                  {edu.imageLabel}
                </p>
              </motion.div>

              {/* Text side */}
              <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-gray-400">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-gray-300 font-normal mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-gray-500 mb-4">
                    {edu.location} • {edu.status}
                  </p>
                  <p className="text-gray-400 leading-relaxed text-sm lg:text-base font-light">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

