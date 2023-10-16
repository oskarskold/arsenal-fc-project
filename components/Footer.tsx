'use client';

import { SiteConfig } from '@/types';

type FooterProps = {
  config: SiteConfig | undefined;
};

const Footer = ({ config }: FooterProps) => {
  return (
    <footer className="text-center py-8 border-t border-1">{config?.footerText}</footer>
  );
};

export default Footer;
