import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function PriceSection() {
  const colorMenu = [
    { name: "リタッチ", price: "¥4,000" },
    { name: "シングルプロセス（全体染め１回）", price: "¥5,000" },
    { name: "ダブルプロセス（全体染め２回）", price: "¥10,000" },
    { name: "ハイライト/ローライト（Half）※ホイル10枚まで", price: "¥5,000" },
    { name: "ハイライト/ローライト（Full）※ホイル11枚以上", price: "¥10,000" },
  ]

  const hennaMenu = [
    { name: "クリア", price: "¥4,000" },
    { name: "ナチュラル", price: "¥5,000" },
    { name: "ブラウン", price: "¥6,000" },
    { name: "レッド", price: "¥6,000" },
  ]

  const cutMenu = [
    { name: "カット", price: "¥4,500" },
    { name: "シニア（60歳以上）", price: "¥4,000" },
    { name: "メンズ", price: "¥4,000" },
    { name: "高校生", price: "¥3,500" },
    { name: "中学生", price: "¥2,500" },
    { name: "小学生", price: "¥2,000" },
    { name: "キッズ", price: "¥1,500" },
    { name: "前髪（※既存のお客様は¥0）", price: "¥1,000" },
  ]

  const permMenu = [
    { name: "パーマ（ニュアンス/スペインetc.）", price: "¥5,000" },
    { name: "特殊パーマ（ツイスト/スパイラル）", price: "¥10,000" },
    { name: "縮毛矯正（Half）", price: "¥8,000" },
    { name: "縮毛矯正（Full）", price: "¥12,000" },
  ]

  const careMenu = [
    { name: "ヘッドスパ", price: "¥1,000" },
    { name: "トリートメント", price: "¥3,000" },
    { name: "トステア", price: "¥1,000" },
  ]

  const otherMenu = [
    { name: "シャンプー・ドライ", price: "¥2,000" },
    { name: "シャンプー・スタイリング", price: "¥3,000" },
    { name: "マッサージ（10分）", price: "¥1,000" },
  ]

  const colorPassport = [
    { course: "3回コース", period: "3ヶ月", frequency: "45日に1回", colorPrice: "¥9,000（¥3,000/回）", hennaPrice: "¥12,000（¥4,000/回）" },
    { course: "5回コース", period: "4ヶ月", frequency: "30日に1回", colorPrice: "¥14,000（¥2,800/回）", hennaPrice: "¥17,000（¥3,400/回）" },
    { course: "8回コース", period: "5ヶ月", frequency: "21日に1回", colorPrice: "¥20,000（¥2,500/回）", hennaPrice: "¥24,000（¥3,000/回）" },
  ]

  return (
    <section id="price" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Price</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground mb-4">
            料金表
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <PriceTable title="Color（シャンプー別）" items={colorMenu} />
            <PriceTable title="ヘナ（シャンプー別）" items={hennaMenu} />
            <PriceTable title="Perm（シャンプー別）" items={permMenu} />
          </div>
          <div className="space-y-8">
            <PriceTable title="Cut（シャンプー＆スタイリング込）" items={cutMenu} />
            <PriceTable title="ヘアケア（シャンプー別）" items={careMenu} />
            <PriceTable title="その他" items={otherMenu} />
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-6 text-center">
            カラーパスポート（回数券）
          </h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-medium text-foreground">コース名</TableHead>
                  <TableHead className="font-medium text-foreground">有効期間</TableHead>
                  <TableHead className="font-medium text-foreground">おすすめ頻度</TableHead>
                  <TableHead className="font-medium text-foreground">カラー料金</TableHead>
                  <TableHead className="font-medium text-foreground">ヘナ料金</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {colorPassport.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.course}</TableCell>
                    <TableCell>{item.period}</TableCell>
                    <TableCell>{item.frequency}</TableCell>
                    <TableCell>{item.colorPrice}</TableCell>
                    <TableCell>{item.hennaPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}

function PriceTable({ title, items }: { title: string; items: { name: string; price: string }[] }) {
  return (
    <div className="bg-background rounded-xl overflow-hidden border border-border">
      <div className="bg-primary/10 px-4 py-3">
        <h3 className="font-medium text-foreground">{title}</h3>
      </div>
      <div className="divide-y divide-border">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center px-4 py-3">
            <span className="text-sm text-foreground">{item.name}</span>
            <span className="text-sm font-medium text-primary">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
