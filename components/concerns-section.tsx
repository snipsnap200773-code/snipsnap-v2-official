import { Check, HelpCircle } from "lucide-react"

export function ConcernsSection() {
  const concerns = [
    "髪の悩みをだれに相談したらいいか分からない",
    "薄毛に悩んでいる",
    "美容室行っても思い通りにならない",
    "最近髪の毛のボリュームが無くなってきた",
    "本当に安心できる美容室を探してる",
  ]

  return (
    <section id="concerns" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground mb-4">
            こんなお悩みはありませんか？
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
            <ul className="space-y-4 md:space-y-6">
              {concerns.map((concern, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg">{concern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-primary/10 rounded-2xl p-6 md:p-8">
            <p className="text-lg md:text-xl text-foreground mb-2">
              一つでも思い当たるあなたへ
            </p>
            <p className="font-serif text-2xl md:text-3xl text-primary font-medium">
              当店は「イロとカタチ」の
              <br className="sm:hidden" />
              専門美容室です
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
