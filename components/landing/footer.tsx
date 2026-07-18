import Link from "next/link"
import { ROUTES } from "@/constants/routes"

const FOOTER_LINKS = [
  { label: "Features", href: ROUTES.FEATURES },
  { label: "How it works", href: ROUTES.HOW_IT_WORKS },
  { label: "Dashboard", href: ROUTES.DASHBOARD },
  { label: "Launch App", href: ROUTES.BULK_PAY },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand text-xs font-bold text-white">
            V
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">VibeFlow</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">Built on Arc. Settled in seconds.</p>
      </div>
    </footer>
  )
}
