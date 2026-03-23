import apiClient from "./api-client";
import { cache } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ProductService = {

  // mockup data, có data thật thì hủy code này
  getAllMock: cache(async (): Promise<Product[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập độ trễ mạng
    return MOCK_PRODUCTS;
  }),

  getByIdMock: cache(async (id: number): Promise<Product | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập độ trễ mạng
    return MOCK_PRODUCTS.find((product) => product.id === id);
  }),

  // Dùng cache để tối ưu hiệu năng trên Server
  getAll: cache(async (): Promise<Product[]> => {
    return apiClient.get("/products");
  }),

  getById: cache(async (id: string): Promise<Product> => {
    return apiClient.get(`/products/${id}`);
  }),
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: 29990000,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    description: "Chip A17 Pro mạnh mẽ, camera 48MP zoom quang học 5x.",
  },
  {
    id: 2,
    name: "MacBook Pro M3 14 inch",
    price: 39990000,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    description: "Màn hình Liquid Retina XDR, hiệu năng vượt trội cho đồ họa.",
  },
  {
    id: 3,
    name: "Apple Watch Ultra 2",
    price: 21490000,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    description: "Vỏ titan bền bỉ, GPS tần số kép chính xác nhất.",
  },
  {
    id: 4,
    name: "AirPods Pro Gen 2 (USB-C)",
    price: 5990000,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    description: "Chống ồn chủ động gấp 2 lần, âm thanh thích ứng.",
  },
  {
    id: 5,
    name: "iPad Pro M2 12.9 inch",
    price: 31990000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    description: "Trải nghiệm Apple Pencil di chuột, màn hình Mini-LED.",
  },
  {
    id: 6,
    name: "Magic Mouse - Black",
    price: 2490000,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    description: "Thiết kế tối giản, hỗ trợ cử chỉ Multi-Touch.",
  },
];

interface MockImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const MOCK_IMAGES: MockImage[] = [
  {
    "id": 1,
    "src": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000",
    "alt": "Không gian quán rượu Kokoria đông khách thể hiện doanh thu ổn định",
    "title": "Doanh thu ổn định và lợi nhuận cao",
    "description": "Bí quyết vận hành lâu năm giúp đảm bảo hiệu quả kinh doanh và lợi nhuận vượt trội."
  },
  {
    "id": 2,
    "src": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000",
    "alt": "Món chân gà nướng than hoa đặc trưng của Kokoria ăn kèm sốt đặc biệt",
    "title": "Thực đơn Steady Menu gây nghiện",
    "description": "Những món ăn mang hương vị độc đáo, chinh phục khẩu vị của mọi lứa tuổi."
  },
  {
    "id": 3,
    "src": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000",
    "alt": "Thiết kế nội thất quán Kokoria phong cách Pocha hiện đại và sành điệu",
    "title": "Nội thất không lỗi mốt",
    "description": "Sự kết hợp giữa phong cách Retro và xu hướng hiện đại, tạo không gian thư giãn lý tưởng."
  }
];

export interface MockBranchImage {
  id: number;
  src: string;
  alt: string;
}

export const MOCK_BRANCH_IMAGES: MockBranchImage[] =[
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại trung tâm thành phố"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 1"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 3"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 4"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 5"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 6"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 7"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 8"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 9"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 10"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 11"
  }
];

export const MOCK_SLIDE_IMAGE: MockBranchImage[] = [
  {
    id: 1,
    src: "/uploads/images/koko-2.jpg",
    alt: "Chi nhánh quán Kokoria tại trung tâm thành phố"
  },
  {
    id: 2,
    src: "/uploads/images/koko-3.jpg",
    alt: "Chi nhánh quán Kokoria tại quận 1"
  },
  {
    id: 3,
    src: "/uploads/images/koko-4.jpg",
    alt: "Chi nhánh quán Kokoria tại quận 3"
  },
  {
    id: 4,
    src: "/uploads/images/koko-5.jpg",
    alt: "Chi nhánh quán Kokoria tại quận 4"
  },
];