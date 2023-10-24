import { getProduct } from '@/sanity/sanity-utils';
import Image from 'next/image';

type Props = {
  params: {
    product: string;
  };
};

export default async function Product({ params }: Props) {
  const slug = params.product;
  const product = await getProduct(slug);

  return (
    <div className="max-w-full max-h-screen mx-auto">
      <div className="flex flex-col items-center p-8 ">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <Image src={product.image} alt={product.name} width={350} height={300} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.details}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between items-center">
            <span className="text-gray-700 text-lg">Price:</span>
            <span className="text-red-600 font-bold text-lg">{`$${product.price.toFixed(
              2,
            )}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
