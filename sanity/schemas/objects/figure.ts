export default {
  name: 'figure',
  title: 'Image With Description',
  type: 'image',
  options: {
    hotspot: false,
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'Custom image width',
      description:
        'Will be applied for desktop screens only. If none is set 100% will be used',
      type: 'number',
      name: 'imageCustomWidth',
      options: {
        list: Array.from({ length: 20 }, (_, i) => (i + 1) * 5).map((i) => ({
          value: i,
          title: `${i}%`,
        })),
      },
    },
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
      title: 'caption',
    },
  },
};
