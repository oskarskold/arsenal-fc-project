import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';
import { useShoppingCart } from '../../context/cartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedProduct.css';

interface FeaturedProductProps {
  featuredProducts: ProductType[];
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ featuredProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  const { addToCart } = useShoppingCart();

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };

  return (
    <div className="md:flex flex-col items-center my-20 hidden">
      <h1 className="text-4xl font-bold">Featured Products</h1>
      <div className="flex justify-center items-center mt-10">
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg overflow-hidden shadow-md mx-4"
            >
              {product.image && (
                <div className="px-4 flex justify-center">
                  <div className="relative w-80 min-h-[20rem] overflow-hidden">
                    <Link
                      href={`/products/${product.slug}`}
                      key={product._id}
                      className="p-1 hover:scale-105 transition"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={350}
                        height={300}
                        className="absolute inset-0 w-full h-full object-fill"
                      />
                    </Link>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.details}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-800">
                    ${product.price}
                  </span>
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProduct;
