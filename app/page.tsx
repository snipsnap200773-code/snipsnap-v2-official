import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CampaignSlider } from "@/components/campaign-slider"
import { ConcernsSection } from "@/components/concerns-section"
import { ColorSection } from "@/components/color-section"
import { ShapeSection } from "@/components/shape-section"
import { ServicesSection } from "@/components/services-section"
import { PriceSection } from "@/components/price-section"
import { AccessSection } from "@/components/access-section"
import { Footer } from "@/components/footer"

// この "export default function Home()" が、Next.jsがページとして認識するために必須の記述です
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* キャンペーンスライダー */}
        <CampaignSlider />
        
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