import React from 'react';
import { getProducts } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

const Product = async () => {
  const products = await getProducts();


  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16 ">
      {products.map((products) => (

        
        <Link href={``} key={products._id} className=" p-1 hover:scale-105 transition">
          {products.image && (
            <div className="px-4">
            <div className="relative">
              <p className="absolute top-6 left-4 text-white bg-gray-800 py-2 px-4 z-10 rounded-md uppercase">
                {products.category}
              </p>
              <Image
                src={products.image}
                alt={products.name}
                width={750}
                height={300}
                className="w-full h-96 object-cover object-top border-gray-500"
              />
            </div>
            </div>
          )}
          <div className="flex justify-between items-end mt-5">
            <div className="mt-2 font-extrabold">
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
