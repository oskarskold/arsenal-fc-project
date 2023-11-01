'use client';

import { Page } from '@/types';
import { PortableText } from '@portabletext/react';
import { useLiveQuery } from '@sanity/preview-kit';
import { productPageQuery } from '@/sanity/lib/queries';
import Product from './Product';

type Props = {
  pageData: Page | undefined;
};

const ProductPreview = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, productPageQuery);

  return (
    <Product pageData={pageData}/>  
  );
};

export default ProductPreview;
