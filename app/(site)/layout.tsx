import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getCachedClient } from '@/sanity/lib/getClient';
import { siteConfigQuery } from '@/sanity/lib/queries';
import { ShoppingCartProvider } from '@/context/cartContext';
import Cart from '@/components/Cart';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next sanity starter',
  description: 'Generated by create next app',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const config = await getCachedClient(undefined)(siteConfigQuery);
  return (
    <>
      <ShoppingCartProvider>
        <Header config={config} />
        {children}
        <Cart />
        <Footer config={config} />
      </ShoppingCartProvider>
    </>
  );
}
