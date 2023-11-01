import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  draftMode().disable();

  const referer = request.headers.get('Referer');

  if (!referer) {
    return redirect('/');
  }

  const url = new URL(referer);
  const slug = url?.pathname;

  // Redirect back to the referring page (or to home if no slug)
  redirect(slug ?? '/');
}