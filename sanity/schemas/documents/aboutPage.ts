import { metadataSlugFields } from '../objects/metadataFields';
import fields from '../common/fields';
import fieldsets from '../common/fieldsets';
import banner from '../objects/banner';

export default {
  name: 'about',
  type: 'document',
  title: 'About Page',
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
    {
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'reference',
      to: [{ type: 'heroBanner' }],
    },
    ...metadataSlugFields,
    banner,
    
  ],
  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
