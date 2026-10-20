import React from 'react';
import { ShieldCheck, CheckCircle2, TrendingDown, Clock, Award, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/affiliateConfig';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: "Chọn lọc đạt chuẩn an toàn",
      description: "Đội ngũ kỹ thuật kiểm tra kỹ lưỡng các tiêu chuẩn TCVN, CE, ANSI. Đảm bảo giày, mũ, kính và quần áo bảo hộ đạt độ an toàn cao nhất.",
      color: "bg-red-50 text-[#EE4D2D]",
      tag: "Chuẩn kiểm định"
    },
    {
      icon: TrendingDown,
      title: "Không tăng giá ảo",
      description: "Giá gốc cạnh tranh từ các xưởng sản xuất và nhà phân phối chính thức trên Shopee, áp thêm được mã Freeship và voucher toàn sàn.",
      color: "bg-emerald-50 text-emerald-600",
      tag: "Giá tốt nhất"
    },
    {
      icon: ShieldCheck,
      title: "100% Hàng chính hãng",
      description: "Tất cả link đều trỏ trực tiếp đến gian hàng Shopee Mall và Shop Yêu Thích+ uy tín có nguồn gốc rõ ràng, bảo hành và đổi trả size dễ dàng.",
      color: "bg-blue-50 text-blue-600",
      tag: "Shopee Mall"
    },
    {
      icon: Clock,
      title: "Cập nhật hằng ngày",
      description: "Cập nhật liên tục các đợt Flash Sale và mã giảm giá theo từng khung giờ trong ngày giúp doanh nghiệp và cá nhân tiết kiệm chi phí tối đa.",
      color: "bg-purple-50 text-purple-600",
      tag: "Liên tục 24/7"
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0ED] text-[#EE4D2D] text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>Cam Kết An Toàn Lao Động</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Lý Do Nên Mua Qua <span className="text-[#EE4D2D]">{SITE_CONFIG.siteName}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Chúng tôi tuyển chọn trang thiết bị bảo hộ lao động chất lượng cao, bền bỉ, giúp người lao động an tâm tuyệt đối trên mọi công trình và nhà xưởng.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50/80 hover:bg-[#FFF9F7] rounded-3xl p-6 border border-gray-200/70 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600 shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EE4D2D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1 text-xs font-bold text-[#EE4D2D] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>An tâm mua sắm</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
