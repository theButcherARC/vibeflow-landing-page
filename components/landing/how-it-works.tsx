import { Users, CircleDollarSign, Send } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const STEPS = [
  {
    number: 1,
    icon: Users,
    title: "Add Recipients",
    description: "Upload a CSV or use VibeID, X handle, or wallet addresses.",
    iconClass: "bg-brand/10 text-brand",
  },
  {
    number: 2,
    icon: CircleDollarSign,
    title: "Set Amounts",
    description: "Enter amounts or let VibeAI calculate for you.",
    iconClass: "bg-success/10 text-success",
  },
  {
    number: 3,
    icon: Send,
    title: "Send Instantly",
    description: "One click. Sub-second settlement. Done.",
    iconClass: "bg-orange-100 text-orange-500",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">How It Works</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pay your entire team in 3 simple steps
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="relative flex flex-col items-center text-center">
                {index < STEPS.length - 1 ? (
                  <span
                    className="absolute left-[calc(50%+2.5rem)] right-[-50%] top-8 hidden border-t border-dashed border-border md:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.iconClass}`}>
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                </div>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
