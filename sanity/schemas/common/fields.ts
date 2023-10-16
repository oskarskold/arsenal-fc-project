import fieldsets from './fieldsets';
import { isUniqueAcrossAllDocuments } from '../utilities/slug';

const slugBase = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  description: 'The part of the URL that describes this page',
  options: {
    source: 'title',
    isUnique: isUniqueAcrossAllDocuments,
    maxLength: 200, // will be ignored if slugify is set
  },
};

export default {
  title: {
    name: 'title',
    type: 'string',
    title: 'Title',
  },
  pageSlug: {
    ...slugBase,
  },
  childPageSlug: {
    ...slugBase,
    options: {
      ...slugBase.options,
    },
  },
  groupPageSlug: {
    ...slugBase,
    readOnly: true,
    options: {
      ...slugBase.options,
      source: undefined,
    },
  },
  preamble: {
    name: 'preamble',
    type: 'localeText',
    title: 'Preamble',
    description: 'Add a short opening for the article',
    rows: 3,
  },
  content: {
    name: 'content',
    type: 'localePortableText',
    title: 'Page Content',
  },
  typePreview: {
    type: 'string',
    name: 'typePreview',
    hidden: 'false',
  },
  summary: {
    name: 'summary',
    type: 'localeSimplePortableText',
    title: 'Summary',
    fieldset: fieldsets.content.name,
  },
  icon: {
    name: 'icon',
    type: 'image',
    title: 'Icon',
    fieldset: fieldsets.content.name,
  },
  image: {
    name: 'image',
    type: 'accessibleImage',
    title: 'Image',
  },
  imageWithCaption: {
    name: 'image',
    type: 'accessibleImageWithCaption',
    title: 'Image',
  },
  heading: {
    name: 'heading',
    type: 'localeString',
    title: 'Heading',
  },
  description: {
    name: 'description',
    type: 'localeString',
    title: 'Description',
  },
  tipUsModule: {
    name: 'tipUsModuleEnabled',
    type: 'boolean',
    title: 'Enable tip us module in footer for the page',
  },
  previewVideo: {
    name: 'previewVideo',
    title: 'Hero video',
    type: 'mux.video',
  },
  preambleImage: {
    name: 'preambleImage',
    type: 'accessibleImage',
    title: 'Thumbnail Image',
  },
  shareComponent: {
    name: 'shareComponent',
    type: 'object',
    title: 'Share Component',
    fields: [
      {
        name: 'title',
        title: 'Share component title',
        type: 'localeString',
      },
      {
        name: 'shouldHideShareComponent',
        title: 'Hide share component',
        type: 'boolean',
      },
    ],
  },
};
