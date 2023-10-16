export const metadataFields = [
  {
    name: 'description',
    type: 'text',
    title: 'Description',
    description: 'This description populates meta-tags on the webpage',
    fieldset: 'metadata',
  },
  {
    name: 'openGraphImage',
    type: 'image',
    title: 'Open Graph Image',
    description:
      'Image for sharing previews on Facebook, Twitter etc. 1200:630 px (aspect ratio of 1.91:1)',
    fieldset: 'metadata',
  },
];

export const metadataSlugFields = [...metadataFields];
