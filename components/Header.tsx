'use client';

import Link from 'next/link';
import { SiteConfig } from '@/types';
import SanityImage from '@/components/SanityImage';

type HeaderProps = {
  config: SiteConfig | undefined;
};
const Header = ({ config }: HeaderProps) => {
  return (
    <header className="fixed z-10 text-white w-full mix-blend-difference">
      <nav>

            <Link href="/">
              {!!config?.logo && (
                <SanityImage
                  image={config.logo}
                  width={26}
                  height={20}
                  sizes="26px"
                />
              )}
            </Link>
          <li>
            <ul>
              {config?.primaryNavigation?.map((item) => (
                <li key={item._key} className="hover:underline cursor-pointer">
                  {item.route?.slug?.current && (
                    <Link href={item.route.slug.current}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </li>
      </nav>
    </header>
  );
};

export default Header;