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
      }
    }`,
  );
}

export async function getAboutPage(): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "aboutPage"][0] {
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