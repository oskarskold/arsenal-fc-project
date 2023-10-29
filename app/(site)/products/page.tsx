import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import ProductBanner from '@/components/ProductBanner';
import Product from '@/components/Product';

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
