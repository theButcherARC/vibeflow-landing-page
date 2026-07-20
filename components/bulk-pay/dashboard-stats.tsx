"use client"

import { Wallet, TrendingUp, CreditCard, Users, ArrowUpRight } from "lucide-react"
import { CountUp } from "@/components/landing/count-up"

const STATS = [
  {
    label: "Balance",
    value: 1966.97,
    prefix: "$",
    icon: Wallet,
    color: "text-brand",
    bgColor: "bg-brand/10",
    change: "+12.5%",
  },
  {
    label: "Total Sent",
    value: 50230.5,
    prefix: "$",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
    change: "+8.2%",
  },
  {
    label: "Total Payments",
    value: 10243,
    icon: CreditCard,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    change: "+24.1%",
  },
  {
    label: "Recipients",
    value: 1208,
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    change: "+15.3%",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-[16px] border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-foreground/15 hover:shadow-[0_1px_3px_rgba(17,17,17,0.1)]"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                {stat.prefix}
                <CountUp value={stat.value} decimals={stat.label === "Balance" ? 2 : 0} />
              </p>
            </div>
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <ArrowUpRight className="h-3.5 w-3.5 text-success" />
            <span className="text-xs font-semibold text-success">{stat.change}</span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  )
}
