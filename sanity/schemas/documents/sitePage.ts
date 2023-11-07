import { metadataSlugFields } from '../objects/metadataFields';
import fields from '../common/fields';
import fieldsets from '../common/fieldsets';

export default {
  name: 'sitePage',
  type: 'document',
  title: 'Site pages',
  fieldsets: [fieldsets.metadata],
  fields: [
    fields.title,
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
