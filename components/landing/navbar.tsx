import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { ROUTES } from "@/constants/routes"

const NAV_LINKS = [
  { label: "Product", href: ROUTES.PRODUCT, hasMenu: true },
  { label: "Use Cases", href: ROUTES.USE_CASES, hasMenu: true },
  { label: "Developers", href: ROUTES.DEVELOPERS, hasMenu: true },
  { label: "Resources", href: ROUTES.RESOURCES, hasMenu: true },
  { label: "Pricing", href: ROUTES.PRICING, hasMenu: false },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            V
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">VibeFlow</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
              {link.hasMenu ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href={ROUTES.SIGN_IN}
            className="hidden text-sm font-medium text-foreground transition-colors duration-150 hover:text-muted-foreground sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href={ROUTES.BULK_PAY}
            className="inline-flex items-center gap-2 rounded-[14px] bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:scale-[1.02]"
          >
            Launch App
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
