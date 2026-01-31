import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ConcernsSection } from "@/components/concerns-section"
import { ColorSection } from "@/components/color-section"
import { ShapeSection } from "@/components/shape-section"
import { ServicesSection } from "@/components/services-section"
import { PriceSection } from "@/components/price-section"
import { AccessSection } from "@/components/access-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConcernsSection />
        <ColorSection />
        <ShapeSection />
        <ServicesSection />
        <PriceSection />
        <AccessSection />
      </main>
      <Footer />
    </>
  )
}
