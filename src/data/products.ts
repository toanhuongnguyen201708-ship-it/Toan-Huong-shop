/**
 * ==============================================================================
 * DANH SÁCH 12 SẢN PHẨM & LINK AFFILIATE - TOÀN HƯƠNG SHOP (ĐỒ BẢO HỘ LAO ĐỘNG)
 * ==============================================================================
 * Toàn bộ 12 sản phẩm được cập nhật theo:
 * - Link Shopee affiliate chính xác của bạn
 * - Ảnh đại diện gốc từ CDN Shopee
 * - Tên sản phẩm chính xác
 * - Bảng giá ưu đãi & số lượng đã bán thực tế
 * ==============================================================================
 */

export interface Product {
  id: string;
  title: string;
  category: "quan-ao" | "giay-bao-ho" | "gang-tay" | "mu-bao-ho";
  originalPrice: number;
  salePrice: number;
  discountPercent?: number;
  tag: "Deal hot" | "Bán chạy" | "Giảm sâu" | "Freeship Xtra";
  isMall: boolean;
  image: string;
  affiliateUrl: string;
  rating: number;
  soldCount: string;
  shopName: string;
  highlights: string[];
  description: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "all",
    name: "Tất Cả Sản Phẩm (12)",
    iconName: "Flame",
    description: "Toàn bộ đồ bảo hộ lao động chính hãng"
  },
  {
    id: "quan-ao",
    name: "Quần Áo Bảo Hộ (4)",
    iconName: "Shirt",
    description: "Kaki 31, Kaki 6535, mẫu cúc & khóa kéo"
  },
  {
    id: "giay-bao-ho",
    name: "Giày Bảo Hộ (3)",
    iconName: "Shield",
    description: "NTT mũi thép, HUTA khóa vặn, Hammer Air"
  },
  {
    id: "gang-tay",
    name: "Găng Tay Bảo Hộ (3)",
    iconName: "ShieldCheck",
    description: "Găng 3M đa dụng, găng phủ sơn xanh, Aolikes"
  },
  {
    id: "mu-bao-ho",
    name: "Mũ Nón Bảo Hộ (2)",
    iconName: "HardHat",
    description: "Mũ SSEDA Hàn Quốc, nhựa ABS có núm vặn"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "deal-01",
    title: "MẪU QUẦN ÁO BẢO HỘ LAO ĐỘNG ĐẸP, CHẤT VẢI KAKI 31",
    category: "quan-ao",
    originalPrice: 230000,
    salePrice: 145000,
    discountPercent: 37,
    tag: "Bán chạy",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mugmp0fmljia67",
    affiliateUrl: "https://s.shopee.vn/7fakTSiNuI",
    rating: 4.9,
    soldCount: "4.6k đã bán",
    shopName: "Toàn Hương Bảo Hộ Mall",
    highlights: [
      "Vải Kaki 3/1 dày dặn, bền đẹp, không xù lông",
      "Đường may 2 kim gia cố chắc chắn tại các điểm chịu lực",
      "Thấm hút mồ hôi tốt, thoáng mát cho công nhân & kỹ sư"
    ],
    description: "Mẫu quần áo bảo hộ lao động đẹp, chất vải kaki 31 dày dặn bền đẹp, thiết kế tiêu chuẩn công trình, chống bụi bẩn và tia UV hiệu quả."
  },
  {
    id: "deal-02",
    title: "Quần Áo Bảo Hộ Lao Động Mẫu Mới, Mã Cúc, Chất Vải Kaki 31 Bền Đẹp",
    category: "quan-ao",
    originalPrice: 240000,
    salePrice: 155000,
    discountPercent: 35,
    tag: "Deal hot",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mugma6jl9ipz88",
    affiliateUrl: "https://s.shopee.vn/4fx8tvToLN",
    rating: 4.9,
    soldCount: "6.2k đã bán",
    shopName: "Toàn Hương Bảo Hộ Mall",
    highlights: [
      "Thiết kế cúc cài truyền thống bền chắc, dễ mặc",
      "Chất vải Kaki 31 cao cấp chống trầy xước",
      "Đủ size từ S đến XXL cho mọi vóc dáng"
    ],
    description: "Quần áo bảo hộ lao động mẫu mới thiết kế cài cúc tiện dụng, chất vải kaki 31 dày dặn không bai dão, form chuẩn tạo vẻ chuyên nghiệp."
  },
  {
    id: "deal-03",
    title: "Quần Áo Bảo Hộ Lao Động Cao Cấp, Mã Khoá Kéo, Chất Vải Kaki 6535",
    category: "quan-ao",
    originalPrice: 290000,
    salePrice: 179000,
    discountPercent: 38,
    tag: "Freeship Xtra",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mueavjq1m7eycb",
    affiliateUrl: "https://s.shopee.vn/2gC4WCdjjw",
    rating: 5.0,
    soldCount: "3.8k đã bán",
    shopName: "Xưởng May Kaki Toàn Hương",
    highlights: [
      "Khóa kéo trơn tru bằng đồng siêu bền",
      "Vải Kaki Pangrim 6535 mát mịn, chống nhăn tối đa",
      "Thiết kế nhiều túi hộp tiện lợi đựng đồ nghề"
    ],
    description: "Quần áo bảo hộ lao động cao cấp form khóa kéo hiện đại, chất vải kaki 6535 mềm mịn thoáng khí, không bám bụi, tôn dáng chuyên nghiệp."
  },
  {
    id: "deal-04",
    title: "Găng Tay Đa Dụng 3M-Mỹ Găng Tay Bảo Hộ Đa Năng Làm Vườn, Khuân Vác, Sửa Chữa",
    category: "gang-tay",
    originalPrice: 75000,
    salePrice: 53000,
    discountPercent: 29,
    tag: "Bán chạy",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw2awqmekcez6d",
    affiliateUrl: "https://s.shopee.vn/4qGZ6aPVwr",
    rating: 4.9,
    soldCount: "18.5k đã bán",
    shopName: "3M Official Distributor",
    highlights: [
      "Hàng chính hãng 3M thương hiệu Mỹ",
      "Lớp phủ NBR bám dính cực tốt kể cả trong môi trường dầu mỡ",
      "Sợi thoáng khí mu bàn tay không gây hầm bí mồ hôi"
    ],
    description: "Găng tay đa dụng 3M-Mỹ chính hãng bảo hộ đa năng làm vườn, khuân vác, sửa chữa cơ khí, bảo trì thi công bảo vệ bàn tay an toàn."
  },
  {
    id: "deal-05",
    title: "[GIÁ SỈ] SET 20, 10 ĐÔI Găng Tay Lao Động Phủ Sơn Xanh Dùng Trong Cơ Khí Xây Dựng",
    category: "gang-tay",
    originalPrice: 110000,
    salePrice: 69000,
    discountPercent: 37,
    tag: "Giảm sâu",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lukhu0l05oqu77",
    affiliateUrl: "https://s.shopee.vn/6VOn5dVsYA",
    rating: 4.8,
    soldCount: "26.4k đã bán",
    shopName: "Tổng Kho Găng Tay Bảo Hộ",
    highlights: [
      "Set giá sỉ siêu tiết kiệm cho thợ và nhà thầu",
      "Phủ sơn xanh dày dặn chống trơn trượt cầm nắm vật sắc nhọn",
      "Sợi cotton co giãn ôm sát cổ tay"
    ],
    description: "Set 10, 20 đôi găng tay lao động phủ sơn xanh chuyên dùng trong ngành cơ khí, xây dựng, bốc xếp hàng hóa an toàn cho người lao động."
  },
  {
    id: "deal-06",
    title: "Găng Tay Tập Gym AOLIKES Yoga, Đạp Xe Chất Liệu Thoáng Khí Đệm Silicon Chống Chai AL121",
    category: "gang-tay",
    originalPrice: 159000,
    salePrice: 89000,
    discountPercent: 44,
    tag: "Deal hot",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m18nxf9lw36kb3",
    affiliateUrl: "https://s.shopee.vn/5fpg65mee7",
    rating: 4.9,
    soldCount: "12.8k đã bán",
    shopName: "Aolikes Official Store",
    highlights: [
      "Đệm lót Silicon dày dặn bảo vệ lòng bàn tay chống chai sần",
      "Vải dệt lưới thoáng khí tản nhiệt nhanh chóng",
      "Dây đai dán cổ tay tùy chỉnh ôm khít cổ tay"
    ],
    description: "Găng tay nửa ngón AOLIKES AL121 chính hãng chuyên dụng tập gym, yoga, đạp xe và lao động nhẹ nhàng, đệm silicon chống chai tay hiệu quả."
  },
  {
    id: "deal-07",
    title: "Giày Bảo Hộ Lao Động NTT Mũi Thép Đế Thép Chống Đinh Chống Va Đập",
    category: "giay-bao-ho",
    originalPrice: 220000,
    salePrice: 139000,
    discountPercent: 37,
    tag: "Bán chạy",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwighm81gc7t4c",
    affiliateUrl: "https://s.shopee.vn/8pmhrt1bDl",
    rating: 4.9,
    soldCount: "14.1k đã bán",
    shopName: "Giày Bảo Hộ NTT Chính Hãng",
    highlights: [
      "Mũi thép chịu lực va đập tới 200J chống dập ngón chân",
      "Lót đế thép chống đinh, mảnh chai sắc nhọn xuyên thấu",
      "Da giày bền bỉ, đế cao su đúc nguyên khối chống trơn trượt"
    ],
    description: "Giày bảo hộ lao động NTT mũi thép đế thép chống đinh chống va đập tiêu chuẩn TCVN, dùng bền bỉ cho nhà xưởng, công trường xây dựng."
  },
  {
    id: "deal-08",
    title: "Giày Bảo Hộ Khóa Vặn HUTA Chống Đinh, Chống Dập Ngón, Chống Trơn Trượt, Chống Nước Cao Cấp",
    category: "giay-bao-ho",
    originalPrice: 580000,
    salePrice: 339000,
    discountPercent: 42,
    tag: "Deal hot",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1ze7p4s25em46",
    affiliateUrl: "https://s.shopee.vn/AKbVecxOOA",
    rating: 5.0,
    soldCount: "7.6k đã bán",
    shopName: "HUTA Safety Official",
    highlights: [
      "Khóa núm vặn dây cáp thông minh xỏ và tháo giày trong 2 giây",
      "Lót Kevlar chống đinh siêu dẻo dai và nhẹ chân",
      "Chất liệu da kháng nước, đế chống trượt cấp độ SRC"
    ],
    description: "Giày bảo hộ khóa vặn HUTA chống đinh, chống dập ngón, chống trơn trượt và chống nước cao cấp kiểu dáng thể thao hiện đại, bảo vệ toàn diện."
  },
  {
    id: "deal-09",
    title: "Giày Bảo Hộ Hammer Air - JMS Mũi Thép Chống Va Đập, Đế Chống Đinh, Siêu Bền",
    category: "giay-bao-ho",
    originalPrice: 490000,
    salePrice: 289000,
    discountPercent: 41,
    tag: "Freeship Xtra",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9iwx4v970j270",
    affiliateUrl: "https://s.shopee.vn/9V2Of49Lag",
    rating: 4.9,
    soldCount: "5.9k đã bán",
    shopName: "Hammer Air Vietnam",
    highlights: [
      "Đệm khí Hammer Air êm ái giảm phản lực lên cột sống",
      "Mũi bọc thép gia cường chống va đập cực mạnh",
      "Vải dệt Mesh thoáng khí không hôi chân khi mang cả ngày"
    ],
    description: "Giày Bảo Hộ Hammer Air - JMS mũi thép chống va đập, đế chống đinh, cách điện, chống trơn trượt siêu bền với thiết kế sneaker thể thao năng động."
  },
  {
    id: "deal-10",
    title: "Mũ Bảo Hộ Lao Động SSEDA Hàn Quốc Nhựa ABS",
    category: "mu-bao-ho",
    originalPrice: 220000,
    salePrice: 129000,
    discountPercent: 41,
    tag: "Bán chạy",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m34zy4mkoqtqec",
    affiliateUrl: "https://s.shopee.vn/AKbVeYFQi8",
    rating: 4.9,
    soldCount: "11.3k đã bán",
    shopName: "SSEDA Korea Official Store",
    highlights: [
      "Thương hiệu SSEDA nhập khẩu Hàn Quốc uy tín hàng đầu",
      "Nhựa ABS nguyên sinh chống lão hóa tia UV ngoài trời",
      "Quai nón đệm cằm êm ái ôm chắc đầu khi cúi ngửa"
    ],
    description: "Mũ bảo hộ lao động SSEDA Hàn Quốc chuẩn an toàn quốc tế, độ bền cao, bảo vệ phần đầu an toàn tuyệt đối trước các nguy cơ rơi rớt vật nặng."
  },
  {
    id: "deal-11",
    title: "Mũ Bảo Hộ SSEDA, Mũ Lao Động Nhựa ABS Siêu Nhẹ Có Núm Vặn Điều Chỉnh",
    category: "mu-bao-ho",
    originalPrice: 250000,
    salePrice: 145000,
    discountPercent: 42,
    tag: "Giảm sâu",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mont95x274e950",
    affiliateUrl: "https://s.shopee.vn/4LKIVUMEjO",
    rating: 5.0,
    soldCount: "16.7k đã bán",
    shopName: "SSEDA Korea Official Store",
    highlights: [
      "Trang bị núm vặn điều chỉnh kích cỡ đầu nhanh chóng",
      "Hệ thống đai lót xốp giảm chấn tiêu hao lực va đập",
      "Nhiều màu sắc: Trắng, Vàng, Xanh, Cam đạt chuẩn phân biệt bộ phận"
    ],
    description: "Mũ bảo hộ SSEDA, mũ lao động nhựa ABS siêu nhẹ bảo vệ đầu, núm vặn điều chỉnh linh hoạt nhiều màu sắc, thoáng mát dễ chịu khi đội lâu."
  },
  {
    id: "deal-12",
    title: "Quần Áo Bảo Hộ Lao Động Giá Rẻ, Xanh Dương, Chất Vải Đẹp Mã Cúc",
    category: "quan-ao",
    originalPrice: 190000,
    salePrice: 119000,
    discountPercent: 37,
    tag: "Deal hot",
    isMall: true,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-muglqqtoo7ie7b",
    affiliateUrl: "https://s.shopee.vn/9pfF4WaE5g",
    rating: 4.9,
    soldCount: "8.9k đã bán",
    shopName: "Toàn Hương Bảo Hộ Mall",
    highlights: [
      "Màu xanh dương tiêu chuẩn công trường sạch sẽ, bền màu",
      "Chất vải Kaki dày dặn, thấm hút mồ hôi tốt khi làm việc nắng nóng",
      "Thiết kế cài cúc chắc chắn, form rộng rãi thoải mái vận động"
    ],
    description: "Quần áo bảo hộ lao động giá rẻ màu xanh dương, chất vải đẹp mã cúc tiện lợi, đường may tỉ mỉ, độ bền cao phù hợp cho công nhân nhà xưởng và công trình."
  }
];

export const formatPriceVND = (price: number): string => {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
};
