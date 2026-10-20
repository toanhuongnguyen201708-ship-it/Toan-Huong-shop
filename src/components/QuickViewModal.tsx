import React from 'react';
import { X, Star, ShieldCheck, ShoppingBag, ExternalLink, Check, Sparkles, Copy } from 'lucide-react';
import { Product, formatPriceVND } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!product) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(product.affiliateUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-500 hover:text-gray-900 flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.isMall && (
              <span className="absolute top-4 left-4 bg-[#D0011B] text-white text-xs font-black px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-md">
                Shopee Mall
              </span>
            )}
            {product.discountPercent && (
              <span className="absolute top-4 right-4 bg-amber-400 text-red-700 font-black text-xs px-2 py-1 rounded-lg shadow-md border border-amber-300">
                -{product.discountPercent}%
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">{product.shopName}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                {product.title}
              </h3>

              {/* Rating & Sold */}
              <div className="flex items-center gap-2 mb-4 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2 py-1 rounded-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 font-medium">{product.soldCount}</span>
                <span className="text-gray-300">•</span>
                <span className="text-emerald-600 font-semibold">{product.tag}</span>
              </div>

              {/* Price Banner */}
              <div className="bg-[#FFF5F2] border border-orange-200/80 rounded-2xl p-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#EE4D2D]">
                    {formatPriceVND(product.salePrice)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {formatPriceVND(product.originalPrice)}
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Đã bao gồm khuyến mãi & áp được thêm voucher sàn
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#EE4D2D]" />
                  <span>Đặc Điểm Nổi Bật:</span>
                </h5>
                <ul className="space-y-1.5">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-gray-500 line-clamp-3 mb-4">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#EE4D2D] hover:bg-[#D73211] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md shadow-[#EE4D2D]/30 flex items-center justify-center gap-2 active:scale-95 transition-all text-center"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Xem Ngay Trên Shopee</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold py-2.5 px-4 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Đã sao chép link affiliate!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép link chia sẻ</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
