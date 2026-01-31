import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-salon.jpg"
          alt="美容室SnipSnapの店内"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-xl">
          <p className="text-sm md:text-base text-primary font-medium mb-4">
            横浜市青葉区の美容室
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
            <span className="text-balance">「イロとカタチ」の</span>
            <br />
            <span className="text-primary">専門美容室</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            お一人おひとりの髪質やライフスタイルに合わせて、
            あなただけの「イロ」と「カタチ」をご提案します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="tel:045-984-8808">
                <Phone className="w-5 h-5 mr-2" />
                電話で予約
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <Link href="#access">
                <Calendar className="w-5 h-5 mr-2" />
                Webで予約
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
