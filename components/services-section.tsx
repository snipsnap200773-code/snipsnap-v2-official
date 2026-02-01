"use client"

import { useState } from "react"
import { CreditCard, Scissors, Users, Home, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<null | number>(null)

  const services = [
    {
      icon: CreditCard,
      title: "カラーパスポート",
      shortDesc: "お得な回数券でリタッチやカラーをもっとお得に。",
      fullDesc: (
        <div className="space-y-4">
          <p>「白髪染め」も「おしゃれ染め」も、常に綺麗を保つためのアイテム。根元のプリンの悩みをゼロに。染める頻度に合わせて３つのコースから選べます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 border">コース</th>
                  <th className="p-2 border">有効期間</th>
                  <th className="p-2 border">頻度目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">3回コース</td><td className="p-2 border">3ヶ月</td><td className="p-2 border">45日に1回</td></tr>
                <tr><td className="p-2 border">5回コース</td><td className="p-2 border">4ヶ月</td><td className="p-2 border">30日に1回</td></tr>
                <tr><td className="p-2 border">8回コース</td><td className="p-2 border">5ヶ月</td><td className="p-2 border">21日に1回</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      icon: Scissors,
      title: "前髪カット無料",
      shortDesc: "既存のお客様は前髪カットが無料。",
      fullDesc: (
        <p>ちょっと伸びたな・・・でも自分で切って失敗したら嫌だなと思ったらお散歩ついでにどうぞ。ご予約なしで気軽にご来店ください。</p>
      ),
    },
    {
      icon: Users,
      title: "親子カット",
      shortDesc: "お子様と一緒にご来店いただけます。",
      fullDesc: (
        <p>お父さん又はお母さんとご一緒でお子様(小学生以下)のカットが<span className="text-primary font-bold">５００円</span>！親子で過ごすリラックスタイムをお楽しみください。</p>
      ),
    },
    {
      icon: Home,
      title: "訪問美容",
      shortDesc: "ご自宅や施設への訪問美容サービス。",
      fullDesc: (
        <div className="space-y-4">
          <p>ご自宅や施設への訪問美容サービスも承っております。</p>
          <ul className="list-disc list-inside bg-muted p-4 rounded-lg">
            <li>カット料金：2,500円</li>
            <li>出張費：1,000円</li>
          </ul>
          <div className="pt-4">
            <Button className="w-full bg-primary" onClick={() => window.location.href = '#houmon-form'}>
              <Mail className="mr-2 h-4 w-4" /> 訪問カットの相談をする
            </Button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Services</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">その他のサービス</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(index)}
              className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-border cursor-pointer group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
              <p className="text-primary text-xs mt-4 font-bold">詳細を見る →</p>
            </div>
          ))}
        </div>
      </div>

      {/* 詳細ポップアップ */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl border-b pb-2">
              {selectedService !== null && services[selectedService].title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 text-muted-foreground leading-relaxed">
            {selectedService !== null && services[selectedService].fullDesc}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}