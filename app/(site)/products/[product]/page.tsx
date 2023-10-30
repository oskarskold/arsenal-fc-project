'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';
import { useShoppingCart } from '@/context/cartContext';
import { getProduct } from '../../../../sanity/sanity-utils';

type ProductProps = {
  params: {
    product: string;
  };
};

const Product: React.FC<ProductProps> = ({ params }) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const {
    cartItems,
    cartQuantity,
    getItemQuantity,
    increaseItemQuantity,
    decreaseQuantity,
    removeFromCart,
    addToCart,
    totalCartPrice,
  } = useShoppingCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const slug = params.product;
      const product = await getProduct(slug);
      setProduct(product);
    };
    fetchProduct();
  }, [params.product]);

  if (!product) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  return (
    <div className="container mx-auto px-20 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="sm:w-1/2 md:w-1/3 ">
          <Image src={product.image} alt={product.name} width={450} height={300} />
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
            {product.name}
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">{product.details}</p>

          <div className="flex items-center">
            <span className="text-gray-700 text-base md:text-lg">Price:</span>
            <span className="text-red-600 font-bold text-base md:text-lg">{`$${product.price.toFixed(
              2,
            )}`}</span>
          </div>
          <div className="flex items-center">
          <p className="text-gray-600 mr-4">Quantity: {getItemQuantity(product._id)}</p>

            <button
              onClick={() => increaseItemQuantity(product._id)}
              className="bg-green-500 hover:bg-green-600 text-white rounded mr-2 px-3 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1"
            >
              <span className="text-lg font-bold">+</span>
            </button>
            <button
              onClick={() => decreaseQuantity(product._id)}
              className="bg-red-500 hover:bg-red-600 text-white rounded mr-2 px-3 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1"
            >
              <span className="text-lg font-bold">-</span>
            </button>
            <button
              onClick={() => removeFromCart(product._id)}
              className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded md:py-1 md:px-4 lg:py-1 lg:px-4"
            >
              <span className="text-lg font-bold">Remove</span>
            </button>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 md:mt-14 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 md:mr-28 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
