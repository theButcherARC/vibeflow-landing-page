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
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 70}>
            <div className="group h-full rounded-[20px] border border-border bg-card p-6 shadow-[0_1px_2px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_1px_2px_rgba(17,17,17,0.04),0_20px_40px_-24px_rgba(17,17,17,0.25)]">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${feature.iconClass} transition-transform duration-200 group-hover:scale-110`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold tracking-tight text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
