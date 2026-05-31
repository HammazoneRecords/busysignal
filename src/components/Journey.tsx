import { motion } from 'motion/react';

const MILESTONES = [
  {
    year: '1979',
    title: 'Born in Saint Ann',
    body: 'Reanno Devon Gordon is born in Saint Ann Parish, Jamaica — the same island parish that gave the world Bob Marley. Raised between Saint Ann and the gritty realities of West Kingston.',
  },
  {
    year: '2005',
    title: 'Step Out — The Debut',
    body: 'Busy Signal breaks onto the dancehall scene with his debut single "Step Out." The frequency is distinct from day one — melodic, sharp, and unmistakably Jamaican.',
  },
  {
    year: '2008',
    title: 'Loaded — VP Records',
    body: 'The debut studio album "Loaded" arrives on VP Records. Fifteen tracks, regional chart success, and a reputation solidified as one of dancehall\'s most versatile voices.',
  },
  {
    year: '2012',
    title: 'Watch Out For This (Bumaye)',
    body: 'Collaborating with Major Lazer, Busy Signal hits European club charts with "Watch Out For This (Bumaye)." The record crosses genres, countries, and audiences — dancehall going global.',
  },
  {
    year: '2015',
    title: 'No Doubt Collaboration',
    body: 'Featured alongside No Doubt on their album Push and Shove. The reach extends into rock and alternative markets — proving the Busy Signal frequency has no ceiling.',
  },
  {
    year: '2019',
    title: 'Parts of the Puzzle',
    body: 'Third studio album "Parts of the Puzzle" enters the Billboard Reggae Albums chart at number 2. A mature, rounded work that shows full command of the craft.',
  },
  {
    year: '2026',
    title: 'Jamaica Love',
    body: 'The latest release "Jamaica Love" is an unfiltered tribute to the island — its beauty, its people, its sound. Busy Signal at his most honest. Still active. Still essential.',
  },
];

export default function Journey() {
  return (
    <section id="story" className="py-24 irie-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-amber" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Story</span>
        </div>

        <h2 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] uppercase text-warm-white leading-none mb-20 tracking-wider">
          THE MAN BEHIND<br />
          <span className="text-amber">THE SIGNAL</span>
        </h2>

        <div className="space-y-0">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year + m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-amber/[0.08] group"
            >
              <div className="md:w-[7.5rem] md:text-right shrink-0 pt-1">
                <span className="font-display font-bold text-2xl text-amber group-hover:text-amber-bright transition-colors">
                  {m.year}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase text-warm-white mb-3 tracking-wider">
                  {m.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-muted-light leading-relaxed max-w-2xl">
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
