import { Heart, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'Collection', href: '#collection' },
      { name: 'Materials', href: '#materials' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Custom Designs', href: '#' },
      { name: 'Bridal Wear', href: '#' },
      { name: 'Asoebi', href: '#' },
      { name: 'Fabric Sales', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Care Instructions', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <footer className="relative bg-stone-950 pt-20 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href="#home" className="inline-block mb-6">
                <span className="text-3xl font-serif font-bold text-gold-gradient">
                  BLAGOFU.K
                </span>
              </a>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                Celebrating African heritage through exquisite fashion. 
                Handcrafted Ankara, Lace, and Asoebi designs for the modern woman.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-gold/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-gold/20 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-gold/20 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream mb-6">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="p-8 rounded-2xl glass mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-cream/60 text-sm">
                  Get updates on new collections and exclusive offers.
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-semibold rounded-xl hover:shadow-gold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-cream/40 text-sm flex items-center gap-1">
              © {currentYear} BLAGOFU.K. Made with{' '}
              <Heart className="w-4 h-4 text-wine fill-wine" /> in Nigeria
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-cream/40 hover:text-gold text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/40 hover:text-gold text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-30 w-12 h-12 rounded-full glass flex items-center justify-center text-cream hover:text-gold hover:bg-gold/20 transition-all duration-300 shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+2348012345678?text=Hello,%20I'm%20interested%20in%20your%20collection"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 animate-pulse-glow"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
};

export default Footer;
