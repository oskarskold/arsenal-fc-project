import fields from '../common/fields';
import fieldsets from '../common/fieldsets';
import faq from '../objects/faq';
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
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [faq],
    },
    {
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'reference',
      to: [{ type: 'heroBanner' }],
    },
    banner,
  ],
  

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
