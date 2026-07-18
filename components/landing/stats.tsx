import { Reveal } from "@/components/landing/reveal"

const STATS = [
  { value: "<1s", label: "Arc finality" },
  { value: "100+", label: "Recipients per tx" },
  { value: "0", label: "Approvals required" },
  { value: "2", label: "Stablecoins supported" },
]

export function Stats() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-[20px] border border-border bg-secondary px-6 py-10 sm:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
