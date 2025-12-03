import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/app/types'

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm">
      <Link href={`/properties/${p.slug}`}>
        <div className="relative h-48 w-full">
          <Image src={p.images?.[0] || '/images/property-placeholder.jpg'} alt={p.title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-500">{p.location}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-brand font-semibold">₵{p.price.toLocaleString()}</span>
          <Link href={`/properties/${p.slug}`} className="text-sm text-gray-600">View</Link>
        </div>
      </div>
    </article>
  )
}
