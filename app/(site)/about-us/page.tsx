import React from 'react';
import AboutUs from '@/components/AboutUs';
import ProductBanner from '@/components/ProductBanner';
import HeroBanner from '@/components/HeroBanner';

const page = () => {
  return (
    <div>
      <HeroBanner />

      <ProductBanner />
    </div>
  );
};

export default page;
