import React from 'react';
import HeroBanner from '@/components/UI/HeroBanner';
import ProductBanner from '@/components/UI/ProductBanner';
import Product from '@/components/Product/Product';

const ProductsPage = () => {
  return (
    <div>
      <HeroBanner />
      <ProductBanner />
      <Product />
    </div>
  );
};

export default ProductsPage;
