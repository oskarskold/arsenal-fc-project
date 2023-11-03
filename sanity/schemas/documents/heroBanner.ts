export default {
    name: 'heroBanner',
    type: 'document',
    title: 'Hero banner',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule: any) => Rule.max(30), 
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) => Rule.max(400), 
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
        validation: (Rule:any) => Rule.max(400), 
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };