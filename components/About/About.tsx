'use client';
import React from 'react';
import { Page } from '@/types';
import { PortableText } from '@portabletext/react';

type Props = {
  pageData: Page | undefined;
};

const About = ({ pageData }: Props) => {
  return (
    <main className="my-2">
      <div className="container m-auto px-4">
        <h1 className="text-3xl font-bold mb-10">{pageData?.title}</h1>
        {!!pageData?.content && <PortableText value={pageData.content}/>}
      </div>
    </main>
  );
};

export default About;
