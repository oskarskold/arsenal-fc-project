import { metadataSlugFields } from '../objects/metadataFields';
import fields from '../common/fields';
import fieldsets from '../common/fieldsets';

export default {
  name: 'productPage',
  type: 'document',
  title: 'Product Page',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
