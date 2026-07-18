import { TrendingUp, Users, Zap, UsersRound } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const STATS = [
  { icon: TrendingUp, value: "$50M+", label: "Total Volume", iconClass: "bg-brand/20 text-brand" },
  { icon: Users, value: "10K+", label: "Transactions", iconClass: "bg-success/20 text-success" },
  { icon: Zap, value: "<1s", label: "Arc Finality", iconClass: "bg-accent-blue/20 text-accent-blue" },
  { icon: UsersRound, value: "100+", label: "Recipients Per Tx", iconClass: "bg-orange-500/20 text-orange-400" },
]

export function Stats() {
  return (
    <section className="px-4 pb-6 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-[20px] bg-primary px-6 py-8 sm:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stat.iconClass}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
