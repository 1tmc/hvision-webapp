// app/page.tsx

import Hero from './components/ui/hero/hero'
import AboutSection from './components/home/AboutSection'
import FeaturedProperties from './components/home/FeaturedProperties'
import LuxuryInteriorShowcase from './components/home/LuxuryInteriorShowcase'
import CallToAction from './components/home/CallToAction'

export default async function HomePage() {
  // fetch featured properties via API or mock
  return (
    <div>
      <Hero />
      < AboutSection />
      <FeaturedProperties />
      <LuxuryInteriorShowcase />
      <CallToAction />
    </div>
  )
}