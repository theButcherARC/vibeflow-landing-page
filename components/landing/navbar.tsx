import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ROUTES } from "@/constants/routes"

const NAV_LINKS = [
  { label: "Features", href: ROUTES.FEATURES },
  { label: "How it works", href: ROUTES.HOW_IT_WORKS },
  { label: "Dashboard", href: ROUTES.DASHBOARD },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
            V
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">VibeFlow</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={ROUTES.BULK_PAY}
          className="inline-flex items-center gap-2 rounded-[14px] bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:scale-[1.02]"
        >
          Launch App
          <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  )
}
