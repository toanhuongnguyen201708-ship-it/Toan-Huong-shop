import React from 'react';
import { Flame, Shield, HardHat, Shirt, Glasses, ShieldCheck, LucideIcon } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  productCounts: Record<string, number>;
}

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Shield,
  HardHat,
  Shirt,
  Glasses,
  HandMetal: ShieldCheck,
  ShieldCheck,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  productCounts,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
            Danh Mục Sản Phẩm Chọn Lọc
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Bấm chọn để lọc nhanh các deal theo nhóm ngành hàng
          </p>
        </div>
      </div>

      {/* Categories Cards Grid - Responsive & Mobile scrollable */}
      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const IconComponent = iconMap[cat.iconName] || Flame;
          const isSelected = selectedCategory === cat.id;
          const count = productCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 min-w-[130px] sm:min-w-0 p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-[#FFF5F2] to-white border-[#EE4D2D] shadow-md shadow-[#EE4D2D]/10 ring-2 ring-[#EE4D2D]/20'
                  : 'bg-white border-gray-200/80 hover:border-orange-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#EE4D2D] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#FFF0ED] group-hover:text-[#EE4D2D]'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#EE4D2D] text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count} deal
                </span>
              </div>

              <div>
                <div
                  className={`font-bold text-xs sm:text-sm line-clamp-1 ${
                    isSelected ? 'text-[#EE4D2D]' : 'text-gray-900 group-hover:text-[#EE4D2D]'
                  }`}
                >
                  {cat.name}
                </div>
                <div className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 hidden sm:block">
                  {cat.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
