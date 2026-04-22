import { useState, useEffect } from 'react';
import LoadingScreen from '@/sections/LoadingScreen';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Collection from '@/sections/Collection';
import VideoSection from '@/sections/VideoSection';
import Materials from '@/sections/Materials';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950">
      {isLoading && <LoadingScreen />}
      
      <Navigation />
      
      <main>
        <Hero />
        <Collection />
        <VideoSection />
        <Materials />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
