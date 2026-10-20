import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, ExternalLink, HelpCircle, Menu, X, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/affiliateConfig';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#EE4D2D] to-[#FF6B4A] text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" />
        <span>Toàn Hương Shop • Săn Deal Shopee Chính Hãng • Hotline: 0961.513.578</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#EE4D2D] to-[#FF7A59] flex items-center justify-center shadow-md shadow-[#EE4D2D]/20 text-white group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-gray-900 whitespace-nowrap">
                    Toàn Hương <span className="text-[#EE4D2D]">Shop</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[#FFF0ED] text-[#EE4D2D] rounded-full border border-[#EE4D2D]/20 hidden xs:inline-block">
                    Chính Hãng
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 hidden sm:block">
                  Săn deal đúng giá • Mua đúng chỗ
                </span>
              </div>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm giày bảo hộ, mũ công trình, kính, găng tay..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 hover:bg-gray-100/80 focus:bg-white text-sm rounded-full border border-gray-200 focus:border-[#EE4D2D] focus:ring-2 focus:ring-[#EE4D2D]/20 transition-all outline-hidden"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Nav Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-sm font-semibold text-gray-700 hover:text-[#EE4D2D] px-3 py-2 rounded-lg transition-colors"
            >
              Sản Phẩm Bảo Hộ
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-sm font-semibold text-gray-700 hover:text-[#EE4D2D] px-3 py-2 rounded-lg transition-colors"
            >
              Tại Sao Chọn Chúng Tôi
            </button>

            {/* Quick guide for affiliate web owner */}
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors border border-gray-200/80 cursor-pointer"
              title="Hướng dẫn sửa link Affiliate"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#EE4D2D]" />
              <span>Đổi Link Affiliate</span>
            </button>

            {/* Hotline & Facebook Links */}
            <a
              href={`tel:${SITE_CONFIG.phoneNumber}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-50 hover:bg-orange-50 hover:text-[#EE4D2D] px-3 py-2 rounded-xl border border-gray-200 transition-colors"
              title="Gọi hotline tư vấn"
            >
              <Phone className="w-3.5 h-3.5 text-[#EE4D2D]" />
              <span>{SITE_CONFIG.phoneFormatted}</span>
            </a>

            <a
              href={SITE_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-xl transition-colors border border-blue-200"
              title="Fanpage Facebook Toàn Hương Shop"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href={`tel:${SITE_CONFIG.phoneNumber}`}
              className="p-2 text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100"
              title="Gọi hotline 0961.513.578"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#EE4D2D] rounded-lg focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="pb-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Tìm giày bảo hộ, mũ công trình, kính, găng tay..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-gray-50 text-sm rounded-full border border-gray-200 focus:border-[#EE4D2D] focus:bg-white focus:ring-1 focus:ring-[#EE4D2D] outline-hidden transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 shadow-lg animate-fadeIn">
          <button
            onClick={() => scrollToSection('catalog')}
            className="block w-full text-left font-medium text-gray-800 hover:text-[#EE4D2D] py-2"
          >
            🛡️ Danh Sách Đồ Bảo Hộ
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="block w-full text-left font-medium text-gray-800 hover:text-[#EE4D2D] py-2"
          >
            🛡️ Lý Do Chọn Chúng Tôi
          </button>

          {/* Contact info in mobile drawer */}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href={`tel:${SITE_CONFIG.phoneNumber}`}
              className="flex items-center gap-2 text-sm font-bold text-gray-800 py-1.5 hover:text-[#EE4D2D]"
            >
              <Phone className="w-4 h-4 text-[#EE4D2D]" />
              <span>Hotline: {SITE_CONFIG.phoneFormatted}</span>
            </a>
            <a
              href={SITE_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-blue-600 py-1.5"
            >
              <span>Facebook Toàn Hương Shop</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="text-xs text-gray-500 block truncate"
            >
              Email: {SITE_CONFIG.contactEmail}
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGuide();
            }}
            className="block w-full text-left font-medium text-[#EE4D2D] py-2 flex items-center gap-2 pt-2 border-t border-gray-100"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Hướng dẫn đổi link Affiliate của bạn</span>
          </button>
        </div>
      )}
    </header>
  );
};
