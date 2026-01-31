import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Globe, MessageCircle, Clock, MapPin, Train } from "lucide-react"

export function AccessSection() {
  const infoItems = [
    { icon: Clock, label: "営業時間", value: "9:00〜18:00" },
    { icon: Clock, label: "定休日", value: "月曜日" },
    { icon: MapPin, label: "所在地", value: "横浜市青葉区つつじヶ丘36-22-102" },
    { icon: Phone, label: "電話", value: "045-984-8808" },
    { icon: Train, label: "アクセス", value: "青葉台駅から徒歩10分\n十日市場駅から徒歩10分\n最寄りのバス停【しらとり台】" },
  ]

  return (
    <section id="access" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Access</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground mb-4">
            アクセス
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              店舗情報
            </h3>
            <div className="space-y-4 mb-8">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="tel:045-984-8808">
                  <Phone className="w-5 h-5 mr-2" />
                  045-984-8808
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                <Link href="https://snipsnap-o1.vercel.app/shop/d1669717-95f4-4f80-932f-d412576d55a7/reserve">
                  <Globe className="w-5 h-5 mr-2" />
                  Webで予約する
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent">
                <Link href="https://liff.line.me/2008606267-eJadD70Z">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  LINEで予約
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              マップ
            </h3>
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.8!2d139.5!3d35.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDMwJzAwLjAiTiAxMznCsDMwJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="美容室SnipSnapの地図"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
