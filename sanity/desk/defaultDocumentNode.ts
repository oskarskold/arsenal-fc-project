import { DefaultDocumentNodeResolver, StructureBuilder, ViewBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { SanityDocument } from 'sanity';


const getPreviewUrl = (doc: SanityDocument) => {

  if (doc._type === 'home') {
    return `${process.env.NEXT_PUBLIC_SITE_URL}`
  }

  if (doc._type === 'about') {
    return `${process.env.NEXT_PUBLIC_SITE_URL}/about`
  }

  if (doc._type === 'products') {
    return `${process.env.NEXT_PUBLIC_SITE_URL}/products`
  }

  
  console.log(doc)
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




