import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToCollection = () => {
    const element = document.querySelector('#collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-model.jpg"
          alt="Elegant Nigerian Fashion"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
        <div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse-glow opacity-30" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold/10 rounded-full animate-pulse-glow animation-delay-500 opacity-20" />
      
      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-1/4 animate-float opacity-40">
        <Sparkles className="w-6 h-6 text-gold" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-float animation-delay-300 opacity-30">
        <Sparkles className="w-4 h-4 text-gold-light" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float animation-delay-600 opacity-20">
        <Sparkles className="w-5 h-5 text-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-cream/80">
              Premium Nigerian Fashion
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Elegant{' '}
            <span className="text-gold-gradient">Nigerian</span>
            <br />
            Women's Fashion
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-cream/70 mb-10 max-w-lg leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Discover the perfect blend of tradition and modern elegance. 
            Handcrafted Ankara, Lace, and Asoebi designs that celebrate 
            African heritage.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={scrollToCollection}
              className="group px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-1"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/+2348012345678?text=Hello,%20I'm%20interested%20in%20your%20collection"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold/50 text-gold font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-gold/10 transition-all duration-500 hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient">
                500+
              </div>
              <div className="text-sm text-cream/60 mt-1">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient">
                10+
              </div>
              <div className="text-sm text-cream/60 mt-1">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient">
                100%
              </div>
              <div className="text-sm text-cream/60 mt-1">Handcrafted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
};

export default Hero;
