import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturedProduct.css'

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

  return (
    <div className="md:flex flex-col items-center my-20 hidden ">
      <h1 className="text-4xl font-bold">Featured Products</h1>
      <div className="flex justify-center items-center mt-10">
          <Slider {...settings}>
            {featuredProducts.map((product) => (
                <Link href={`/products/${product.slug}`} key={product._id} className="p-1 hover:scale-105 transition">
              <div key={product._id} className="p-1 hover:scale-105 transition">
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
              </div>
            </Link>
            ))}
          </Slider>
      </div>
    </div>
  );
};

export default FeaturedProduct;
