import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed hero video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/busysignalhero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55, filter: 'saturate(0.85) brightness(0.6)' }}
        />
      </div>

      {/* Warm gradient overlays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0806 0%, rgba(10,8,6,0.7) 45%, rgba(10,8,6,0.2) 70%, rgba(10,8,6,0.5) 100%)' }}
      />

      {/* Amber left accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-amber to-transparent opacity-60 z-[2]" />

      {/* Ghost text watermark */}
      <div
        className="absolute inset-0 z-[2] flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-[clamp(5rem,20vw,18rem)] leading-none tracking-widest uppercase"
          style={{ color: 'rgba(212,120,14,0.05)' }}
        >
          SIGNAL
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-8 bg-amber" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              Saint Ann, Jamaica · VP Records
            </span>
          </motion.div>

          {/* Name — stacked split */}
          <h1 className="font-display font-bold uppercase leading-[0.88] tracking-tight">
            <motion.span
              className="block text-[clamp(4rem,14vw,12rem)] text-warm-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              BUSY
            </motion.span>
            <motion.span
              className="block text-[clamp(4rem,14vw,12rem)] text-amber"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              SIGNAL
            </motion.span>
          </h1>

          {/* Divider */}
          <motion.div
            className="h-px bg-amber/25 my-6 max-w-lg"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          />

          {/* Tagline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-light leading-relaxed">
              Melodic Dancehall<br className="md:hidden" />
              <span className="hidden md:inline"> · </span>
              Jamaica's Finest
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#music"
                className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 bg-amber text-deep hover:bg-amber-bright transition-colors duration-200"
              >
                Listen Now
              </a>
              <a
                href="#contact"
                className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 border border-sand/30 text-muted-light hover:border-sand hover:text-sand transition-all duration-200"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#music"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-amber transition-colors z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.4, duration: 0.4 }, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
