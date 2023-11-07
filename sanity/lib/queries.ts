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

export const heroBannerQuery = groq`*[_type == "heroBanner"][0] {
  _id,
  title,
  description,
  subDescription,
  "imageUrl": image.asset->url,
}`;

export const faqPageQuery = groq`*[_type == "faq"][0] {
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
  "banner": *[_type == "faq"][0].banner{ 
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url, 
  },
  "heroBanner": *[_type == "heroBanner"][0] {
    _id,
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url,
  }
}`;

export const homePageQuery = groq`*[_type == "home"][0] {
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
  },
  "featuredProducts": *[_type == "product" && featured == true]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    price,
    details,
    featured,
    quantity,
  },
  "heroBanner": *[_type == "heroBanner"][0] {
    _id,
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url,
  }
}`;

export const aboutPageQuery = groq`*[_type == "about"][0] {
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
  },
  "heroBanner": *[_type == "heroBanner"][0] {
    _id,
    title,
    description,
    subDescription,
    "imageUrl": image.asset->url,
  }
}`;

export const productPageQuery = groq`*[_type == "products"][0] {
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
  },
  "heroBanner": *[_type == "heroBanner"][0] {
    _id,
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
