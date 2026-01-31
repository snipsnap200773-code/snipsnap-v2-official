import Image from "next/image"
import { Palette, Sparkles } from "lucide-react"

export function ColorSection() {
  return (
    <section id="color" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Color</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground mb-4">
            イロ（色）
          </h2>
          <p className="text-muted-foreground text-lg">
            暖色、寒色、自分色。
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
            <Image
              src="/images/color-service.jpg"
              alt="多彩なカラーメニュー"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                  多彩なカラーメニューで
                  <br />
                  なりたい色に
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  白髪染め（弱酸性・塩基性・ヘナ）はもちろん、ブリーチや弱アルカリカラーを使ったシングルカラーやダブルプロセスまで幅広く対応。髪への負担を抑えながら、なりたい色を叶えるご提案をいたします。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                  トステア配合で美しい
                  <br />
                  発色と持続力
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  お一人おひとりの髪質に合わせて薬剤を選定し、ダメージを抑えながら美しい発色と色持ちの良さを実現します。
                </p>
                <div className="mt-4 bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium mb-1">トステアとは？</p>
                  <p className="text-sm text-muted-foreground">
                    トステア（Tostear）は、保湿・補修効果に優れた成分で、カラーやパーマの施術中に髪の質感を高め、ダメージを軽減してくれます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
