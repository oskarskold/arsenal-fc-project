import fields from '../common/fields';

const OBJECT_TITLE = 'CTA block with side image';

export default {
  name: 'accessiblePictureWithCTA',
  title: OBJECT_TITLE,
  type: 'object',
  fields: [
    fields.heading,
    { ...fields.description, description: 'Max 400 characters' },
    {
      name: 'cta',
      type: 'CTA',
    },
    {
      name: 'isLeftSide',
      title: 'Should the image be at the left side',
      description: 'By default, the image is at the right side of the block',
      type: 'boolean',
    },
    {
      ...fields.imageWithCaption,
    },
  ],
  preview: {
    select: {
      title: 'heading.sv',
      media: 'image',
    },
  },
};
