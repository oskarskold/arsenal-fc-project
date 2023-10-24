import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCheckboxChange = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-4xl font-bold">Products</h1>
      <div className="mt-5 flex items-center justify-center space-x-5">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={!selectedCategory}
            onChange={() => handleCheckboxChange('')}
            className="form-checkbox h-5 w-5 text-red-600"
          />
          <span>All</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedCategory === 'kit'}
            onChange={() => handleCheckboxChange('kit')}
            className="form-checkbox h-5 w-5 text-red-600"
          />
          <span>Kit</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedCategory === 'accessories'}
            onChange={() => handleCheckboxChange('accessories')}
            className="form-checkbox h-5 w-5 text-red-600"
          />
          <span>Accessories</span>
        </label>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
        {filteredProducts.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
            className="p-1 hover:scale-105 transition"
          >
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
            <div
              className="flex justify-between items-start mt-5 px-10 py-2"
              key={product._id}
            >
              <div className="font-extrabold">
                {product.name}
                <div className="text-lg text-gray-700 mt-5">{product.details}</div>
              </div>
              <div className="text-lg text-gray-700">€{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
