import { DefaultDocumentNodeResolver, StructureBuilder, ViewBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { SanityDocument } from 'sanity';

const PREVIEW_PATH = 'api/preview';

const siteUrl =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:3000/${PREVIEW_PATH}`
    : process.env.NEXT_PUBLIC_SANITY_DATASET === 'production'
    ? `https://arsenal-fc-project-348a.vercel.app/${PREVIEW_PATH}` //TODO: When page is deployed and connected to domain this should be the live domain-name
    : `https://arsenal-fc-project-348a.vercel.app//${PREVIEW_PATH}`;


const getPreviewUrl = (doc: SanityDocument) => {
  if (!doc.accessibleSlug?.current) return `${siteUrl}?id=${doc._id}`;
  console.log(doc.accessibleSlug?.current)
  console.log(doc)

  return `${siteUrl}?slug=${doc?.slugPrefix ?? ''}${doc.accessibleSlug?.current}&id=${doc._id}`;
};

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  switch (schemaType) {
    case `home`:
      return S.document().views([
        S.view.form(),
        S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getPreviewUrl(doc),
        })
        .title('Preview'),
      ]);

      case `about`:
      return S.document().views([
        S.view.form(),
        S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getPreviewUrl(doc),
        })
        .title('Preview'),
      ]);

      case `products`:
      return S.document().views([
        S.view.form(),
        S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getPreviewUrl(doc),
        })
        .title('Preview'),
      ]);
      
    default:
      return S.document().views([S.view.form()]);
      
  }
};




