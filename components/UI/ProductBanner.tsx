'use client'
import React from "react";
import { Page } from '@/types';
import { useLiveQuery } from '@sanity/preview-kit';
import { productPageQuery } from '@/sanity/lib/queries';
type Props = {
  pageData: Page | undefined;
};

const ProductBanner = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, productPageQuery);
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:my-24 mx-12">
      <div className="flex flex-col p-10 items-center  justify-center mx-14 border-b-8 border-black">
        <h2 className="text-xl md:text-3xl lg:text-7xl font-bold m-2 ">{pageData?.banner.title}</h2>
      </div>
      <div className="flex flex-col p-8 items-center justify-center">
        <p className="text-sm md:text-md lg:text-lg font-bold text-red-800 tracking-tighter m-2">
        {pageData?.banner.description}
        </p>
        <p className="text-sm md:text-md lg:text-lg font-bold text-gray-800 tracking-tighter m-2">
        {pageData?.banner.subDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;