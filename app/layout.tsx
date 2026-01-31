import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const _notoSerifJP = Noto_Serif_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: '美容室SnipSnap | 「イロとカタチ」の専門美容室 | 横浜市青葉区',
  description: '横浜市青葉区の美容室SnipSnap。「イロとカタチ」をコンセプトに、カラーリング・パーマ・縮毛矯正・ヘナなど幅広いメニューでお客様の理想のヘアスタイルを実現します。青葉台駅・十日市場駅から徒歩10分。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    verification: {
    google: "pPBHkpT8Bf3GzaOhKiB48LHI8YF6UiETCJ-57BTLMxA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
