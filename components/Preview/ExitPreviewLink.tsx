import Link from 'next/link';
import React from 'react';

interface Props {
  isPreview: boolean;
}

const ExitPreviewLink: React.FC<Props> = ({ isPreview }) => {
  if (!isPreview) {
    return null;
  }

  return (
    <Link
      href="/api/exit-preview"
      className="bg-black-bright hover:bg-black text-white py-6 px-7 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-br shadow-lg z-10 dt:py-10 dt:left-0 dt:-translate-x-0"
    >
      Exit Preview Mode
    </Link>
  );
};

export default ExitPreviewLink;