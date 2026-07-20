"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Send,
  CreditCard,
  Users,
  Fingerprint,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react"

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/bulk-pay" },
  { icon: Send, label: "Bulk Pay", href: "/bulk-pay/send" },
  { icon: CreditCard, label: "Payments", href: "/bulk-pay/payments" },
  { icon: Users, label: "Recipients", href: "/bulk-pay/recipients" },
  { icon: Fingerprint, label: "VibeID", href: "/bulk-pay/vibeid" },
  { icon: BarChart3, label: "Analytics", href: "/bulk-pay/analytics" },
  { icon: Settings, label: "Settings", href: "/bulk-pay/settings" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden h-screen w-64 flex-col border-r border-border bg-card p-6 sm:flex">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
          V
        </span>
        <span className="text-base font-semibold tracking-tight text-foreground">VibeFlow</span>
      </Link>

      {/* Search */}
      <div className="mt-6 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-border bg-secondary/50 py-2 pl-10 pr-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-brand focus:outline-none"
        />
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col gap-2 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-brand/10 text-brand shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User profile + logout */}
      <div className="border-t border-border pt-4">
        <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <div className="h-8 w-8 rounded-full bg-brand/20" />
          <div className="flex-1 text-left">
            <p className="text-xs font-semibold text-foreground">0xa04C...AAaE</p>
            <p className="text-[10px] text-muted-foreground">Connected</p>
          </div>
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <LogOut className="h-4 w-4" />
          Disconnect
        </button>
      </div>
    </aside>
  )
}
