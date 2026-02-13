
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  isSale?: boolean;
  colorName?: string;
  colorCode?: string;
  sku?: string;
  tags?: string[];
  rating?: number;
  reviewsCount?: number;
  inStock?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}
