const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        of: [{ type: 'image' }],
        options: {
          hotspot: true
        }
      },
      {
        name: 'name',
        title: 'title',
        type: 'string'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'details',
        title: 'Details',
        type: 'text'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string'
      },
      {
        name: 'featured',
        title: 'Featured',
        type: 'boolean'

      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number'
      }
    ]
  }
  export default product;