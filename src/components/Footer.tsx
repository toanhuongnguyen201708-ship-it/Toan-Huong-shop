import React from 'react';
import { ShoppingBag, ShieldCheck, Heart, ExternalLink, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../data/affiliateConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#EE4D2D] flex items-center justify-center text-white shadow-md shadow-[#EE4D2D]/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Toàn Hương <span className="text-[#EE4D2D]">Shop</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mb-5 max-w-md leading-relaxed">
              Website chia sẻ các sản phẩm chất lượng, với giá ưu đãi. Kênh tổng hợp deal và săn mã giảm giá uy tín từ Shopee Mall giúp bạn mua đúng giá, đúng chỗ.
            </p>

            {/* Privacy & No-Login Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gray-800/80 border border-gray-700 text-xs text-gray-300 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>An toàn 100%: Không cần đăng nhập, không thu thập bất kỳ dữ liệu cá nhân nào</span>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href={`tel:${SITE_CONFIG.phoneNumber}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
              >
                <Phone className="w-3.5 h-3.5 text-[#EE4D2D]" />
                <span>Hotline: {SITE_CONFIG.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Social Links & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Liên Hệ & Kết Nối
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EE4D2D] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">f</span>
                  <span className="text-gray-200 group-hover:text-white font-medium">Facebook Toàn Hương Shop</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socialLinks.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EE4D2D] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-6 h-6 rounded-md bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">Z</span>
                  <span className="text-gray-200 group-hover:text-white font-medium">Zalo: {SITE_CONFIG.phoneFormatted}</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneNumber}`}
                  className="hover:text-[#EE4D2D] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#EE4D2D]" />
                  <span>Điện thoại: {SITE_CONFIG.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="hover:text-[#EE4D2D] transition-colors flex items-center gap-2 truncate"
                >
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="truncate">{SITE_CONFIG.contactEmail}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Shopee Program & Guidelines */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Chính Sách & Tiện Ích
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#catalog" className="hover:text-[#EE4D2D] transition-colors">
                  Danh mục đồ bảo hộ lao động
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#EE4D2D] transition-colors">
                  Cam kết chất lượng & chuẩn kiểm định
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="pt-8 border-t border-gray-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="max-w-2xl leading-relaxed">
            <strong className="text-gray-400 font-semibold">Tuyên bố miễn trừ trách nhiệm (Disclaimer):</strong> Website chia sẻ các sản phẩm chất lượng, với giá ưu đãi. Website không trực tiếp bán hàng, thu tiền hay xử lý giao dịch. Mọi giao dịch được thực hiện an toàn trên nền tảng thương mại điện tử Shopee.
          </div>

          <div className="shrink-0 flex items-center gap-1 text-gray-400">
            <span>© {new Date().getFullYear()} Toàn Hương Shop. Thiết kế với</span>
            <Heart className="w-3.5 h-3.5 text-[#EE4D2D] fill-[#EE4D2D]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
