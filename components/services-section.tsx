import { CreditCard, Scissors, Users, Home } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: CreditCard,
      title: "カラーパスポート",
      description: "お得な回数券でリタッチやカラーをもっとお得に。定期的なカラーリングをお考えの方におすすめです。",
    },
    {
      icon: Scissors,
      title: "前髪カット無料",
      description: "既存のお客様は前髪カットが無料。いつでも気軽にお立ち寄りください。",
    },
    {
      icon: Users,
      title: "親子カット",
      description: "お子様と一緒にご来店いただけます。親子で過ごすリラックスタイムをお楽しみください。",
    },
    {
      icon: Home,
      title: "訪問美容",
      description: "ご自宅や施設への訪問美容サービスも承っております。お気軽にご相談ください。",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Services</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground mb-4">
            その他のサービス
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
