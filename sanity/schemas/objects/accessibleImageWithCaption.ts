export default {
  name: 'accessibleImageWithCaption',
  title: 'Accessible Image with Caption',
  type: 'image',
  options: {
    hotspot: false,
  },
  fields: [
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
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
}
