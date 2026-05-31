import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';

type Track = typeof TRACKS[0];

const TRACKS = [
  {
    id: 'fGJ9by6x4ag',
    title: 'Jamaica Love',
    year: '2026',
    label: 'VP Records',
    featured: true,
  },
  {
    id: 'X99SrwyH0vY',
    title: 'Party Next Door',
    year: '2025',
    label: 'VP Records',
  },
  {
    id: 'RDNNARn1Bt0',
    title: 'Your Smile',
    year: '2025',
    label: 'VP Records',
  },
  {
    id: 'bW-tkF52wGI',
    title: 'Tonight',
    year: '2023',
    label: 'VP Records',
  },
  {
    id: 'xVsUrOge2Ac',
    title: 'Mr Luv N Run',
    year: '2023',
    label: 'VP Records',
  },
  {
    id: 'vjL07PZAyG4',
    title: 'Missing You A Lot',
    year: '2024',
    label: 'VP Records',
  },
  {
    id: 'vOQ0V9OhN4o',
    title: 'Come Over (Missing You)',
    year: 'Classic',
    label: 'VP Records',
  },
];

function TrackCard({ track, index, isPlaying, onPlay }: { track: Track; index: number; isPlaying: boolean; onPlay: () => void }) {
  const thumb = `https://img.youtube.com/vi/${track.id}/hqdefault.jpg`;
  const isFeatured = track.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group relative overflow-hidden ${isFeatured ? 'col-span-2 md:col-span-2' : ''}`}
    >
      {isPlaying ? (
        <div className="relative" style={{ paddingBottom: isFeatured ? '40%' : '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${track.id}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title={track.title}
          />
        </div>
      ) : (
        <div
          className="relative cursor-pointer"
          style={{ paddingBottom: isFeatured ? '40%' : '56.25%' }}
          onClick={onPlay}
        >
          <img
            src={thumb}
            alt={track.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:saturate-150"
          />
          <div className="absolute inset-0 bg-deep/45 group-hover:bg-deep/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-sand/40 bg-deep/60 flex items-center justify-center group-hover:border-amber group-hover:bg-amber/20 transition-all duration-300 backdrop-blur-sm">
              <Play size={20} className="text-sand group-hover:text-amber transition-colors ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      <div className="bg-deep-mid px-4 py-3 flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-lg tracking-wider text-warm-white group-hover:text-amber transition-colors">
            {track.title}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">
            {track.year} · {track.label}
          </p>
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${track.id}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="text-muted hover:text-amber transition-colors p-1"
          aria-label="Open on YouTube"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Music() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="music" className="py-24 bg-deep-mid irie-grain border-y border-amber/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-amber" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Music</span>
        </div>

        <h2 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] uppercase text-warm-white leading-none mb-16 tracking-wider">
          THE SOUND<br />
          <span className="text-amber">OF JAMAICA</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-amber/5">
          {TRACKS.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              index={i}
              isPlaying={playingId === track.id}
              onPlay={() => setPlayingId(track.id)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://www.youtube.com/@BusySignalRealVEVO"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-sm uppercase tracking-widest px-8 py-3 border border-sand/20 text-sand/60 hover:border-sand hover:text-sand transition-all duration-200 flex items-center gap-2"
          >
            <ExternalLink size={14} />
            All Videos on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
