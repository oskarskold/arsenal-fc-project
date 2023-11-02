import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/Templates/PreviewProvider';
import { homePageQuery } from '@/sanity/lib/queries';
import { getCachedClient } from '@/sanity/lib/getClient';
import HomePreview from '@/components/Home/HomePreview';
import Home from '@/components/Home/Home';
import HomeBanner from '@/components/UI/HomeBanner';
import HeroBanner from '@/components/UI/HeroBanner';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getCachedClient(undefined)(homePageQuery);

  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

export default async function HomePage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;
  const pageData = await getCachedClient(preview)(homePageQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <HeroBanner />
        <HomeBanner pageData={pageData}/>
        <HomePreview pageData={pageData} />
      </PreviewProvider>
    );
  }

  return (
    <div>
     <HeroBanner />
     <HomeBanner pageData={pageData}/>
     <Home pageData={pageData}/>
    </div>
  );
}
