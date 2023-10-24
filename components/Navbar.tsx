'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="p-8 mt-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <p className="block text-black text-3xl text-center mx-8">Arsenal</p>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleNavbar} className="text-black focus:outline-none">
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
        <div className="hidden md:flex items-center">
          <Link href="/">
            <p className="block text-black text-3xl text-center mx-8">Products</p>
          </Link>
          <Link href="/about-us">
            <p className="block text-black text-3xl text-center mx-8">About us</p>
          </Link>
        </div>
        <div className="hidden">
          <button className="text-black focus:outline-none">
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
          <p className="block text-black text-3xl text-center my-8 py-2">Products</p>
        </Link>
        <Link href="/about-us">
          <p className="block text-black text-3xl text-center my-4 py-2">About us</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
