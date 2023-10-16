import { Metadata } from 'next';
import { getPage } from '@/sanity/sanity-utils';
import { draftMode } from 'next/headers';
import { getCachedClient } from '@/sanity/lib/getClient';
import { pageQuery } from '@/sanity/lib/queries';
import PreviewProvider from '@/components/PreviewProvider';
import PageTemplatePreview from '@/components/PageTemplatePreview';
import PageTemplate from '@/components/PageTemplate';
import { notFound } from 'next/dist/client/components/not-found';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageData = await getCachedClient(undefined)(pageQuery, params);

  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

export default async function Page({ params }: Props) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const pageData = await getCachedClient(preview)(pageQuery, params);

  if (!pageData) return notFound();

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PageTemplatePreview pageData={pageData} />
      </PreviewProvider>
    );
  }

  return <PageTemplate pageData={pageData} />;
}
