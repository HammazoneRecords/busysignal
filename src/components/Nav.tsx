import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { label: 'Music',   href: '#music' },
  { label: 'Story',   href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Merch',   href: '/merch', isRoute: true },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-deep/95 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-widest text-warm-white hover:text-amber transition-colors font-bold">
          BUSY SIGNAL<span className="text-amber">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-light hover:text-amber transition-colors duration-200"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-light hover:text-amber transition-colors duration-200"
              >
                {l.label}
              </a>
            )
          ))}
          <Link
            to="/travel-bags"
            className="font-display text-sm uppercase tracking-widest px-5 py-2 border border-sand/40 text-sand/60 hover:border-sand hover:text-sand transition-all duration-200"
          >
            Trav Bag
          </Link>
          <a
            href="#contact"
            className="font-display text-sm uppercase tracking-widest px-5 py-2 border border-amber text-amber hover:bg-amber hover:text-deep transition-all duration-200"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-warm-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-mid overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(l => (
                l.isRoute ? (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl uppercase tracking-wide text-warm-white hover:text-amber transition-colors font-bold"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl uppercase tracking-wide text-warm-white hover:text-amber transition-colors font-bold"
                  >
                    {l.label}
                  </a>
                )
              ))}
              <Link
                to="/travel-bags"
                onClick={() => setOpen(false)}
                className="font-display text-sm uppercase tracking-widest px-5 py-3 border border-sand/40 text-sand/60 text-center hover:border-sand hover:text-sand transition-all duration-200 mt-2 font-bold"
              >
                Trav Bag
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-display text-sm uppercase tracking-widest px-5 py-3 border border-amber text-amber text-center hover:bg-amber hover:text-deep transition-all duration-200 mt-2 font-bold"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
