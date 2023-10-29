'use client';
import { SiteConfig } from '@/types';

type FooterProps = {
  config: SiteConfig | undefined;
};

const Footer = ({ config }: FooterProps) => {
  return (
    <footer className="flex flex-col items-start justify-between mt-10 py-12 bg-gray-300">
      <div>
        <a className="text-4xl font-bold ml-12" href="/">
          {config?.footerText}
        </a>
      </div>
      <div className="flex items-center justify-between mt-4 ml-12">
        {config?.primaryNavigation?.map((item) => (
          <div
            key={item._key}
            className="block text-black text-xl text-center mr-4 hover:underline"
          >
            {item.route?.accessibleSlug?.current && (
              <a href={item.route.accessibleSlug.current}>{item.title}</a>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
