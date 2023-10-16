export default {
  name: 'accessibleImage',
  title: 'Accessible Image',
  type: 'image',
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
};
