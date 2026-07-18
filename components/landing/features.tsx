import { Bot, Zap, Coins, Tag, FileStack, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const FEATURES = [
  {
    icon: Bot,
    title: "AI Payment Agent",
    description:
      "Describe payments in plain English. VibeAI parses your intent instantly - recipients, amounts, and tokens auto-filled in seconds.",
  },
  {
    icon: Zap,
    title: "Zero Approval Flow",
    description:
      "Multicall3From preserves msg.sender throughout the batch. No ERC20 approve step needed. Your USDC moves in one click.",
  },
  {
    icon: Coins,
    title: "USDC + EURC",
    description:
      "Pay in US dollars or Euros. Switch stablecoins with one click. Both Circle-issued, both settled on Arc.",
  },
  {
    icon: Tag,
    title: "Onchain Memo Labels",
    description:
      "Tag every payroll batch with a label stored permanently onchain. July Salary. Q3 Bonus. Contractor Batch.",
  },
  {
    icon: FileStack,
    title: "CSV + Templates",
    description:
      "Upload a CSV or reuse a payroll template to build a batch in seconds. Perfect for recurring team payouts.",
  },
  {
    icon: ShieldCheck,
    title: "Auditable by Design",
    description:
      "Every batch is a single verifiable transaction. Export receipts and reconcile with a clear onchain trail.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to move money at scale
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            VibeFlow abstracts the complexity of blockchain batch payments into a simple, reliable interface your team
            will love.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 60}>
              <div className="group h-full rounded-[20px] border border-border bg-card p-6 transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(17,17,17,0.04),0_10px_30px_-14px_rgba(17,17,17,0.14)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-border bg-secondary">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
