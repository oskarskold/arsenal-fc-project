import { getMyPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getMyPage(params.slug);

  return (
    <div><h1 className="text-black text-5xl drop-shadow font-extrabold">{page.title}</h1>
      <div className="text-lg text-gray-700 mt-10"><PortableText value={page.content} /></div>
    </div>
  )
}