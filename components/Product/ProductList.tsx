import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';
import { useShoppingCart } from '../../context/cartContext';

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useShoppingCart();
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

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-4xl my-5 font-bold">Products</h1>
      <div className="mt-5 flex items-center justify-center space-x-5 my-10">
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
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16 ">
        {filteredProducts.map((product: ProductType) => (
          <div key={product._id} className="p-1 hover:scale-105 transition ">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {product.image && (
                  <div className="px-4 flex justify-center">
                    <div className="relative w-80 min-h-[20rem] overflow-hidden">
                    <Link href={`/products/${product.slug}`} key={product._id} className="p-1 hover:scale-105 transition">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={350}
                        height={300}
                        className="absolute inset-0 w-full h-full object-fill "
                      />
                    </Link>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 mt-2">{product.details}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-gray-800">${product.price}</span>
                    <span className="inline-block bg-gray-500 text-white text-sm px-3 py-1 rounded-md uppercase">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-md uppercase hover:underline"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
