import React, { useState } from 'react';
import { Star, ExternalLink, ShieldCheck, ShoppingBag, Eye, Copy, Check } from 'lucide-react';
import { Product, formatPriceVND } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [copied, setCopied] = useState(false);

  // Determine tag style
  const getTagBadge = (tag: Product['tag']) => {
    switch (tag) {
      case 'Deal hot':
        return 'bg-gradient-to-r from-red-500 to-[#EE4D2D] text-white';
      case 'Bán chạy':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
      case 'Giảm sâu':
        return 'bg-gradient-to-r from-rose-600 to-pink-500 text-white';
      case 'Freeship Xtra':
        return 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white';
      default:
        return 'bg-[#EE4D2D] text-white';
    }
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(product.affiliateUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* Product Image Area */}
      <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Tag Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
          <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md shadow-sm ${getTagBadge(product.tag)}`}>
            {product.tag}
          </span>
          {product.isMall && (
            <span className="bg-[#D0011B] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider shadow-sm flex items-center gap-0.5">
              <span>Shopee</span>
              <span className="font-bold">Mall</span>
            </span>
          )}
        </div>

        {/* Discount Percent Badge */}
        {product.discountPercent && (
          <div className="absolute top-2.5 right-2.5 bg-amber-400 text-red-700 font-extrabold text-[11px] sm:text-xs px-1.5 py-1 rounded-lg shadow-sm border border-amber-300">
            -{product.discountPercent}%
          </div>
        )}

        {/* Quick View Button on Hover (Desktop) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="bg-white/95 hover:bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#EE4D2D]" />
            <span>Xem nhanh</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Shop name / Mall tag */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-1.5">
            <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="truncate">{product.shopName}</span>
          </div>

          {/* Title */}
          <h4 
            className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#EE4D2D] line-clamp-2 leading-snug mb-2 transition-colors cursor-pointer"
            onClick={() => onQuickView(product)}
            title={product.title}
          >
            {product.title}
          </h4>

          {/* Rating and Sold */}
          <div className="flex items-center gap-2 mb-3 text-[11px] sm:text-xs">
            <div className="flex items-center gap-0.5 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 font-medium">{product.soldCount}</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div>
          {/* Prices: Sale Price + Original Strikethrough */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-base sm:text-xl font-black text-[#EE4D2D] tracking-tight">
                {formatPriceVND(product.salePrice)}
              </span>
              <span className="text-xs text-gray-400 line-through">
                {formatPriceVND(product.originalPrice)}
              </span>
            </div>
            <div className="text-[10px] text-emerald-600 font-medium mt-0.5">
              Tiết kiệm {formatPriceVND(product.originalPrice - product.salePrice)}
            </div>
          </div>

          {/* Action Buttons: CTA Mua Ngay (Open Shopee in new tab) */}
          <div className="flex items-center gap-2">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#EE4D2D] to-[#FF5E36] hover:from-[#D73211] hover:to-[#EE4D2D] text-white font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-md shadow-[#EE4D2D]/25 transition-all flex items-center justify-center gap-1.5 active:scale-95 text-center group/btn"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>Mua Ngay</span>
              <ExternalLink className="w-3 h-3 opacity-80 group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
            </a>

            {/* Copy Link / Share Button */}
            <button
              onClick={handleCopyLink}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                  : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
              title={copied ? "Đã sao chép link!" : "Sao chép link chia sẻ"}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
