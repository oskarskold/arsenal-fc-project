import fields from '../common/fields';

const OBJECT_TITLE = 'CTA block with background image';

export default {
  name: 'accessiblePictureBackgroundWithCTA',
  title: OBJECT_TITLE,
  type: 'object',
  fields: [
    fields.heading,
    {
      name: 'backgroundImage',
      type: 'image',
    },
    {
      name: 'cta',
      type: 'CTA',
    },
  ],
  preview: {
    select: {
      title: 'heading.sv',
      media: 'backgroundImage',
    },
  },
};
