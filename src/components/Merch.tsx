import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import PreOrderCapture from './PreOrderCapture';

const MERCH = [
  {
    id: 'turf-crewneck-navy',
    name: 'TURF Crewneck',
    variant: 'Navy',
    detail: 'Premium fleece · Busy Signal TURF print',
    image: '/turf-crewneck-navy-nobg.png',
  },
  {
    id: 'turf-tee-red',
    name: 'TURF Tee',
    variant: 'Red',
    detail: 'Premium cotton · Busy Signal TURF print',
    image: '/turf-tee-red-nobg.png',
  },
  {
    id: 'turf-tee-oatmeal',
    name: 'TURF Tee',
    variant: 'Oatmeal',
    detail: 'Premium cotton · Busy Signal TURF print',
    image: '/turf-tee-oatmeal-nobg.png',
  },
];

export default function Merch() {
  return (
    <div className="min-h-screen bg-deep text-warm-white">
      {/* Header */}
      <header className="sticky top-0 z-40 flex justify-between items-center px-8 md:px-12 py-5 bg-deep/90 backdrop-blur-md border-b border-amber/10">
        <Link to="/" className="font-display text-lg tracking-widest text-warm-white hover:text-amber transition-colors font-bold">
          BUSY SIGNAL<span className="text-amber">.</span>
        </Link>
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-light hover:text-amber transition-colors">← Back</Link>
      </header>

      <main className="max-w-5xl mx-auto px-8 md:px-12 py-16">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Official Store</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,5rem)] uppercase leading-none tracking-widest font-bold">
            <span className="text-warm-white">Busy Signal</span> <span className="text-amber">Merch</span>
          </h1>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {MERCH.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-amber/20 bg-deep-light hover:border-amber/50 transition-colors"
            >
              <div className="overflow-hidden bg-deep-mid" style={{ aspectRatio: '1/1' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber/50 mb-1">{item.variant}</p>
                <h3 className="font-display text-xl uppercase tracking-wider text-warm-white mb-1 font-bold">{item.name}</h3>
                <p className="font-sans text-xs text-muted-light mb-5">{item.detail}</p>
                <PreOrderCapture productId={item.id} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand extensions */}
        <div className="border-t border-amber/20 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber/40" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">More Collections</span>
            </div>
            <h2 className="font-display text-3xl uppercase tracking-widest text-warm-white font-bold">Brand Extensions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/travel-bags"
                className="block p-8 border border-amber/40 hover:border-amber/80 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">🧳</div>
                <h3 className="font-display text-2xl uppercase text-amber mb-2 font-bold">Travel Bags</h3>
                <p className="font-sans text-sm text-muted-light mb-4">Premium suitcases and travel gear</p>
                <div className="flex items-center gap-2 text-amber font-mono text-xs uppercase tracking-widest">
                  Explore <ArrowUpRight size={12} />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
