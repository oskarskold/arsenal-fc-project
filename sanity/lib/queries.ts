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
  },
  "banner": *[_type == "home"][0].banner{ 
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url, 
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
  },
  "banner": *[_type == "about"][0].banner{ 
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url, 
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
  },
  "banner": *[_type == "products"][0].banner{ 
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url, 
  }
}`;

export const pageQuery = groq`*[_type == "sitePage" && accessibleSlug.current == $slug][0]{
  ...,
  content[] {
    ...,
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
