'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
 return (
  <nav className="p-4">
      <div className="flex items-center justify-between p-4">
        <div>
          <a href="#" className="text-black text-3xl font-bold">Arsenal</a>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none"
          >
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
            <p className="text-black text-2xl font-semibold hover:text-gray-700 cursor-pointer mr-4">Products</p>
          </Link>
          <Link href="/">
            <p className="text-black text-2xl font-semibold hover:text-gray-700 cursor-pointer mr-4">About us</p>
          </Link>
        </div>
        <div className="hidden md:flex">
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center">
          <Link href="/">
            <p className="text-black font-semibold hover:text-gray-700 cursor-pointer p-1">Products</p>
          </Link>
          <Link href="/">
            <p className="text-black font-semibold hover:text-gray-700 cursor-pointer p-1">About us</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;