import { motion } from 'motion/react';
import { PlaneTakeoff } from 'lucide-react';
import { Link } from 'react-router-dom';
import PreOrderCapture from './PreOrderCapture';

const PRODUCTS = [
  {
    id: 'busy-suitcase-set',
    name: 'Suitcase Set',
    variant: 'Carry-On + Check-In',
    detail: 'Hardshell · city map print · spinner wheels',
    image: '/busysignalsuitcase.png',
  },
  {
    id: 'busy-duffel-set',
    name: 'Do Not Disturb Duffel',
    variant: 'Travel + Gym Set',
    detail: 'Waxed canvas · Busy Signal edition · two sizes',
    image: '/busysignaltravelduffel.png',
  },
  {
    id: 'busy-backpack',
    name: 'Backpack',
    variant: 'One Size',
    detail: 'Premium travel backpack · city map print',
    image: '/busybackpack.png',
  },
];

const COMING_SOON = [
  { name: 'Carry-On Bag',         detail: 'Individual carry-on — city map print' },
  { name: 'Travel Accessories',   detail: 'Tags, pouches, passport holders' },
  { name: 'Limited Edition',      detail: 'Exclusive drops — Busy Signal collectors' },
];

export default function TravelBags() {
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Brand Extension</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,5rem)] uppercase leading-none tracking-widest font-bold">
            <span className="text-warm-white">Travel</span> <span className="text-amber">Bags</span>
          </h1>
          <p className="font-sans text-sm text-muted-light mt-3">Premium suitcases and travel gear. Built for the road. Designed for style.</p>
        </motion.div>

        {/* Live products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {PRODUCTS.map((item, i) => (
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

        {/* Coming soon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {COMING_SOON.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (PRODUCTS.length + i) * 0.1 }}
              className="border border-amber/10 bg-deep-light opacity-50"
            >
              <div className="flex items-center justify-center bg-deep-mid" style={{ aspectRatio: '1/1' }}>
                <div className="text-center">
                  <PlaneTakeoff size={40} className="text-amber/20 mx-auto mb-3" strokeWidth={1} />
                  <p className="font-mono text-[9px] uppercase tracking-widest text-amber/30">Coming Soon</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl uppercase tracking-wider text-warm-white/50 mb-1 font-bold">{item.name}</h3>
                <p className="font-sans text-xs text-muted/60">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}
