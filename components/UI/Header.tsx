'use client';

import Link from 'next/link';
import { SiteConfig } from '@/types';
import SanityImage from '@/components/Templates/SanityImage';
import React, { useState } from 'react';
import { useShoppingCart } from '../../context/cartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { usePathname } from 'next/navigation';


type HeaderProps = {
  config: SiteConfig | undefined;
};
const Header = ({ config }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartQuantity, isCartOpen, toggleCart } = useShoppingCart();
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-8 sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="block text-black text-3xl text-center mx-8 hover:underline">
              <Link href="/">
                {!!config?.logo && (
                  <SanityImage image={config.logo} width={70} height={62} />
                )}
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            {config?.primaryNavigation?.map((item) => (
              <div
                key={item._key}
                className="block text-black text-3xl text-center mx-8 hover:underline"
              >
                {item.route?.accessibleSlug?.current
                 && (
                  <Link key={item._key} href={pathname === `/${item?.route?.accessibleSlug?.current}` ? pathname : `/${item?.route?.accessibleSlug?.current}`}>
                  {item.title}
                </Link>
                
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="relative">
              <FaShoppingCart
                className="h-10 w-10 cursor-pointer text-black"
                onClick={toggleCart}
              />
              {cartQuantity > 0 && (
                <span className="absolute -top-3 -right-3 bg-gray-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-s">
                  {cartQuantity}
                </span>
              )}
            </div>
          </div>

          <div className="flex md:hidden">
            <button className="text-black focus:outline-none" onClick={toggleNavbar}>
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
          {config?.primaryNavigation?.map((item) => (
            <div
              key={item._key}
              className="block text-black text-3xl text-center my-8 py-2 hover:underline"
            >
              {item.route?.accessibleSlug?.current && (
                <Link href={item.route.accessibleSlug.current}>{item.title}</Link>
                )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
