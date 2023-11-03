'use client';

import { Page } from '@/types';
import { useLiveQuery } from '@sanity/preview-kit';
import { aboutPageQuery } from '@/sanity/lib/queries';
import About from './About';

type Props = {
  pageData: Page | undefined;
};

const AboutPreview = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, aboutPageQuery);

  return (
      <About pageData={data}/>
  );
};

export default AboutPreview;
