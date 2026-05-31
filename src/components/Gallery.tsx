import { motion } from 'motion/react';

const IMAGES = [
  { src: '/gallery/IMG_9038.jpg', span: 'col-span-1', rows: 'row-span-2' },
  { src: '/gallery/IMG_9039.jpg', span: 'col-span-1', rows: 'row-span-1' },
  { src: '/gallery/IMG_9041.jpg', span: 'col-span-1', rows: 'row-span-1' },
  { src: '/gallery/IMG_9042.jpg', span: 'col-span-1', rows: 'row-span-2' },
  { src: '/gallery/IMG_9043.jpg', span: 'col-span-1', rows: 'row-span-1' },
  { src: '/gallery/IMG_9044.jpg', span: 'col-span-1', rows: 'row-span-1' },
  { src: '/gallery/IMG_9045.jpg', span: 'col-span-1', rows: 'row-span-1' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-deep-mid border-y border-amber/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-amber" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Gallery</span>
        </div>

        <h2 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] uppercase text-warm-white leading-none mb-16 tracking-wider">
          BUSY<br />
          <span className="text-amber">VISUALS</span>
        </h2>

        {/* Desktop: masonry-style grid */}
        <div className="hidden md:grid grid-cols-3 gap-px bg-amber/5"
          style={{ gridTemplateRows: 'repeat(3, 260px)' }}>
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`${img.span} ${img.rows} overflow-hidden group`}
            >
              <img
                src={img.src}
                alt="Busy Signal"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-px bg-amber/5">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={img.src}
                alt="Busy Signal"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
