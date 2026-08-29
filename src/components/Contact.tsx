import { motion } from 'framer-motion'

const directChannels = [
  { label: 'EMAIL ADDRESS', value: 'syed.mudassaralishah13@gmail.com', href: 'mailto:syed.mudassaralishah13@gmail.com' },
  { label: 'PHONE / WHATSAPP', value: '+92 316 4427024', href: 'tel:+923164427024' },
  { label: 'LOCATION', value: 'Lahore, Pakistan (UET Lahore)', href: 'https://maps.google.com/?q=UET+Lahore' },
]

const onlineProfiles = [
  { label: 'LINKEDIN PROFILE', handle: 'in/7syedmudassarali', href: 'https://www.linkedin.com/in/7syedmudassarali/' },
  { label: 'GITHUB REPOSITORY', handle: 'github.com/7syedmudassarali', href: 'https://github.com/7syedmudassarali' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Get In Touch</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          LET'S CONNECT
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-800 mb-12 lg:mb-16"
        />

        {/* Subtitle / Availability */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            AVAILABLE FOR AI & ML RESEARCH,<br />
            SOFTWARE ENGINEERING,<br />
            AND TECHNICAL COLLABORATIONS
          </h3>
          <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
            LOCATION: LAHORE, PAKISTAN • OPEN TO REMOTE & HYBRID OPPORTUNITIES
          </p>
        </motion.div>

        {/* Direct Channels */}
        <div className="space-y-0 max-w-3xl mb-16">
          {directChannels.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div>
                <span className="text-xs font-mono text-gray-500 tracking-widest block mb-1">
                  {item.label}
                </span>
                <span className="text-base sm:text-lg md:text-xl text-gray-200 group-hover:text-white font-light transition-colors">
                  {item.value}
                </span>
              </div>
              <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                ↗
              </span>
            </motion.a>
          ))}

          {onlineProfiles.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div>
                <span className="text-xs font-mono text-gray-500 tracking-widest block mb-1">
                  {item.label}
                </span>
                <span className="text-base sm:text-lg md:text-xl text-gray-200 group-hover:text-white font-light transition-colors">
                  {item.handle}
                </span>
              </div>
              <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                ↗
              </span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs font-mono text-gray-500">
            © {new Date().getFullYear()} SYED MUDASSAR ALI. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs font-mono text-gray-500">
            BS ARTIFICIAL INTELLIGENCE — UET LAHORE, PAKISTAN
          </p>
        </motion.footer>
      </div>
    </section>
  )
}

