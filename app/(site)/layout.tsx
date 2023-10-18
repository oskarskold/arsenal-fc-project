import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCachedClient } from '@/sanity/lib/getClient';
import { siteConfigQuery } from '@/sanity/lib/queries';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next sanity starter',
  description: 'Generated by create next app',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const config = await getCachedClient(undefined)(siteConfigQuery);

  return (
    <>
      <Header config={config} />
      {children}
      <Footer config={config} />
    </>
  );
}