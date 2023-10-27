'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types";
import { useShoppingCart } from "@/context/cartContext";
import { getProduct } from "../../../../sanity/sanity-utils";

type ProductProps = {
  params: {
    product: string;
  };
};

const Product: React.FC<ProductProps> = ({ params }) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const { addToCart } = useShoppingCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const slug = params.product;
      const product = await getProduct(slug);
      setProduct(product);
    };
    fetchProduct();
  }, [params.product]);

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };

  if (!product) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  return (
    <div className="max-w-full max-h-screen mx-auto">
      <div className="flex flex-col items-center p-8">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <Image src={product.image} alt={product.name} width={350} height={300} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.details}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between items-center">
            <span className="text-gray-700 text-lg">Price:</span>
            <span className="text-red-600 font-bold text-lg">{`$${product.price.toFixed(2)}`}</span>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-end items-center">
          <button
            onClick={() => handleAddToCart(product)}
            className="inline-block bg-green-500 text-white text-sm px-3 py-1 mb-3 rounded-md uppercase hover:underline"
          >
            Add to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;