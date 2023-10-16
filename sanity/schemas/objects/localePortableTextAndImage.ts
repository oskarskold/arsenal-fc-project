// Comment back in everything when we start translating
import { supportedLanguages } from './localePortableText'

export default {
  title: '',
  name: 'localePortableTextAndImage',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title, // lang.title
    name: lang.id,
    type: 'portableTextWithImage',
    // fieldset: lang.isDefault ? null : 'translations'
  })),
}
