import { useState } from 'react';
import { MessageCircle, X, Eye, RefreshCw } from 'lucide-react';
import { useMaterials, useScrollReveal, useWhatsApp } from '@/hooks/useApi';
import type { Material } from '@/types';

const Materials = () => {
  const { materials, loading, refetch } = useMaterials();
  const { openWhatsApp } = useWhatsApp('+2348012345678');
  const { ref, isVisible } = useScrollReveal(0.1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  // Default materials if API returns empty
  const defaultMaterials: Material[] = [
    {
      id: '1',
      title: 'Premium Ankara Fabric',
      category: 'Ankara',
      description: 'High-quality African print fabric with vibrant colors and patterns',
      image: '/images/material-ankara.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Luxury Bridal Lace',
      category: 'Lace',
      description: 'Exquisite embroidered lace perfect for special occasions',
      image: '/images/material-lace.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Rich Asoebi Material',
      category: 'Asoebi',
      description: 'Traditional celebration fabric with elegant sheen',
      image: '/images/material-asoebi.jpg',
      createdAt: new Date().toISOString(),
    },
  ];

  const displayMaterials = materials.length > 0 ? materials : defaultMaterials;

  const handleWhatsAppClick = (material: Material) => {
    const message = `Hello, I'm interested in this material: ${material.title} (${material.category})`;
    openWhatsApp(message);
  };

  const openLightbox = (material: Material) => {
    setSelectedImage(material.image);
    setSelectedMaterial(material);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedMaterial(null);
  };

  return (
    <>
      <section
        id="materials"
        ref={ref}
        className="relative py-24 bg-stone-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-gold text-sm font-medium">
                Premium Fabrics
              </span>
              <button
                onClick={refetch}
                disabled={loading}
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-gold hover:text-cream hover:bg-gold/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Refresh materials"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">
              Our <span className="text-gold-gradient">Materials</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              We source only the finest fabrics from across Africa. 
              From vibrant Ankara to delicate lace, each material is 
              carefully selected for quality and beauty.
            </p>
          </div>

          {/* Materials Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl bg-stone-900 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayMaterials.map((material, index) => (
                <div
                  key={material.id}
                  className={`group relative transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900">
                    {/* Image */}
                    <img
                      src={material.image}
                      alt={material.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full glass text-xs font-medium text-gold">
                        {material.category}
                      </span>
                    </div>

                    {/* Quick View */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <button
                        onClick={() => openLightbox(material)}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-gold hover:bg-gold/20 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                        {material.title}
                      </h3>
                      <p className="text-sm text-cream/60 mb-4 line-clamp-2">
                        {material.description}
                      </p>
                      <button
                        onClick={() => handleWhatsAppClick(material)}
                        className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Additional Info */}
          <div
            className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 rounded-2xl glass text-center">
              <div className="text-3xl font-serif font-bold text-gold-gradient mb-2">
                100%
              </div>
              <div className="text-sm text-cream/60">Authentic African</div>
            </div>
            <div className="p-6 rounded-2xl glass text-center">
              <div className="text-3xl font-serif font-bold text-gold-gradient mb-2">
                50+
              </div>
              <div className="text-sm text-cream/60">Fabric Varieties</div>
            </div>
            <div className="p-6 rounded-2xl glass text-center">
              <div className="text-3xl font-serif font-bold text-gold-gradient mb-2">
                Premium
              </div>
              <div className="text-sm text-cream/60">Quality Guaranteed</div>
            </div>
            <div className="p-6 rounded-2xl glass text-center">
              <div className="text-3xl font-serif font-bold text-gold-gradient mb-2">
                Custom
              </div>
              <div className="text-sm text-cream/60">Orders Available</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-cream hover:text-gold transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedMaterial?.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {selectedMaterial && (
              <div className="mt-4 text-center">
                <h3 className="font-serif text-2xl text-cream">
                  {selectedMaterial.title}
                </h3>
                <p className="text-gold">{selectedMaterial.category}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Materials;
