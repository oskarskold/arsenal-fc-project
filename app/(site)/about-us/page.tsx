import React from 'react';
import AboutUs from '@/components/AboutUs';
import ProductBanner from '@/components/ProductBanner';

const page = () => {
  return (
    <div className="max-w-full max-h-screen mx-auto">
      <AboutUs />
      <ProductBanner />
    </div>
  );
};

export default page;
