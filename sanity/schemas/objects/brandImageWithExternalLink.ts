export default {
  name: 'brandImageWithExternalLink',
  title: 'Brand image with external link',
  type: 'object',
  fields: [
    {
      title: 'Brand logo',
      name: 'brandLogo',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'brandImageLogo',
          type: 'image',
        },
        {
          title: 'Title',
          name: 'brandTitle',
          type: 'localeString',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Image caption',
          description: 'Important for accessibility.',
        },
      ],
    },
    {
      title: 'External link',
      name: 'brandExternalLink',
      type: 'url',
      description: 'The external link to the brand',
    },
  ],
  preview: {
    select: {
      title: 'brandLogo.brandTitle.sv',
      media: 'brandLogo.brandImageLogo',
    },
  },
};
