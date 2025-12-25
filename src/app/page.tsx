import { Hero } from "@/components/Hero"
import { PhilosophySection } from "@/components/PhilosophySection"
import { CollectionSection } from "@/components/CollectionSection"
import { MarketPulseSection } from "@/components/MarketPulseSection"
import { ReelsGallery } from "@/components/ReelsGallery"
import { ContactSection } from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Hero />
      <PhilosophySection />
      <CollectionSection />
      <MarketPulseSection />
      <ReelsGallery />
      <ContactSection />
    </main>
  )
}
