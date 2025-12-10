import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityProperty, Property } from '@/app/types/property'
import { SanityImage } from '@/app/lib/sanity.image'

// Sanity client configuration
export const sanityClient = createClient({
  projectId: 'os9t33pr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Create image URL builder
const builder = imageUrlBuilder(sanityClient)

// Type-safe image URL function
function getImageUrl(image: SanityImage): string {
  if (!image?.asset?._ref) {
    console.warn('Invalid image reference:', image)
    return ''
  }
  
  try {
    // Use the builder to generate the URL
    return builder.image(image).url()
  } catch (error) {
    console.error('Error generating image URL:', error)
    return ''
  }
}

// Optional: For dynamic image sizing with more control
export function urlFor(source: SanityImage) {
  return builder.image(source)
}

// Fetch all properties
export async function getAllProperties(): Promise<Property[]> {
  const query = `*[_type == "property"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    propertyType,
    location,
    price,
    numericPrice,
    bedrooms,
    bathrooms,
    size,
    description,
    features,
    images,
    isFeatured,
    status,
    publishedAt
  }`

  try {
    const data: SanityProperty[] = await sanityClient.fetch(query)
    
    // Convert to frontend format
    return data.map(property => ({
      id: property._id,
      title: property.title,
      category: property.category,
      type: property.propertyType,
      location: property.location,
      price: property.price,
      bedrooms: property.bedrooms || 0,
      bathrooms: property.bathrooms || 0,
      size: property.size || '',
      description: property.description,
      features: property.features || [],
      images: property.images?.map(img => getImageUrl(img)).filter(url => url !== '') || []
    }))
  } catch (error) {
    console.error('Error fetching properties:', error)
    throw new Error('Failed to fetch properties from Sanity')
  }
}

// Fetch properties by category
export async function getPropertiesByCategory(category: string): Promise<Property[]> {
  const query = category === 'all' 
    ? `*[_type == "property"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        category,
        propertyType,
        location,
        price,
        numericPrice,
        bedrooms,
        bathrooms,
        size,
        description,
        features,
        images,
        isFeatured,
        status,
        publishedAt
      }`
    : `*[_type == "property" && category == $category] | order(publishedAt desc) {
        _id,
        title,
        slug,
        category,
        propertyType,
        location,
        price,
        numericPrice,
        bedrooms,
        bathrooms,
        size,
        description,
        features,
        images,
        isFeatured,
        status,
        publishedAt
      }`

  try {
    const data: SanityProperty[] = await sanityClient.fetch(query, { category })
    
    return data.map(property => ({
      id: property._id,
      title: property.title,
      category: property.category,
      type: property.propertyType,
      location: property.location,
      price: property.price,
      bedrooms: property.bedrooms || 0,
      bathrooms: property.bathrooms || 0,
      size: property.size || '',
      description: property.description,
      features: property.features || [],
      images: property.images?.map(img => getImageUrl(img)).filter(url => url !== '') || []
    }))
  } catch (error) {
    console.error('Error fetching properties by category:', error)
    throw new Error('Failed to fetch properties from Sanity')
  }
}

// Get categories with counts
export async function getCategories() {
  try {
    const query = `*[_type == "property"] {
      category
    }`
    
    const data: { category: string }[] = await sanityClient.fetch(query)
    
    const counts = {
      sale: data.filter(item => item.category === 'sale').length,
      rent: data.filter(item => item.category === 'rent').length,
      land: data.filter(item => item.category === 'land').length,
      commercial: data.filter(item => item.category === 'commercial').length
    }
    
    const total = Object.values(counts).reduce((a, b) => a + b, 0)
    
    return [
      { id: 'all', name: 'All Properties', count: total },
      { id: 'sale', name: 'For Sale', count: counts.sale },
      { id: 'rent', name: 'For Rent', count: counts.rent },
      { id: 'land', name: 'Land & Plots', count: counts.land },
      { id: 'commercial', name: 'Commercial', count: counts.commercial }
    ]
  } catch (error) {
    console.error('Error fetching categories:', error)
    return [
      { id: 'all', name: 'All Properties', count: 0 },
      { id: 'sale', name: 'For Sale', count: 0 },
      { id: 'rent', name: 'For Rent', count: 0 },
      { id: 'land', name: 'Land & Plots', count: 0 },
      { id: 'commercial', name: 'Commercial', count: 0 }
    ]
  }
}