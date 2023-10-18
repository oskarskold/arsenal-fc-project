import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between mt-10 py-12 bg-gray-300">
      <div>
        <Link href="/" className="text-4xl font-bold ml-12">
          Arsenal
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4 ml-12">
        <Link href="/" className="text-2xl font-bold m-2">
          PRODUCTS
        </Link>
        <Link href="/" className="text-2xl font-bold m-2">
          ABOUT US
        </Link>
      </div>
    </footer>
  );
};

export default Footer;