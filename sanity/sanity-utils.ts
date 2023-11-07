import { createClient, groq } from 'next-sanity';
import { clientConfig } from './env';
import { Page, SiteConfig, ProductType } from '@/types';

export async function getSiteConfig(): Promise<SiteConfig> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "siteConfig"][0]{
      
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
    }`,
  );
}

export async function getHomePage(): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homePage"][0] {
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
    }`,
  );
}
export async function getProductPage(): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "productPage"][0] {
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
    }`,
  );
}

export async function getAboutPage(): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "aboutPage"][0] {
      ...,
 
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
    }`,
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "sitePage" && accessibleSlug.current == $slug][0]{
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
    }`,
    { slug },
  );
}

let lastId = ''

export async function getProducts(): Promise<ProductType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && _id > $lastId] | order(_id) [0...100]{
      _id,
      _createdAt,
      name,
      subtitle,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      category,
      featured,
      quantity,
    }`,
    { lastId }
)}


export async function getProduct(slug: string): Promise<ProductType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      subtitle,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      details,
      category,
      featured,
      quantity,
    }`,
    { slug }
  )
}