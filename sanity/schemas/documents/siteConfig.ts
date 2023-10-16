import fieldsets from '../common/fieldsets';

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site configuration',
  fieldsets: [fieldsets.metadata],
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'accessibleImageWithCaption',
    },
    {
      title: 'Header Navigation',
      name: 'primaryNavigation',
      type: 'array',
      of: [
        {
          type: 'CTAInternalGroup',
        },
        {
          type: 'CTAInternal',
          title: 'Link',
        },
      ],
    },
    {
      title: 'Footer Navigation',
      name: 'internalLinks',
      type: 'array',
      of: [
        {
          type: 'internalLinkCustom',
        },
      ],
    },
    {
      title: 'Footer text',
      name: 'footerText',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'url',
      media: 'logo',
    },
  },
};
