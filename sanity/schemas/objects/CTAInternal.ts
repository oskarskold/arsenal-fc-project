export default {
  title: 'Call to action',
  name: 'CTAInternal',
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
      type: 'string',
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'route',
      type: 'reference',
      to: [{ type: 'sitePage' }],
      fieldset: 'link',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title.sv',
  //     routeTitle: 'route.title.sv',
  //     slug: 'route.accessibleSlug.current',
  //     link: 'link',
  //     media: 'route.openGraphImage',
  //   },
  // },
};
