import React from 'react';
import { getProducts } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

const Product = async () => {

  const products = await getProducts();

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16 ">
      {products.map((products) => (
        <Link href={`/products/${products.slug}`} key={products._id} className="p-1 hover:scale-105 transition ">
          {products.image && (
            <div className="px-4 flex justify-center">
              <div className="relative w-80 min-h-[20rem] shadow-md rounded-md overflow-hidden">
                <p className="absolute top-6 left-4 text-white bg-rose-500 shadow-md py-2 px-4 z-10 rounded-md uppercase">
                  {products.category}
                </p>
                <Image
                  src={products.image}
                  alt={products.name}
                  width={350}
                  height={300}
                  className="absolute inset-0 w-full h-full object-fill rounded-md shadow-md"
                />
              </div>
            </div>
          )}
          <div className="flex justify-between items-start mt-5 px-10 py-2">
            <div className="font-extrabold">
              {products.name}
              <div className="text-lg text-gray-700 mt-5">{products.details}</div>
            </div>
            <div className="text-lg text-gray-700">€{products.price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
