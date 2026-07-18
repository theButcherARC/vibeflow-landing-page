import { Zap, ShieldCheck, Sparkles, Lock } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const FEATURES = [
  {
    icon: Zap,
    title: "Sub-second Finality",
    description: "Transactions settle in under one second on Arc.",
    iconClass: "bg-brand/10 text-brand",
  },
  {
    icon: ShieldCheck,
    title: "Zero Approval",
    description: "No multisig. No delays. Just secure payments.",
    iconClass: "bg-success/10 text-success",
  },
  {
    icon: Sparkles,
    title: "AI Payment Agent",
    description: "Describe payments in natural language. VibeAI handles the rest.",
    iconClass: "bg-orange-100 text-orange-500",
  },
  {
    icon: Lock,
    title: "Enterprise Grade",
    description: "Bank-level security for Web3 teams.",
    iconClass: "bg-accent-blue/10 text-accent-blue",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-10 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-[20px] border border-border bg-card px-6 py-8 sm:px-10 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${feature.iconClass}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
