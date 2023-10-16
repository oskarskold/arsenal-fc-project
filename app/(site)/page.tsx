import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Home from '@/components/Home';
import PreviewProvider from '@/components/PreviewProvider';
import { homePageQuery } from '@/sanity/lib/queries';
import { getCachedClient } from '@/sanity/lib/getClient';
import HomePreview from '@/components/HomePreview';

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
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const pageData = await getCachedClient(preview)(homePageQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <HomePreview pageData={pageData} />
      </PreviewProvider>
    );
  }

  return <Home pageData={pageData} />;
}
