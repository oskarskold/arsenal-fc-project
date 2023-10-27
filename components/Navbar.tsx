'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useShoppingCart } from '../context/cartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartQuantity } = useShoppingCart();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-8 mt-4 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <p className="block text-black text-3xl text-center mx-8 hover:underline">
              Arsenal
            </p>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/">
            <p className="block text-black text-3xl text-center mx-8 hover:underline">
              Products
            </p>
          </Link>
          <Link href="/about-us">
            <p className="block text-black text-3xl text-center mx-8 hover:underline">
              About us
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <div className="relative">
              <FaShoppingCart className="h-10 w-10 cursor-pointer text-black" />
              {cartQuantity > 0 && (
                <span className="absolute -top-3 -right-3 bg-gray-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-s">
                  {cartQuantity}
                </span>
              )}
            </div>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button className="text-black focus:outline-none"
          onClick={toggleNavbar}>
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
        <Link href="/">
          <p className="block text-black text-3xl text-center my-8 py-2 hover:underline">
            Products
          </p>
        </Link>
        <Link href="/about-us">
          <p className="block text-black text-3xl text-center my-4 py-2 hover:underline">
            About us
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
