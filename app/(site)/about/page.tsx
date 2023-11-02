import React from 'react';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/Templates/PreviewProvider';
import { aboutPageQuery } from '@/sanity/lib/queries';
import { getCachedClient } from '@/sanity/lib/getClient';
import AboutPreview from '@/components/About/AboutPreview';
import About from '@/components/About/About';
import HeroBanner from '@/components/UI/HeroBanner';
import AboutBanner from '@/components/UI/AboutBanner';


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getCachedClient(undefined)(aboutPageQuery);

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
  const pageData = await getCachedClient(preview)(aboutPageQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <HeroBanner />
        <AboutBanner pageData={pageData} />
        <AboutPreview pageData={pageData} />
      </PreviewProvider>
    );
  }

  return (
    <div>
     <HeroBanner />
      <AboutBanner pageData={pageData} />
     <About pageData={pageData}/>
    </div>
  );
}



