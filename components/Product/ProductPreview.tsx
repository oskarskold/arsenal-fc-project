'use client';

import { Page } from '@/types';
import { PortableText } from '@portabletext/react';
import { useLiveQuery } from '@sanity/preview-kit';
import { productPageQuery } from '@/sanity/lib/queries';

type Props = {
  pageData: Page | undefined;
};

const ProductPreview = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, productPageQuery);

  return (
    <main className="my-20">
      <div className="container m-auto px-4">
        <h1 className="text-3xl font-bold mb-10">{data?.title}</h1>
        {!!data?.content && <PortableText value={data.content} />}
      </div>
    </main>
  );
};

export default ProductPreview;
