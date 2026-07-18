import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ROUTES } from "@/constants/routes"
import { Reveal } from "@/components/landing/reveal"

export function CtaBanner() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-[20px] bg-primary px-6 py-16 text-center sm:px-10">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Pay your whole team in one transaction
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Launch VibeFlow and send your first batch of USDC or EURC in minutes. No approvals, no code.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={ROUTES.BULK_PAY}
              className="inline-flex items-center gap-2 rounded-[14px] bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-150 hover:scale-[1.02]"
            >
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
