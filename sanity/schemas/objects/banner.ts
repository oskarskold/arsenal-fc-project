export default {
    name: 'banner',
    type: 'object',
    title: 'Banner',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule: any) => Rule.max(50), 
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) => Rule.max(200), 
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Enables the possibility to crop images
        },
      },
      {
        name: 'subDescription',
        type: 'text',
        title: 'Sub Description',
        validation: (Rule:any) => Rule.max(200), 
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };