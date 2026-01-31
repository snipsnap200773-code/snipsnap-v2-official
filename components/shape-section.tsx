import Image from "next/image"
import { Plus, Minus, Heart } from "lucide-react"

export function ShapeSection() {
  const plusMenus = [
    "パーマ",
    "カット",
    "ローライト、ハイライト",
    "トリートメント",
    "ボリュームアップシャンプー",
  ]

  const minusMenus = [
    "カット",
    "質感調整",
    "縮毛矯正",
  ]

  const careMenus = [
    "ヘナ",
    "トリートメント",
    "ヘッドスパ",
    "トステア",
    "ヘアオイル",
  ]

  return (
    <section id="shape" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Shape</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground mb-4">
            カタチ（形）
          </h2>
          <p className="text-muted-foreground text-lg">
            足して引いて出来上がり。
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                足し算
              </h3>
            </div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/hair-styling.jpg"
                alt="足し算でつくる動きと立体感"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              髪に動き・立体感・ツヤ・彩りを加えることで、印象はぐっと華やかになります。
            </p>
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-2">足し算メニュー例</p>
              <ul className="space-y-1">
                {plusMenus.map((menu, index) => (
                  <li key={index} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Minus className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                引き算
              </h3>
            </div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/hair-treatment.jpg"
                alt="引き算でつくるまとまりと抜け感"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              余分な重さ・広がり・クセを引いてこそ、バランスのとれた「自分に似合うカタチ」が生まれます。
            </p>
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-2">引き算メニュー例</p>
              <ul className="space-y-1">
                {minusMenus.map((menu, index) => (
                  <li key={index} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                ヘアケア
              </h3>
            </div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Heart className="w-16 h-16 text-primary/50" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              ヘアスタイルの完成度を高めるのは、髪の手触り・ツヤ・保湿──それらが整ってはじめて、足し引きしたデザインが活きてきます。
            </p>
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-2">ヘアケアメニュー/アイテム</p>
              <ul className="space-y-1">
                {careMenus.map((menu, index) => (
                  <li key={index} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
