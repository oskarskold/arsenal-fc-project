'use client';

import { Page } from '@/types';
import { PortableText } from '@portabletext/react';
import { useLiveQuery } from '@sanity/preview-kit';
import { homePageQuery } from '@/sanity/lib/queries';
import Home from './Home';

type Props = {
  pageData: Page | undefined;
};

const HomePreview = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, homePageQuery);

  return (
    <Home pageData={pageData}/>
  );
};

export default HomePreview;
