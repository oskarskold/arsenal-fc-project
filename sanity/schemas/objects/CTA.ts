export default {
  title: 'Call to action',
  name: 'CTA',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'route',
      type: 'reference',
      to: [{ type: 'sitePage' }],
      fieldset: 'link',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
      fieldset: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title.sv',
      routeTitle: 'route.title.sv',
      slug: 'route.accessibleSlug.current',
      link: 'link',
      media: 'route.openGraphImage',
    },
  },
};
