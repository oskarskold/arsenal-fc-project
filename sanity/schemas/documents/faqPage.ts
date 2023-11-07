import { metadataSlugFields } from '../objects/metadataFields';
import fields from '../common/fields';
import fieldsets from '../common/fieldsets';
import banner from '../objects/banner';

export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ Page',
  fieldsets: [fieldsets.metadata],
  fields: [
    fields.title,
    {
      title: 'Accessible Slug',
      name: 'accessibleSlug',
      type: 'slug',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    ...metadataSlugFields,
    banner,
    {
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'reference',
      to: [{ type: 'heroBanner' }], // Replace with your other document's type
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};