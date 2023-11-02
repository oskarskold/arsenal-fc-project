import { DefaultDocumentNodeResolver, StructureBuilder, ViewBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

interface AccessibleSlug {
  current?: string;
}

interface SanityDocument {
  slug: any;
  _type: string;
  _id: string;
  accessibleSlug?: AccessibleSlug;
  slugPrefix?: string; // Add this if it is required
  // Add any other required properties here
}


const PREVIEW_PATH = 'api/preview';

const siteUrl =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:3000/${PREVIEW_PATH}`
    : process.env.NEXT_PUBLIC_SANITY_DATASET === 'production'
    ? `https://arsenal-fc-project-348a.vercel.app/${PREVIEW_PATH}`
    : `https://arsenal-fc-project-348a.vercel.app/${PREVIEW_PATH}`;


const PREVIEW_PATH_PRODUCT = ''

const siteUrlProduct =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:3000/${PREVIEW_PATH_PRODUCT}`
    : process.env.NEXT_PUBLIC_SANITY_DATASET === 'production'
    ? `https://arsenal-fc-project-348a.vercel.app/${PREVIEW_PATH_PRODUCT}` 
    : `https://arsenal-fc-project-348a.vercel.app/${PREVIEW_PATH_PRODUCT}`;



    const getPreviewUrl = (doc: SanityDocument) => {
      if (
        doc._type === 'home' ||
        (doc._type === 'sitePage' && doc.accessibleSlug?.current === 'home') ||
        doc._type === 'siteConfig'
      ) {
        return `${siteUrl}?id=${doc._id}`;
      }

      if (!doc.slug?.current) {
        return  `${siteUrl}?slug=${doc?.slugPrefix ?? ''}${doc.accessibleSlug?.current}&id=${doc._id}`;
      }
      
      if (!doc.accessibleSlug?.current) {
        return `${siteUrlProduct}${doc._type}s/${doc.slug.current}`;
      }
    
      const slugPrefix = doc.slug ? doc.slug.current : ''; // Retrieve the slug prefix from the document
      const accessibleSlug = doc.accessibleSlug ? doc.accessibleSlug.current : '';
    
      return `${siteUrl}?slug=${slugPrefix}${accessibleSlug}&id=${doc._id}`;
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

      case `product`:
      return S.document().views([
        S.view.form(),
        S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getPreviewUrl(doc),
        })
        .title('Preview'),
      ]);

      case `sitePage`:
      return S.document().views([
        S.view.form(),
        S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocument) => getPreviewUrl(doc),
        })
        .title('Preview'),
      ]);

      case `siteConfig`:
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




