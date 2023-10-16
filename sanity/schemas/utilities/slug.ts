import client from '@sanity/client';

// eslint-disable-next-line import/prefer-default-export
export const slugify = (str: string, options = { maxLength: 200 }) => {
  // Source: https://gist.github.com/mathewbyrne/1280286#gistcomment-2005392
  const a = 'åàáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
    .slice(0, options.maxLength); // Trim to max length
};

export const CHILD_PAGE_SLUG = {
  article: 'artiklar',
  warning: 'aktuella-brott',
  proactiveGuide: 'sakerhetsguider',
  reactiveGuide: 'ta-hjalp-direkt',
  haveIBeenPwned: 'testa-din-sakerhet',
  haveIBeenPwnedPassword: 'testa-din-sakerhet',
  selfTestTypeform: 'testa-din-sakerhet',
};

export const GROUP_PAGE_SLUG = {
  articlesGroup: CHILD_PAGE_SLUG.article,
  warningsGroup: CHILD_PAGE_SLUG.warning,
  proactiveGuidesGroup: CHILD_PAGE_SLUG.proactiveGuide,
  reactiveGuidesGroup: CHILD_PAGE_SLUG.reactiveGuide,
  selfTestsGroup: CHILD_PAGE_SLUG.selfTestTypeform,
};

// Source: https://www.sanity.io/docs/slug-type#custom-isunique-function-d5066a58b95a
// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root
export function isUniqueAcrossAllDocuments(slug: string, options: any) {
  const { document } = options;

  // eslint-disable-next-line no-underscore-dangle
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;

  // @ts-ignore
  return client.fetch(query, params);
}
