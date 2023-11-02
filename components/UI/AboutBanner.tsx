'use client'
import React from "react";
import { Page } from '@/types';
import { useLiveQuery } from '@sanity/preview-kit';
import { aboutPageQuery } from '@/sanity/lib/queries';
type Props = {
  pageData: Page | undefined;
};

const ProductBanner = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, aboutPageQuery);
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:my-24 mx-12">
      <div className="flex flex-col items-center  justify-center mx-14 ">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold border-b-8 border-black m-8"></h2>
      </div>
      <div className="flex flex-col p-6 items-center justify-center">
        <p className="text-sm md:text-md lg:text-lg font-bold text-red-800 tracking-tighter m-2">
     
        </p>
        <p className="text-sm md:text-md lg:text-lg font-bold text-gray-800 tracking-tighter m-2">
      
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;