import { motion } from 'framer-motion'

const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQFsdxvW1LRrgA/profile-displayphoto-crop_800_800/B4DZ3PrgLOHYAI-/0/1777305781615?e=1789603200&v=beta&t=ro-XyI_elthyAKKTsswmua5ZnEWEeEr_nrYZHgBVQ30"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-start">
      {/* Editorial Black & White Portrait positioned in natural visual balance with the headline */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] flex justify-end items-center overflow-hidden pointer-events-none">
        {/* Scaled & positioned image container with expanded vertical visible area */}
        <div className="relative w-full md:w-[48%] lg:w-[42%] h-[72vh] md:h-[86vh] lg:h-[92vh] mr-0 md:mr-6 lg:mr-12 mt-6 md:mt-0 flex items-center justify-center opacity-95">
          <img
            src={profileImageUrl}
            alt="Syed Mudassar Ali — AI & Machine Learning"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[50%_20%] filter grayscale contrast-110 brightness-95"
          />
          {/* Subtle edge feathering focused strictly near the boundary edges */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
        </div>
        {/* Background ambient fade to ensure typography clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 md:via-background/40 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-24 md:py-0 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="w-full max-w-6xl">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Tagline / Sub-label */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono tracking-widest text-gray-300 uppercase">
                AI & Machine Learning Specialist • UET Lahore
              </span>
            </div>

            <h1 className="font-display leading-[0.88] tracking-tighter text-[15vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[8.5rem]">
              <span className="block text-white">SYED</span>
              <span className="block text-white">MUDASSAR</span>
              <span className="block text-white/90">ALI</span>
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

