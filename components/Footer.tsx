'use client';

import { SiteConfig } from '@/types';

type FooterProps = {
  config: SiteConfig | undefined;
};

const Footer = ({ config }: FooterProps) => {
  return <footer className="">{config?.footerText}</footer>;
};

export default Footer;