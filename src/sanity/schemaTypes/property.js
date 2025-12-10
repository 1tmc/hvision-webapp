// sanity/schemaTypes/property.ts
import { defineType, defineField } from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Property Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'sale' },
          { title: 'For Rent', value: 'rent' },
          { title: 'Land & Plots', value: 'land' },
          { title: 'Commercial', value: 'commercial' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          'Residential',
          'Apartment',
          'Villa',
          'Duplex',
          'Bungalow',
          'Commercial Building',
          'Office Space',
          'Land',
          'Other'
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., $320,000 or $2,800/month',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'numericPrice',
      title: 'Numeric Price (for sorting)',
      type: 'number',
      description: 'Price as a number for sorting purposes'
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(20)
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(20)
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'e.g., 4500 sq ft'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(50).max(1000)
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'images',
      title: 'Property Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      },
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Property',
      type: 'boolean',
      description: 'Mark as featured to show on homepage',
      initialValue: false
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold', value: 'sold' },
          { title: 'Rented', value: 'rented' },
          { title: 'Under Offer', value: 'under-offer' }
        ]
      },
      initialValue: 'available'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      category: 'category',
      price: 'price'
    },
    prepare(selection) {
      const { title, media, category, price } = selection
      return {
        title: title,
        subtitle: `${category?.toUpperCase() || 'N/A'} - ${price}`,
        media: media
      }
    }
  }
})