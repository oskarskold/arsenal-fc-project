import React from 'react';
import Link from 'next/link';


const canceled = () => {
  return  <div className='flex flex-col items-center'>
  <h2>Canceled</h2>
  <Link href="/">Return Home</Link>
</div>
};

export default canceled;
