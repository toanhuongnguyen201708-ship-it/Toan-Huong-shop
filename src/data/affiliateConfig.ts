/**
 * ==============================================================================
 * HƯỚNG DẪN CẤU HÌNH LINK VÀ THÔNG TIN AFFILIATE SHOPEE - TOÀN HƯƠNG SHOP
 * ==============================================================================
 * Bạn có thể dễ dàng thay đổi các link Affiliate Shopee, mã giới thiệu
 * và liên kết mạng xã hội ngay tại file này hoặc trong file `src/data/products.ts`.
 *
 * 1. Thay link Shopee chung hoặc link trang chủ Shopee của bạn bên dưới.
 * 2. Để thay đổi từng link sản phẩm cụ thể, mở file `src/data/products.ts`
 *    và thay giá trị của thuộc tính `affiliateUrl` trong từng sản phẩm.
 * ==============================================================================
 */

export interface SiteConfig {
  siteName: string;
  slogan: string;
  tagline: string;
  badgeText: string;
  defaultShopeeUrl: string;
  phoneNumber: string;
  phoneFormatted: string;
  contactEmail: string;
  socialLinks: {
    facebook: string;
    telegram?: string;
    zalo: string;
    tiktok?: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  siteName: "Toàn Hương Shop",
  slogan: "Shop Đồ Bảo Hộ Lao Động – An Toàn Là Trên Hết",
  tagline: "Chuyên cung cấp và chia sẻ thiết bị bảo hộ lao động đạt chuẩn chất lượng: Giày bảo hộ, mũ nón công trình, quần áo phản quang, găng tay, kính & mặt nạ an toàn giá ưu đãi tốt nhất trên Shopee.",
  badgeText: "Đồ Bảo Hộ Lao Động Đạt Chuẩn 100%",
  defaultShopeeUrl: "https://s.shopee.vn/7fakTSiNuI",
  phoneNumber: "0961513578",
  phoneFormatted: "0961.513.578",
  contactEmail: "toanhuongnguyen201708@gmail.com",
  socialLinks: {
    facebook: "https://www.facebook.com/share/1Dv5fTPbuL/?mibextid=wwXIfr",
    zalo: "https://zalo.me/0961513578",
    telegram: "https://t.me",
    tiktok: "https://tiktok.com",
  }
};
