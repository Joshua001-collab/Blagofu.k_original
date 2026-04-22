import { useScrollReveal } from '@/hooks/useApi';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every piece we create is made with love and dedication to our craft.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We use only the finest materials and techniques for lasting beauty.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local artisans and celebrating African heritage.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-stone-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/images/hero-model.jpg"
                  alt="BLAGOFU.K Fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 p-6 rounded-2xl glass max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-gold-dark flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-stone-950" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-gold-gradient">
                      10+
                    </div>
                    <div className="text-sm text-cream/60">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-3xl" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-gold text-sm font-medium mb-4">
              About Us
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
              Celebrating African{' '}
              <span className="text-gold-gradient">Heritage</span> Through Fashion
            </h2>

            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                BLAGOFU.K was born from a passion for preserving and celebrating 
                the rich textile traditions of Nigeria. What started as a small 
                family business has grown into a beloved brand known for exquisite 
                craftsmanship and timeless designs.
              </p>
              <p>
                We specialize in creating stunning childrens's wear, Ankara, Lace, and Asoebi
                outfits that blend traditional African aesthetics with contemporary 
                fashion sensibilities. Each piece is meticulously handcrafted by 
                skilled artisans who share our commitment to excellence.
              </p>
              <p>
                Our mission is simple: to make every woman feel confident, 
                beautiful, and connected to her roots. Whether it's for a wedding, 
                celebration, or everyday elegance, we create fashion that tells 
                your unique story.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`text-center p-4 rounded-xl glass hover:bg-white/10 transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <value.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-semibold text-cream mb-1">
                    {value.title}
                  </h3>
                  <p className="text-xs text-cream/60">{value.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-700 delay-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="https://wa.me/+2348012345678?text=Hello,%20I'd%20like%20to%20know%20more%20about%20BLAGOFU.K"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-semibold rounded-full hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
              >
                Get In Touch
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2" />
    </section>
  );
};

export default About;
