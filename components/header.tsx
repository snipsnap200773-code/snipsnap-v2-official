"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#concerns", label: "お悩み" },
    { href: "#color", label: "イロ" },
    { href: "#shape", label: "カタチ" },
    { href: "#services", label: "サービス" },
    { href: "#price", label: "料金表" },
    { href: "#access", label: "アクセス" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl md:text-2xl font-medium text-foreground">
              SnipSnap
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="tel:045-984-8808">
                <Phone className="w-4 h-4 mr-2" />
                ご予約
              </Link>
            </Button>
            
            <button
              type="button"
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニューを開く"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-foreground hover:text-primary transition-colors border-b border-border last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="tel:045-984-8808">
                <Phone className="w-4 h-4 mr-2" />
                045-984-8808
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
