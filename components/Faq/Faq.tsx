'use client';
import React, { useState } from 'react';
import { Page } from '@/types';
import { PortableText } from '@portabletext/react';

type FaqData = {
  question: string;
  answer: any;
  key: number;
};

type Props = {
  pageData: Page | undefined;
};

const Faq: React.FC<Props> = ({ pageData }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {pageData?.faqs &&
        pageData.faqs.map((faq: FaqData, index: number ) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
              <button className="text-gray-500" onClick={() => handleToggle(index)}>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                )}
              </button>
            </div>
            {openIndex === index && faq.answer && <PortableText value={faq.answer} />}
          </div>
        ))}
    </div>
  );
};

export default Faq;
