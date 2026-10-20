import React, { useState, useMemo } from 'react';
import { ArrowUpDown, SearchX, ShoppingBag, Sparkles, Phone } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { SITE_CONFIG } from '../data/affiliateConfig';
import { CategoryFilter } from './CategoryFilter';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  searchQuery: string;
  onClearSearch: () => void;
  onQuickView: (product: Product) => void;
}

type SortOption = 'hot' | 'discount' | 'price-asc' | 'price-desc';

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onClearSearch,
  onQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<SortOption>('hot');

  // Count items per category
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS.length,
    };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & Sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shopName.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortOption) {
      case 'discount':
        result.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
        break;
      case 'price-asc':
        result.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'price-desc':
        result.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case 'hot':
      default:
        // Hot deals first
        result.sort((a, b) => {
          if (a.tag === 'Deal hot') return -1;
          if (b.tag === 'Deal hot') return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <section id="catalog" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter Cards */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        productCounts={productCounts}
      />

      {/* Catalog Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 mb-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">
            Hiển thị <span className="text-[#EE4D2D]">{filteredProducts.length}</span> sản phẩm
          </span>
          {searchQuery && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex items-center gap-1">
              Từ khóa: &quot;{searchQuery}&quot;
              <button onClick={onClearSearch} className="hover:text-red-500 font-bold ml-1">×</button>
            </span>
          )}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <ArrowUpDown className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-500 font-medium">Sắp xếp:</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="text-xs sm:text-sm font-semibold bg-white border border-gray-300 rounded-xl px-3 py-1.5 focus:border-[#EE4D2D] focus:ring-1 focus:ring-[#EE4D2D] outline-hidden cursor-pointer"
          >
            <option value="hot">🔥 Deal Hot nhất</option>
            <option value="discount">💥 Giảm nhiều nhất (%)</option>
            <option value="price-asc">💵 Giá: Thấp đến Cao</option>
            <option value="price-desc">💎 Giá: Cao đến Thấp</option>
          </select>
        </div>
      </div>

      {/* Product Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-xs max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-orange-50 text-[#EE4D2D] flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            Không tìm thấy sản phẩm phù hợp
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Thử tìm kiếm với từ khóa khác hoặc chuyển sang danh mục &quot;Tất Cả Deal&quot; để khám phá thêm.
          </p>
          <button
            onClick={() => {
              onClearSearch();
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EE4D2D] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#EE4D2D]/20 hover:bg-[#D73211] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Xem tất cả sản phẩm</span>
          </button>
        </div>
      )}

      {/* Shopee Mall Guarantee Banner */}
      <div className="mt-12 bg-gradient-to-r from-[#FFF5F2] via-orange-50 to-[#FFF5F2] border border-orange-200/80 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#EE4D2D] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#EE4D2D]/20">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-extrabold text-sm sm:text-base text-gray-900">
              Bạn cần tìm đồ bảo hộ lao động theo kích cỡ hoặc số lượng lớn?
            </h5>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá hàng ngàn đồ bảo hộ đạt chuẩn kiểm định đang giảm sâu trực tiếp trên Shopee Mall.
            </p>
          </div>
        </div>

        <a
          href={`tel:${SITE_CONFIG.phoneNumber}`}
          className="shrink-0 bg-[#EE4D2D] hover:bg-[#D73211] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md shadow-[#EE4D2D]/20 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span>Hotline: {SITE_CONFIG.phoneFormatted}</span>
        </a>
      </div>
    </section>
  );
};
