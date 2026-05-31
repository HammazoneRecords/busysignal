import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 irie-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-amber" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] uppercase text-warm-white leading-none mb-8 tracking-wider">
              WORK WITH<br />
              <span className="text-amber">BUSY SIGNAL</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-muted-light leading-relaxed mb-10 max-w-sm">
              For concert bookings, brand partnerships, festival appearances, media collaborations, and international touring — contact management directly.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-amber/50 mb-1">Management</p>
                <div className="flex items-center gap-3 group">
                  <Mail size={14} className="text-amber shrink-0" />
                  <a
                    href="mailto:Turfmusicent1@gmail.com"
                    className="font-mono text-sm text-muted-light hover:text-warm-white transition-colors"
                  >
                    Turfmusicent1@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-amber/50 mb-1">Bookings</p>
                <div className="flex items-center gap-3 group mb-1">
                  <Mail size={14} className="text-amber shrink-0" />
                  <a
                    href="mailto:BookingBusySignal@gmail.com"
                    className="font-mono text-sm text-muted-light hover:text-warm-white transition-colors"
                  >
                    BookingBusySignal@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone size={14} className="text-amber shrink-0" />
                  <a
                    href="tel:+14168718185"
                    className="font-mono text-sm text-muted-light hover:text-warm-white transition-colors"
                  >
                    +1 (416) 871-8185
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 group pt-2">
                <Instagram size={14} className="text-amber shrink-0" />
                <a
                  href="https://www.instagram.com/busysignal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted-light hover:text-amber transition-colors"
                >
                  @busysignal
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Twitter size={14} className="text-amber shrink-0" />
                <a
                  href="https://twitter.com/busysignal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted-light hover:text-amber transition-colors"
                >
                  @busysignal
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6 px-4 py-3 border border-amber/30 bg-amber/5 flex items-start gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber leading-relaxed">
                Contact form activates upon site ownership. Bookings currently handled through management directly.
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  disabled
                  placeholder="Name"
                  className="col-span-1 bg-deep-mid border border-amber/10 px-4 py-3 font-sans text-sm text-muted placeholder:text-muted/40 outline-none cursor-not-allowed w-full"
                />
                <input
                  disabled
                  placeholder="Organization"
                  className="col-span-1 bg-deep-mid border border-amber/10 px-4 py-3 font-sans text-sm text-muted placeholder:text-muted/40 outline-none cursor-not-allowed w-full"
                />
              </div>
              <input
                disabled
                placeholder="Event / Opportunity"
                className="bg-deep-mid border border-amber/10 px-4 py-3 font-sans text-sm text-muted placeholder:text-muted/40 outline-none cursor-not-allowed w-full"
              />
              <textarea
                disabled
                rows={4}
                placeholder="Message..."
                className="bg-deep-mid border border-amber/10 px-4 py-3 font-sans text-sm text-muted placeholder:text-muted/40 outline-none cursor-not-allowed w-full resize-none"
              />
              <button
                disabled
                className="w-full font-display font-bold text-sm uppercase tracking-widest px-6 py-4 bg-amber/15 text-amber/40 cursor-not-allowed"
              >
                Send Enquiry
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
