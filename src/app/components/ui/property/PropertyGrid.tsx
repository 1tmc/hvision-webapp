import PropertyCard from './PropertyCard'
import { Property } from '@/app/types'

// sample mock data for now
const mock: Property[] = new Array(6).fill(0).map((_, i) => ({
  id: `p${i}`,
  title: `Luxury Apartment ${i+1}`,
  slug: `luxury-apartment-${i+1}`,
  location: 'Accra',
  price: 200000 + i * 10000,
  description: 'A beautiful property.',
  images: ['/images/property-placeholder.jpg'],
  category: 'sale'
}))

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mock.map((p) => <PropertyCard key={p.id} p={p} />)}
    </div>
  )
}
