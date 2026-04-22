import { useScrollReveal } from '@/hooks/useApi';
import { Play, Sparkles } from 'lucide-react';

const VideoSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-24 bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Video Container */}
          <div className="relative aspect-video">
            {/* Video Thumbnail */}
           <video src="       "></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/30" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-8 sm:px-12 lg:px-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-cream/80">
                    Behind The Scenes
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight">
                  Crafted with{' '}
                  <span className="text-gold-gradient">Precision</span> and{' '}
                  <span className="text-gold-gradient">Passion</span>
                </h2>

                <p className="text-cream/70 text-lg mb-8 max-w-lg">
                  Every stitch tells a story. Watch how our skilled artisans 
                  transform beautiful fabrics into stunning works of art.
                </p>

                {/* Play Button */}
                <button className="group relative w-20 h-20 rounded-full bg-gradient-to-r from-gold to-gold-dark flex items-center justify-center hover:shadow-gold-lg transition-all duration-500 hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
                  <Play className="w-8 h-8 text-stone-950 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/20 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/20 rounded-bl-3xl" />
          </div>
        </div>

        {/* Features */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center p-6 rounded-2xl glass hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-cream mb-2">
              Handcrafted
            </h3>
            <p className="text-cream/60 text-sm">
              Every piece is carefully handmade by skilled artisans
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl glass hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-cream mb-2">
              Premium Quality
            </h3>
            <p className="text-cream/60 text-sm">
              Only the finest fabrics and materials are used
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl glass hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-cream mb-2">
              Timely Delivery
            </h3>
            <p className="text-cream/60 text-sm">
              Your order delivered on time, every time
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
};

export default VideoSection;
