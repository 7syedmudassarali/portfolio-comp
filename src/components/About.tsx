import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Profile & Vision</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block - Editorial Overview */}
        <div className="max-w-4xl mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
          >
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light">
              Syed Mudassar Ali is an Artificial Intelligence and Machine Learning specialist currently pursuing a Bachelor of Science in AI at the University of Engineering and Technology (UET) Lahore. He combines rigorous mathematical foundations with hands-on software development across neural networks, machine learning algorithms, and distributed database logic.
            </p>
          </motion.div>
        </div>

        {/* Quote / Highlight Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32 border-y border-gray-800 py-16 lg:py-24"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "BRIDGING NEURAL NETWORK THEORY<br />
            <span className="text-white underline underline-offset-8">WITH SCALABLE SYSTEMS</span><br />
            FOR REAL-WORLD IMPACT."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            BS ARTIFICIAL INTELLIGENCE — UET LAHORE (2025 — 2029)
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
              Beyond core machine learning research and Python programming, Mudassar actively serves as <span className="text-white font-medium">Co-Lead of the CSS Society</span> in the Department of Computer Engineering at UET Lahore. In this role, he spearheads university-wide hackathons, hands-on programming bootcamps, and technical seminars in collaboration with international engineering communities.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
              alt="Data Science and Computation"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              COMPUTER ENGINEERING & AI LABS — UET LAHORE
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
              alt="Software development & systems"
              className="w-full h-auto grayscale border border-gray-800"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SYSTEMS ENGINEERING & CONCURRENCY WORKFLOWS (2026)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
              Mudassar has architected production systems including an anti-cheating, high-concurrency <span className="text-white font-medium">University Quiz Portal System</span> and an automated <span className="text-white font-medium">Departmental Timetable Management System</span> used by the Department of Electrical Engineering, UET Lahore. Recognized by the Government of Pakistan under the Prime Minister's Laptop Scheme, he also holds certifications in Generative AI and Ethical Hacking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

