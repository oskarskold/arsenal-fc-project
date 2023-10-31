'use client';

import { Page } from '@/types';
import { PortableText } from '@portabletext/react';
import { useLiveQuery } from '@sanity/preview-kit';
import { pageQuery } from '@/sanity/lib/queries';
import { useParams } from 'next/navigation';

type Props = {
  pageData: Page | undefined;
};

const PageTemplatePreview = ({ pageData }: Props) => {
  const params = useParams();
  const [data] = useLiveQuery(pageData, pageQuery, params);

  return (
    <main className="my-20">
      <div className="container m-auto px-4">
        <h1 className="text-3xl font-bold mb-10">{data?.title}</h1>
        {!!data?.content && <PortableText value={data.content} />}
      </div>
    </main>
  );
};

export default PageTemplatePreview;
