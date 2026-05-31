import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloadProps {
  videoSrc: string;
  onComplete: () => void;
  autoplayDuration?: number;
}

export default function Preload({ videoSrc, onComplete, autoplayDuration = 5000 }: PreloadProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    onComplete();
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] bg-deep flex items-center justify-center overflow-hidden"
      >
        {/* Video container */}
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            src={videoSrc}
            onEnded={handleVideoEnd}
            onLoadedData={handleVideoLoaded}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover md:object-contain"
            style={{
              aspectRatio: '16 / 9',
            }}
          />

          {/* Mobile-friendly overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent opacity-30" />

          {/* Loading indicator */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-deep/80 backdrop-blur-sm"
              >
                <div className="w-12 h-12 border-2 border-amber/20 border-t-amber rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip button */}
          <AnimatePresence>
            {showSkip && !isLoading && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={handleSkip}
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 font-display text-xs md:text-sm uppercase tracking-widest px-4 md:px-6 py-2 md:py-3 border border-sand/40 text-sand/60 hover:border-sand hover:text-sand transition-all duration-200"
              >
                Skip ⏭
              </motion.button>
            )}
          </AnimatePresence>

          {/* Busy Signal branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 left-6 md:top-8 md:left-8 z-10"
          >
            <span className="font-display text-lg md:text-2xl tracking-widest text-warm-white font-bold">
              BUSY SIGNAL<span className="text-amber">.</span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
