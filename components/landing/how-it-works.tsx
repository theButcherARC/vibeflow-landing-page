import { Reveal } from "@/components/landing/reveal"

const STEPS = [
  {
    number: "01",
    title: "Describe or upload",
    description: "Type your payout in plain English or upload a CSV. VibeAI parses recipients, amounts, and tokens.",
  },
  {
    number: "02",
    title: "Review the batch",
    description: "Check the auto-filled recipient list, add an onchain memo label, and confirm the total.",
  },
  {
    number: "03",
    title: "Send in one transaction",
    description: "Sign once. Every recipient is paid in a single batch, settled in under a second on Arc.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-background px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From intent to settled in three steps
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            No approvals, no spreadsheets to reconcile, no waiting. Just describe, review, and send.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-sm font-bold text-foreground">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
