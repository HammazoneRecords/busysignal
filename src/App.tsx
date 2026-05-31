import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Music from './components/Music';
import Journey from './components/Journey';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Merch from './components/Merch';
import TravelBags from './components/TravelBags';
import WorkingDraftBanner from './components/WorkingDraftBanner';
import Preload from './components/Preload';

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Music />
      <Journey />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const [showPreload, setShowPreload] = useState(true);

  useEffect(() => {
    // Only show preload on home page on first load
    const hasSeenPreload = sessionStorage.getItem('busysignal-preload-seen');
    if (hasSeenPreload) {
      setShowPreload(false);
    }
  }, []);

  const handlePreloadComplete = () => {
    setShowPreload(false);
    sessionStorage.setItem('busysignal-preload-seen', 'true');
  };

  return (
    <div className="min-h-screen">
      {showPreload && <Preload videoSrc="/busypreload.mov" onComplete={handlePreloadComplete} />}
      <WorkingDraftBanner accentColor="amber" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/travel-bags" element={<TravelBags />} />
      </Routes>
    </div>
  );
}
