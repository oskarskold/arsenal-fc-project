import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const id = searchParams.get('id');

  if (id) {
    draftMode().enable();
    return redirect(slug ? `/${slug}` : '/');
  }

  return new Response('Error, id does not exist', { status: 401 });
}