import React from 'react';
import Link from 'next/link';
import Layout from '@/app/(site)/layout';


const success = () => {
  return  <Layout>
  <h2>Success!</h2>
  <Link href="/">Return Home</Link>
</Layout>
};

export default success;