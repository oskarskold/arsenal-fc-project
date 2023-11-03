import React from 'react';
import HeroBanner from '@/components/UI/HeroBanner';
import ProductBanner from '@/components/UI/ProductBanner';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/Templates/PreviewProvider';
import { productPageQuery } from '@/sanity/lib/queries';
import { getCachedClient } from '@/sanity/lib/getClient';
import ProductPreview from '@/components/Product/ProductPreview';
import Product from '@/components/Product/Product';


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getCachedClient(undefined)(productPageQuery);

  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

export default async function ProductPage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;
  const pageData = await getCachedClient(preview)(productPageQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <HeroBanner pageData={pageData} />
      <ProductBanner pageData={pageData}/>
        <ProductPreview pageData={pageData} />
      </PreviewProvider>
    );
  }

  return (
    <div>
     <HeroBanner pageData={pageData} />
      <ProductBanner pageData={pageData}/>
      <Product pageData={pageData}/>
    </div>
  );
}
