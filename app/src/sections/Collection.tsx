import { useState } from 'react';
import { MessageCircle, Eye, X, RefreshCw } from 'lucide-react';
import { useProducts, useScrollReveal, useWhatsApp } from '@/hooks/useApi';
import type { Product } from '@/types';

const Collection = () => {
  const { products, loading, refetch } = useProducts();
  const { openWhatsApp } = useWhatsApp('+2348012345678');
  const { ref, isVisible } = useScrollReveal(0.1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Default products if API returns empty
  const defaultProducts: Product[] = [
    {
      id: '1',
      title: 'Royal Ankara Gown',
      category: 'Ankara',
      description: 'Elegant traditional gown with modern silhouette',
      image: '/images/product-ankara-1.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Bridal Lace Masterpiece',
      category: 'Lace',
      description: 'Exquisite lace gown for special occasions',
      image: '/images/product-lace-1.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Wine Asoebi Elegance',
      category: 'Asoebi',
      description: 'Stunning asoebi for celebrations',
      image: '/images/product-asoebi-1.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Modern Ankara Jumpsuit',
      category: 'Ankara',
      description: 'Contemporary design with African prints',
      image: '/images/product-ankara-2.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'Golden Lace Bridal',
      category: 'Lace',
      description: 'Traditional bridal wear with gold embroidery',
      image: '/images/product-lace-2.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Coral Celebration Wear',
      category: 'Asoebi',
      description: 'Perfect for weddings and special events',
      image: '/images/product-asoebi-2.jpg',
      createdAt: new Date().toISOString(),
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const handleWhatsAppClick = (product: Product) => {
    const message = `Hello, I'm interested in this outfit: ${product.title} (${product.category})`;
    openWhatsApp(message);
  };

  const openLightbox = (product: Product) => {
    setSelectedImage(product.image);
    setSelectedProduct(product);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedProduct(null);
  };

  return (
    <>
      <section
        id="collection"
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
                Our Collection
              </span>
              <button
                onClick={refetch}
                disabled={loading}
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-gold hover:text-cream hover:bg-gold/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Refresh products"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">
              Featured <span className="text-gold-gradient">Designs</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Explore our curated collection of handcrafted Nigerian fashion. 
              Each piece tells a story of heritage and elegance.
            </p>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-2xl bg-stone-900 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900">
                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full glass text-xs font-medium text-gold">
                        {product.category}
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <button
                        onClick={() => openLightbox(product)}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-gold hover:bg-gold/20 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-cream/60 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <button
                        onClick={() => handleWhatsAppClick(product)}
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
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
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
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedProduct?.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {selectedProduct && (
              <div className="mt-4 text-center">
                <h3 className="font-serif text-2xl text-cream">
                  {selectedProduct.title}
                </h3>
                <p className="text-gold">{selectedProduct.category}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Collection;
