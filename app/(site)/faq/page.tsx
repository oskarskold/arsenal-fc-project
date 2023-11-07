import React from 'react';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/Templates/PreviewProvider';
import { faqPageQuery } from '@/sanity/lib/queries';
import { getCachedClient } from '@/sanity/lib/getClient';
import FaqPreview from '@/components/Faq/FaqPreview';
import Faq from '@/components/Faq/Faq';
import HeroBanner from '@/components/UI/HeroBanner';
import FaqBanner from '@/components/UI/FaqBanner';


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getCachedClient(undefined)(faqPageQuery);

  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

export default async function AboutPage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;
  const pageData = await getCachedClient(preview)(faqPageQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <HeroBanner pageData={pageData} />
        <FaqBanner pageData={pageData} />
        <FaqPreview pageData={pageData} />
      </PreviewProvider>
    );
  }

  return (
    <div>
     <HeroBanner pageData={pageData} />
      <FaqBanner pageData={pageData} />
     <Faq pageData={pageData}/>
    </div>
  );
}



