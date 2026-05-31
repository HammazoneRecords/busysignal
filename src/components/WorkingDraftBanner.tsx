interface WorkingDraftBannerProps {
  accentColor?: 'amber' | 'crimson';
}

export default function WorkingDraftBanner({ accentColor = 'amber' }: WorkingDraftBannerProps) {
  const accentClass = accentColor === 'amber' ? 'text-amber' : 'text-crimson';

  return (
    <div className="w-full bg-deep-mid text-center text-xs font-mono tracking-widest uppercase py-2 px-4">
      <span className="text-muted-light">Working Draft — </span>
      <a
        href="https://mindwaveja.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${accentClass} underline hover:opacity-80 transition-opacity`}
      >
        Purchase this artist site
      </a>
      <span className="text-muted-light"> via MindWave JA</span>
    </div>
  );
}
