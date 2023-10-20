import { getProduct } from '@/sanity/sanity-utils';
import Image from 'next/image';

type Props = {
    params: {
        product: string;
    }
}

export default async function Product({params}: Props)
{
    const slug = params.product;
    const product = await getProduct(slug);

    return (
       <div className='flex flex-col items-center'>
            <div className='flex flex-col'>
            <Image src={product.image} alt={product.name} width={350} height={300} />
            <h1 className='p-2'>{product.name}</h1>
            <div className='flex'>
            <p className='p-2'>{product.details}</p>
            <p className='p-2'>{product.price}</p>
            </div>
            </div>
        </div>
    )
}