"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-end border-b border-stone/20 bg-parchment overflow-hidden">
      {/* Background subtle noise/grain texture and watermarks */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#1A1816 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end pb-8 sm:pb-12">
          
          {/* Asymmetric Left Column: Sits in lower third, invitation card feeling */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-end pt-12 lg:pt-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-brass" />
              <p className="text-xs uppercase tracking-[0.28em] font-medium text-stone">
                Bespoke Event &amp; Wedding Architects &bull; Jaipur
              </p>
            </motion.div>

            {/* Headline - Editorial Newsreader */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.12] text-ink font-normal tracking-[-0.01em]"
            >
              Timeless celebrations staged with architectural restraint.
            </motion.h1>

            {/* Signature hairline divider */}
            <motion.div
              variants={itemVariants}
              className="my-8 w-24 h-[1px] bg-oxblood"
              role="separator"
            />

            {/* Editorial Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink/85 font-light leading-relaxed max-w-xl mb-10"
            >
              From private heritage palace buyouts across Rajasthan to high-level
              corporate summits and monumental spatial scenography. We choreograph
              immersive gatherings where every detail is considered, quiet, and lasting.
            </motion.p>

            {/* Invitation-card style action moment - One bold color CTA, no arrow */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                href="#inquiry"
                className="px-8 py-4 bg-oxblood text-bone hover:bg-oxblood-deep transition-colors duration-300 text-xs tracking-[0.22em] uppercase font-medium shadow-sm"
              >
                Request Consultation
              </Link>
              <Link
                href="#services"
                className="px-6 py-4 text-xs tracking-[0.22em] uppercase font-medium text-ink hover:text-oxblood border-b border-ink/20 hover:border-oxblood transition-all"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Subtle credential notes at base */}
            <motion.div
              variants={itemVariants}
              className="mt-14 pt-6 border-t border-stone/20 flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] text-stone"
            >
              <span>Heritage Palaces</span>
              <span className="w-1 h-1 rounded-full bg-stone/40" />
              <span>C-Suite Summits</span>
              <span className="w-1 h-1 rounded-full bg-stone/40" />
              <span>Bespoke Scenography</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Visual Panel with Archival Framing */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="relative bg-bone border border-stone/30 p-4 sm:p-5 shadow-sm">
              {/* Card framing outline */}
              <div className="relative aspect-[4/5] bg-parchment-light border border-stone/20 overflow-hidden flex flex-col justify-between">
                
                {/* Visual panel header bar */}
                <div className="absolute top-0 left-0 right-0 z-20 px-5 py-3 bg-gradient-to-b from-ink/75 via-ink/30 to-transparent flex justify-between items-center text-[10px] tracking-[0.25em] text-bone uppercase">
                  <span>Plate No. 01</span>
                  <span>Jaipur Atelier</span>
                </div>

                {/* Real Editorial Event Photography via Next.js Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/hero_palace.jpg"
                    alt="Bespoke luxury candlelit banquet dinner in a heritage Rajasthan palace courtyard"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Footnote on visual panel overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent flex justify-between items-end text-bone">
                  <div>
                    <p className="font-serif text-bone text-sm sm:text-base italic">
                      The Courtyard Pavilion Banquet
                    </p>
                    <p className="text-[10px] text-parchment/80 tracking-[0.18em] uppercase mt-0.5">
                      Rambagh &bull; Samode &bull; Alila Fort
                    </p>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-brass uppercase bg-ink/70 px-2 py-0.5 border border-brass/40">
                    ROYAL COMMISSION
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
