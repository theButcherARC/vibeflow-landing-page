import Link from "next/link"
import {
  ArrowRight,
  PlayCircle,
  Zap,
  LayoutDashboard,
  Send,
  CreditCard,
  Users,
  Fingerprint,
  BarChart3,
  Settings,
  Bell,
  ChevronDown,
  Wallet,
  TrendingUp,
} from "lucide-react"
import { ROUTES } from "@/constants/routes"

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Send, label: "Bulk Pay", active: false },
  { icon: CreditCard, label: "Payments", active: false },
  { icon: Users, label: "Recipients", active: false },
  { icon: Fingerprint, label: "VibeID", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
]

const STAT_CARDS = [
  { label: "Balance", value: "1,966.97", sub: "USDC", icon: Wallet },
  { label: "Total Sent", value: "$50,230.50", sub: "USDC", icon: TrendingUp },
  { label: "Total Payments", value: "10,243", sub: "All time", icon: CreditCard },
  { label: "Recipients", value: "1,208", sub: "All time", icon: Users },
]

const PAYMENTS = [
  { name: "Design Team", amount: "250.00", time: "2m ago" },
  { name: "Marketing Wallets", amount: "1,200.00", time: "15m ago" },
  { name: "Community Rewards", amount: "500.00", time: "1h ago" },
  { name: "Partners", amount: "2,000.00", time: "3h ago" },
  { name: "Airdrop Winners", amount: "3,000.00", time: "5h ago" },
]

const LOGOS = ["ARC", "MANTA NETWORK", "galxe", "SYNTHR", "LayerEdge"]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className="max-w-xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <Zap className="h-3.5 w-3.5 text-brand" />
            <span className="text-xs font-semibold text-foreground">
              Built on <span className="text-brand">Arc Blockchain</span>
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Batch USDC Payments.
            <br />
            <span className="text-brand">Instantly.</span> Effortlessly.
          </h1>

          <p className="animate-fade-up delay-100 mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Send USDC or EURC to your entire team in one transaction. AI-powered, zero approval, settled in under a
            second on Arc.
          </p>

          <div className="animate-fade-up delay-180 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ROUTES.BULK_PAY}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:scale-[1.02]"
            >
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={ROUTES.HOW_IT_WORKS}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-150 hover:scale-[1.02]"
            >
              See How It Works
              <PlayCircle className="h-4 w-4" />
            </Link>
          </div>

          <div className="animate-fade-up delay-260 mt-10">
            <p className="text-sm text-muted-foreground">Trusted by teams building on the future</p>
            <div className="marquee-mask mt-4 flex overflow-hidden">
              <div className="animate-marquee flex shrink-0 items-center gap-x-8 pr-8">
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <span
                    key={`${logo}-${i}`}
                    className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground/50"
                  >
                    {logo}
                  </span>
                ))}
              </div>
              <div className="animate-marquee flex shrink-0 items-center gap-x-8 pr-8" aria-hidden="true">
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <span
                    key={`dup-${logo}-${i}`}
                    className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground/50"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column - dashboard mockup */}
        <div className="animate-fade-up delay-180">
          <div className="animate-float-soft overflow-hidden rounded-[20px] border border-border bg-card shadow-[0_1px_2px_rgba(17,17,17,0.04),0_24px_60px_-24px_rgba(17,17,17,0.18)]">
            <div className="flex">
              {/* Sidebar */}
              <aside className="hidden w-40 shrink-0 flex-col border-r border-border bg-card p-3 sm:flex">
                <div className="flex items-center gap-2 px-2 py-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground">
                    V
                  </span>
                  <span className="text-xs font-semibold tracking-tight text-foreground">VibeFlow</span>
                </div>
                <nav className="mt-3 flex flex-col gap-0.5">
                  {SIDEBAR_ITEMS.map((item) => (
                    <span
                      key={item.label}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                        item.active ? "bg-brand/10 text-brand" : "text-muted-foreground"
                      }`}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                      {item.label}
                    </span>
                  ))}
                </nav>
                <div className="mt-auto flex items-center gap-2 border-t border-border px-2 pt-3">
                  <span className="h-6 w-6 rounded-full bg-brand/20" />
                  <div className="leading-tight">
                    <p className="text-[10px] font-semibold text-foreground">Butcher.base.eth</p>
                    <p className="text-[9px] text-muted-foreground">0xa04C...AAaE</p>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="min-w-0 flex-1 bg-background p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Dashboard</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2 py-1 text-[10px] font-medium text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      0xa04C...AAaE
                      <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card">
                      <Bell className="h-3 w-3 text-muted-foreground" />
                    </span>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
                  {STAT_CARDS.map((card) => (
                    <div key={card.label} className="rounded-xl border border-border bg-card p-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] text-muted-foreground">{card.label}</p>
                        <card.icon className="h-3 w-3 text-brand" />
                      </div>
                      <p className="mt-1 text-sm font-bold tracking-tight text-foreground">{card.value}</p>
                      <p className="text-[9px] text-muted-foreground">{card.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Recent payments */}
                <div className="mt-3 rounded-xl border border-border bg-card p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold text-foreground">Recent Payments</p>
                    <span className="text-[9px] font-medium text-brand">View all</span>
                  </div>
                  <div className="mt-2 divide-y divide-border">
                    {PAYMENTS.map((p) => (
                      <div key={p.name} className="flex items-center justify-between py-1.5">
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                            <Users className="h-2.5 w-2.5 text-muted-foreground" />
                          </span>
                          <span className="text-[10px] font-medium text-foreground">{p.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-semibold text-foreground">{p.amount}</span>
                          <span className="hidden text-[9px] text-muted-foreground sm:inline">USDC</span>
                          <span className="rounded-full bg-success/10 px-1.5 py-0.5 text-[8px] font-medium text-success">
                            Completed
                          </span>
                          <span className="hidden w-10 text-right text-[9px] text-muted-foreground sm:inline">
                            {p.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
