import Link from 'next/link';
import Layout from '@/app/(site)/layout';

export default function NotFound() {
  return (
    <Layout>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Layout>
  );
}
