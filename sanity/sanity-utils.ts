import { createClient, groq } from 'next-sanity';
import { clientConfig } from './env';
import { Page, SiteConfig } from '@/types';

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
