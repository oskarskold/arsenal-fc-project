// Comment back in everything when we start translating

const supportedLanguages = [
  {id: 'sv', title: 'Swedish', isDefault: true},
  {id: 'en', title: 'English'},
]

export default {
  title: '',
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true}
    }
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'text'
    // fieldset: lang.isDefault ? null : 'translations'
  }))
}
