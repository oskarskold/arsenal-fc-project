'use client';

import React from "react";
import { Page } from '@/types';
import { useLiveQuery } from '@sanity/preview-kit';
import { productPageQuery } from '@/sanity/lib/queries';
type Props = {
  pageData: Page | undefined;
};


const HeroBanner = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, productPageQuery);
  console.log(pageData?.heroBanner?.imageUrl)
  return (
    <div className="bg-center bg-cover"  style={{
      backgroundImage: `url(${pageData?.heroBanner?.imageUrl ?? '/emirates-stadium-arsenal.webp'})`,
    }}>
      <div className="p-5 md:p-10 lg:p-20 bg-red-600 bg-opacity-40">
        <div className="text-center text-white">
          <h2 className="mt-6 md:mt-12 text-3xl md:text-5xl lg:text-5xl font-bold">
          {pageData?.heroBanner?.title ?? 'Arsenal'}
          </h2>
          <h1 className="text-lg md:text-7xl lg:text-7xl font-bold underline">
          {pageData?.heroBanner?.description ?? 'The Gunners'}
          </h1>
          <p className="mt-3 text-xs md:text-md lg:text-2xl">
          {pageData?.heroBanner?.subDescription ?? 'This is the sub description'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
