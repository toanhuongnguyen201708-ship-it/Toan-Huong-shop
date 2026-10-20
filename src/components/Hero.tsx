import React, { useState, useEffect } from 'react';
import { ShieldCheck, Flame, ArrowRight, Clock, Zap, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/affiliateConfig';

interface HeroProps {
  onExploreDeals: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDeals }) => {
  // Flash Sale Countdown timer (cycles to next shopee slot: 0h, 9h, 12h, 15h, 18h, 21h)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 3, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format2Digits = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8F6] to-[#F8F9FA] pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-gray-100">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#EE4D2D]/15 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge: Link Sản Phẩm Chính Hãng */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0ED] border border-[#EE4D2D]/20 text-[#EE4D2D] text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-bounce-subtle">
            <ShieldCheck className="w-4 h-4 text-[#EE4D2D] shrink-0" />
            <span>{SITE_CONFIG.badgeText}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE4D2D]" />
            <span className="text-gray-600 font-normal hidden xs:inline">Shopee Mall & Shop Uy Tín</span>
          </div>

          {/* Tiêu đề ngắn, đánh thẳng vào lợi ích */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-5">
            Toàn Hương Shop –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE4D2D] via-[#FF5722] to-[#FF8A00]">
              Shop Đồ Bảo Hộ Lao Động
            </span>
          </h1>

          {/* Subtext ngắn, dễ hiểu */}
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Chuyên cung cấp và phân phối trang thiết bị bảo hộ lao động chính hãng: Giày bảo hộ mũi thép, mũ nón công trình, quần áo phản quang, găng tay, kính & mặt nạ an toàn đạt chuẩn kiểm định với giá tốt nhất trên Shopee.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onExploreDeals}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EE4D2D] hover:bg-[#D73211] active:scale-95 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-[#EE4D2D]/30 transition-all cursor-pointer group"
            >
              <Flame className="w-5 h-5 text-amber-200 fill-amber-300 animate-pulse" />
              <span>Xem đồ bảo hộ hot hôm nay</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${SITE_CONFIG.phoneNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 active:scale-95 text-gray-800 font-semibold text-base px-6 py-4 rounded-2xl border border-gray-200 shadow-xs hover:border-gray-300 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Tư vấn Hotline: {SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>

          {/* Flash Sale Live Countdown Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-orange-100 shadow-sm max-w-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-800">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE4D2D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EE4D2D]" />
              </span>
              <Zap className="w-4 h-4 text-[#EE4D2D] fill-[#EE4D2D]" />
              <span className="uppercase tracking-wide text-[#EE4D2D]">Flash Sale Đồ Bảo Hộ Hôm Nay</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Kết thúc sau:</span>
            </div>

            <div className="flex items-center gap-1.5 font-mono font-bold text-sm">
              <span className="bg-gray-900 text-white px-2 py-1 rounded-md shadow-xs">
                {format2Digits(timeLeft.hours)}
              </span>
              <span className="text-gray-900 font-bold">:</span>
              <span className="bg-gray-900 text-white px-2 py-1 rounded-md shadow-xs">
                {format2Digits(timeLeft.minutes)}
              </span>
              <span className="text-gray-900 font-bold">:</span>
              <span className="bg-[#EE4D2D] text-white px-2 py-1 rounded-md shadow-xs">
                {format2Digits(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Quick Value Highlights Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-gray-900">Chuẩn Kiểm Định</div>
              <div className="text-[11px] text-gray-500">Đạt chứng nhận an toàn lao động</div>
            </div>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FFF0ED] text-[#EE4D2D] flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-gray-900">Chính Hãng Shopee</div>
              <div className="text-[11px] text-gray-500">Link trực tiếp Mall & Shop Uy Tín</div>
            </div>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-gray-900">Chiết Khấu Cao</div>
              <div className="text-[11px] text-gray-500">Mã giảm giá & Freeship Xtra</div>
            </div>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-gray-900">Tư Vấn Tận Tâm</div>
              <div className="text-[11px] text-gray-500">Hotline: 0961.513.578</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
