export default {
  title: 'Editor choice - related pages',
  name: 'editorRelatedPages',
  description: 'Leave empty, or add three related pages.',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'editorRelatedPage',
      title: 'Editor Related Page',
      fields: [
        {
          title: 'Related page',
          name: 'pageReference',
          type: 'reference',
          to: [{ type: 'sitePage' }],
        },
        {
          title: 'External related page',
          name: 'externalRelatedPage',
          type: 'object',
          fields: [
            { type: 'url', name: 'url', title: 'URL' },
            { type: 'localeString', name: 'title' },
            { type: 'number', name: 'minutesToRead' },
            {
              type: 'image',
              name: 'thumbnail',
              options: {
                hotspot: false,
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          internalTitle: 'pageReference.title.sv',
          internalMedia: 'pageReference.openGraphImage',
          externalTitle: 'externalRelatedPage.title.sv',
          externalMedia: 'externalRelatedPage.thumbnail',
        },
      },
    },
  ],
};
