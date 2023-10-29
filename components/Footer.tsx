'use client';
import { SiteConfig } from '@/types';
import Link from 'next/link';

type FooterProps = {
  config: SiteConfig | undefined;
};

const Footer = ({ config }: FooterProps) => {
  return (
    <footer className="flex flex-col items-start justify-between mt-10 py-12 bg-gray-300">
      <div>
        <Link href="/" className="text-4xl font-bold ml-12">
          {config?.footerText}
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4 ml-12">
        {config?.primaryNavigation?.map((item) => (
          <div
            key={item._key}
            className="block text-black text-xl text-center mr-4 hover:underline"
          >
            {item.route?.accessibleSlug?.current && (
              <Link key={item._key} href={item.route.accessibleSlug.current}>
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
