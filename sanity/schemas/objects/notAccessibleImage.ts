export default {
  name: 'notAccessibleImage',
  title: 'Decorative image',
  description: `👁️ This image is purely decorative. It should not convey any meaning that is not already expressed by text around it, as it will not be detectable by unsighted users.`,
  type: 'image',
  options: {
    hotspot: false,
  },
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
}
