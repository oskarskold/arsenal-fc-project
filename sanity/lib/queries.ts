import { groq } from 'next-sanity';


export const productTypeQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price,
  details,
  featured,
  quantity,
}`;

export const productsTypesQuery = groq`*[_type == "product"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price,
  details,
  featured,
  quantity,
}`;

export const homePageQuery = groq`*[_type == "homePage"][0] {
  ...,
  content[] {
    ...,
    cta {
      ...,
      route-> {
        accessibleSlug
      }
    }
  }
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  ...,
  content[] {
    ...,
    cta {
      ...,
      route-> {
        accessibleSlug
      }
    }
  }
}`;

export const productPageQuery = groq`*[_type == "productPage"][0] {
  ...,
  content[] {
    ...,
    cta {
      ...,
      route-> {
        accessibleSlug
      }
    }
  }
}`;

export const pageQuery = groq`*[_type == "sitePage" && accessibleSlug.current == $slug][0]{
  ...,
  content[] {
    ...,
    cta {
      ...,
      route-> {
        accessibleSlug
      }
    }
  }
}`;

export const siteConfigQuery = groq`*[_type == "siteConfig"][0]{
  ...,
  internalLinks[]->,
  primaryNavigation[] {
    ...,
    route-> {
      accessibleSlug
    },
    items[] {
      ...,
      route-> {
        accessibleSlug
      }
    }
  }
}`;
