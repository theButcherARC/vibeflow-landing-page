import Link from "next/link"
import { Hash, MessageCircle, Globe, Link2 } from "lucide-react"
import { ROUTES } from "@/constants/routes"

const COLUMNS = [
  {
    heading: "Product",
    links: ["Bulk Pay", "Payments", "VibeID", "Analytics"],
  },
  {
    heading: "Use Cases",
    links: ["Payroll", "Airdrops", "Community Rewards", "Team Payouts"],
  },
  {
    heading: "Developers",
    links: ["API Docs", "SDKs", "Webhooks", "Guides"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Help Center", "Security", "Status", "Terms & Privacy"],
  },
]

const SOCIALS = [Hash, MessageCircle, Link2, Globe]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 pb-8 pt-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div className="max-w-xs">
            <Link href={ROUTES.HOME} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                V
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">VibeFlow</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Programmable USDC payroll and batch payments for Web3 teams on Arc.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {SOCIALS.map((Icon, i) => (
                <Link
                  key={i}
                  href={ROUTES.HOME}
                  className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-foreground">{column.heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={ROUTES.HOME}
                      className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">&copy; 2026 VibeFlow. All rights reserved.</p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Built on <span className="text-brand">Arc Blockchain</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
