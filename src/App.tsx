import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { EditGuideModal } from './components/EditGuideModal';
import { Product } from './data/products';
import { ArrowUp, Flame, Phone } from 'lucide-react';
import { SITE_CONFIG } from './data/affiliateConfig';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] selection:bg-[#EE4D2D] selection:text-white">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreDeals={scrollToCatalog} />

        {/* Product Catalog Section */}
        <ProductCatalog
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Affiliate Edit Guide Modal */}
      <EditGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Floating Action Button: Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white text-gray-800 shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-[#EE4D2D] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Sticky Quick Navigation Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={scrollToCatalog}
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#EE4D2D] active:scale-95 py-1"
        >
          <Flame className="w-5 h-5 text-[#EE4D2D]" />
          <span className="text-[10px] font-bold">Sản Phẩm</span>
        </button>

        <a
          href={`tel:${SITE_CONFIG.phoneNumber}`}
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#EE4D2D] active:scale-95 py-1"
        >
          <Phone className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold">Hotline</span>
        </a>

        <a
          href={SITE_CONFIG.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-blue-600 hover:text-blue-700 active:scale-95 py-1"
        >
          <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">f</span>
          <span className="text-[10px] font-bold">Facebook</span>
        </a>

        <button
          onClick={() => setIsGuideOpen(true)}
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#EE4D2D] active:scale-95 py-1"
        >
          <span className="w-5 h-5 rounded-full bg-[#FFF0ED] text-[#EE4D2D] font-bold text-xs flex items-center justify-center">?</span>
          <span className="text-[10px] font-bold">Đổi Link</span>
        </button>
      </div>
    </div>
  );
}
