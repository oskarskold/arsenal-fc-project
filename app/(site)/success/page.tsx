import React from 'react';
import Link from 'next/link';


const success = () => {
  return  <div className='flex flex-col items-center'>
  <h2>Success!</h2>
  <Link href="/">Return Home</Link>
  </div>
};

export default success;