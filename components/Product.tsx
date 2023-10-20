'use client'
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';
import Pagination from './Pagination';

const PAGE_SIZE = 3; // Adjust the page size according to your requirement

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        // Handle any errors
        console.error('An error occurred:', error);
      }
    };

    fetchProducts();
  }, []);

  const lastIndex = currentPage * PAGE_SIZE;
  const firstIndex = lastIndex - PAGE_SIZE;
  const currentProducts = products.slice(firstIndex, lastIndex);

  return (
    <>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16 ">
      {currentProducts.map((product) => (
        <Link href={`/products/${product.slug}`} key={product._id} className="p-1 hover:scale-105 transition ">
          {product.image && (
            <div className="px-4 flex justify-center">
              <div className="relative w-80 min-h-[20rem] shadow-md rounded-md overflow-hidden">
                <p className="absolute top-6 left-4 text-white bg-red-500 shadow-md py-2 px-4 z-10 rounded-md uppercase">
                  {product.category}
                </p>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={300}
                  className="absolute inset-0 w-full h-full object-fill rounded-md shadow-md"
                />
              </div>
            </div>
          )}
          <div className="flex justify-between items-start mt-5 px-10 py-2" key={product._id}>
            <div className="font-extrabold">
              {product.name}
              <div className="text-lg text-gray-700 mt-5">{product.details}</div>
            </div>
            <div className="text-lg text-gray-700">€{product.price}</div>
          </div>
        </Link>
      ))}
    </div>
      <Pagination
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PAGE_SIZE}
        onPageChange={(selectedPage) => setCurrentPage(selectedPage)}
      />
      </>
  );
};

export default Product;
