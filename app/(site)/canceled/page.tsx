import React from 'react';
import Link from 'next/link';
import Layout from '@/app/(site)/layout';


const canceled = () => {
  return  <Layout>
  <h2>Canceled</h2>
  <Link href="/">Return Home</Link>
</Layout>
};

export default canceled;
