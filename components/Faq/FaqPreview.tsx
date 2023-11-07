'use client';

import { Page } from '@/types';
import { useLiveQuery } from '@sanity/preview-kit';
import { faqPageQuery } from '@/sanity/lib/queries';
import Faq from './Faq';

type Props = {
  pageData: Page | undefined;
};

const FaqPreview = ({ pageData }: Props) => {
  const [data] = useLiveQuery(pageData, faqPageQuery);

  return (
      <Faq pageData={data}/>
  );
};

export default FaqPreview;
