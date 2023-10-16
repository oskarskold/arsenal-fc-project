import { BsList } from 'react-icons/bs'

export default {
  title: 'Portable Text',
  name: 'portableTextWithImage',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [
        // { title: 'None', value: 'none', blockEditor: { icon: BsList } },
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
    },
    { type: 'figure' },
  ],
}
