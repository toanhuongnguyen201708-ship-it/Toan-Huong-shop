import React, { useState } from 'react';
import { X, Code2, Check, Copy, ExternalLink, HelpCircle } from 'lucide-react';

interface EditGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditGuideModal: React.FC<EditGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  if (!isOpen) return null;

  const sampleSnippet = `// File: src/data/products.ts
{
  id: "deal-01",
  title: "Tên sản phẩm của bạn",
  category: "cong-nghe", // hoặc "gia-dung", "thoi-trang", "my-pham", "tien-ich"
  originalPrice: 500000,
  salePrice: 199000,
  tag: "Deal hot", // hoặc "Bán chạy", "Giảm sâu", "Freeship Xtra"
  isMall: true,
  image: "https://images.unsplash.com/...", // Link ảnh sản phẩm
  affiliateUrl: "https://s.shopee.vn/7fakTSiNuI", // <--- LINK AFFILIATE CỦA BẠN
  rating: 4.9,
  soldCount: "1.5k đã bán",
  shopName: "Tên Shop Chính Hãng",
  highlights: ["Bảo hành chính hãng 12 tháng", "Freeship toàn quốc"],
  description: "Mô tả ngắn gọn về ưu đãi..."
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6 sm:p-8 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] text-[#EE4D2D] flex items-center justify-center shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Hướng Dẫn Đổi Link Shopee Affiliate
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Chỉ cần thay URL trong 1 file duy nhất mà không cần đụng đến code phức tạp
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
            <h4 className="font-bold text-[#EE4D2D] mb-1 flex items-center gap-1.5">
              <span>📍 Bước 1: Mở file chứa danh sách sản phẩm</span>
            </h4>
            <p className="text-gray-700">
              Mở file <code className="bg-white px-2 py-0.5 rounded-md border font-mono text-xs font-bold text-red-600">src/data/products.ts</code> trong thư mục mã nguồn.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
            <h4 className="font-bold text-[#EE4D2D] mb-1 flex items-center gap-1.5">
              <span>🔗 Bước 2: Thay link affiliate của bạn</span>
            </h4>
            <p className="text-gray-700">
              Tìm đến thuộc tính <code className="bg-white px-2 py-0.5 rounded-md border font-mono text-xs font-bold text-red-600">affiliateUrl</code> của sản phẩm và dán link affiliate ngắn gọn của bạn (dạng <code className="font-mono text-xs text-gray-600">https://shope.ee/...</code>).
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
            <h4 className="font-bold text-[#EE4D2D] mb-1 flex items-center gap-1.5">
              <span>🌐 Bước 3: Thay link trang chủ Shopee & Mạng xã hội</span>
            </h4>
            <p className="text-gray-700">
              Mở file <code className="bg-white px-2 py-0.5 rounded-md border font-mono text-xs font-bold text-red-600">src/data/affiliateConfig.ts</code> để cập nhật link nhóm Zalo, Facebook hoặc Telegram săn deal của bạn.
            </p>
          </div>

          {/* Code snippet example */}
          <div className="relative mt-4">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 bg-gray-900 px-4 py-2 rounded-t-xl">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#EE4D2D]" />
                <span>Cấu trúc 1 sản phẩm mẫu</span>
              </span>
              <button
                onClick={handleCopy}
                className="hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet ? 'Đã chép' : 'Sao chép mẫu'}</span>
              </button>
            </div>
            <pre className="p-4 bg-gray-950 text-gray-200 rounded-b-xl text-[11px] font-mono overflow-x-auto max-h-48 leading-relaxed">
              {sampleSnippet}
            </pre>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <a
            href="https://affiliate.shopee.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#EE4D2D] hover:underline flex items-center gap-1"
          >
            <span>Vào Shopee Affiliate Center</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
};
