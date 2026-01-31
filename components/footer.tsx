import Link from "next/link"
import { Scissors, Instagram } from "lucide-react"

export function Footer() {
  const recentPosts = [
    { title: "ホームページリニューアル記念。ご新規様20%OFF！", date: "2025/07/03" },
  ]

  const infoLinks = [
    { href: "#", label: "はじめての方へ" },
    { href: "#price", label: "料金表" },
    { href: "#", label: "訪問美容" },
    { href: "#", label: "ブログ" },
  ]

  return (
    <footer className="bg-foreground text-card py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl text-card">SnipSnap</span>
            </Link>
            <p className="text-card/70 text-sm leading-relaxed">
              「イロとカタチ」の専門美容室
              <br />
              横浜市青葉区つつじヶ丘36-22-102
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-card" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-card mb-4">最近の記事</h3>
            <ul className="space-y-3">
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <Link href="#" className="text-card/70 text-sm hover:text-card transition-colors">
                    {post.title}
                  </Link>
                  <p className="text-card/50 text-xs mt-1">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-card mb-4">インフォメーション</h3>
            <ul className="space-y-2">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 text-sm hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 pt-8 text-center">
          <p className="text-card/50 text-sm">
            &copy; {new Date().getFullYear()} 美容室SnipSnap. All rights reserved.
          </p>
        </div>
      </div>

      <Link
        href="#home"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="トップへ戻る"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Link>
    </footer>
  )
}
