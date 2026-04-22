import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950 transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8">
        <span className="text-4xl sm:text-5xl font-serif font-bold text-gold-gradient animate-pulse">
          BLAGOFU.K
        </span>
      </div>

      {/* Spinner */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-4 border-gold/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-gold border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
        <div
          className="absolute inset-2 border-4 border-gold/30 rounded-full"
          style={{ animation: 'spin 2s linear infinite reverse' }}
        />
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-cream/60 text-sm font-medium">
        Loading Experience...
      </p>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gold/10 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gold/5 rounded-full animate-pulse animation-delay-500 opacity-20" />
    </div>
  );
};

export default LoadingScreen;
