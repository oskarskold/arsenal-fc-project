import fields from '../common/fields';
import fieldsets from '../common/fieldsets';

export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ Page',
  fieldsets: [fieldsets.metadata],
  fields: [
    {
      title: 'Qustions',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Answer',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Accessible Slug',
      name: 'accessibleSlug',
      type: 'slug',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
