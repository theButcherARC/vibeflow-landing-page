import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ROUTES } from "@/constants/routes"
import { Reveal } from "@/components/landing/reveal"
import { PaymentFlow } from "@/components/landing/payment-flow"

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[24px] border border-border bg-card px-6 py-12 sm:px-12 md:grid-cols-2 md:gap-6">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Live on Arc
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-[2.5rem] sm:leading-[1.1]">
              The future of team payments is here.
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
              Pay your whole team in a single transaction. Join thousands of teams already building on VibeFlow.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ROUTES.BULK_PAY}
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:scale-[1.02]"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={ROUTES.HOW_IT_WORKS}
                className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-150 hover:scale-[1.02]"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="relative h-56 w-full sm:h-64">
            <PaymentFlow />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
