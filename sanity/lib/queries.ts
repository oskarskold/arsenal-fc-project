import { groq } from 'next-sanity';

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
