'use client';

import Link from 'next/link';
import { SiteConfig } from '@/types';
import SanityImage from '@/components/SanityImage';

type HeaderProps = {
  config: SiteConfig | undefined;
};
const Header = ({ config }: HeaderProps) => {
  return (
    <header className="py-8 border-b border-1">
      <div className="container m-auto px-4 flex justify-between items-center">
        <Link href="/">
          {!!config?.logo && <SanityImage image={config.logo} width={155} height={62} />}
        </Link>
        <nav>
          {config?.primaryNavigation?.map((item) => (
            <div key={item._key} className="hover:underline cursor-pointer">
              {item.route?.accessibleSlug?.current && (
                <Link href={item.route.accessibleSlug.current}>{item.title}</Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
