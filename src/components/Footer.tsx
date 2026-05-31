export default function Footer() {
  return (
    <footer className="bg-deep-mid py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-xl tracking-widest text-warm-white">
          BUSY SIGNAL<span className="text-amber">.</span>
        </span>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted text-center">
          © {new Date().getFullYear()} Busy Signal · Reanno Gordon · All Rights Reserved
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/busysignal/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-amber transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@BusySignalRealVEVO"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-amber transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://twitter.com/busysignal"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-amber transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
