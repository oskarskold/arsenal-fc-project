import { SanityDocument } from 'next-sanity';
import { PortableTextBlock } from 'sanity';

export interface ImageType {
  caption?: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
  alt?: string;
}

export type ShoppingCartProviderProps = {
  children: any;
};
export interface ShoppingCartContext {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  addToCart: (item: ProductType) => void;
  totalCartPrice: () => number;
  cartQuantity: number;
  cartItems: ProductType[];
  toggleCart: () => void;
  isCartOpen: boolean;
}

export interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (selectedPage: number) => void;
}

export interface NavItem {
  title?: string;
  _key: string;
  route?: {
    accessibleSlug: {
      current: string;
    };
  };
}

export interface SiteConfig {
  footerText?: string;
  primaryNavigation?: NavItem[];
  logo?: ImageType;
}

export type ProductType = {
  _id: number;
  _createdAt: Date;
  name: string;
  slug: string;
  price: number;
  image: string;
  details: string;
  category: string;
  featured: boolean;
  quantity: number;
};

export interface Page extends SanityDocument {
  title?: string;
  description?: string;
  slug?: string;
  content?: PortableTextBlock[];
  openGraphImage?: ImageType;
}
