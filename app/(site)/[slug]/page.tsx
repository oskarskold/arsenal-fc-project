import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/sanity/lib/getClient';
import { pageQuery } from '@/sanity/lib/queries';
import PreviewProvider from '@/components/Templates/PreviewProvider';
import PageTemplatePreview from '@/components/Templates/PageTemplatePreview';
import PageTemplate from '@/components/Templates/PageTemplate';
import { notFound } from 'next/dist/client/components/not-found';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageData = await getClient(undefined).fetch(pageQuery, params);

  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

export default async function Page({ params }: Props) {
  const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined;
  const pageData = await getClient(preview).fetch(pageQuery, params);

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