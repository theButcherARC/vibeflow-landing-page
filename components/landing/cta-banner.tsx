import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ROUTES } from "@/constants/routes"
import { Reveal } from "@/components/landing/reveal"

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 rounded-[20px] bg-lavender px-6 py-12 sm:px-12 md:flex-row md:justify-between md:gap-6">
          <div className="flex items-center gap-6">
            <div className="relative hidden h-28 w-28 shrink-0 sm:block">
              <Image
                src="/images/rocket.png"
                alt="Rocket launching"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The future of team payments is here.
              </h2>
              <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                Join thousands of teams already building on VibeFlow.
              </p>
            </div>
          </div>
          <Link
            href={ROUTES.BULK_PAY}
            className="inline-flex shrink-0 items-center gap-2 rounded-[14px] bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.02]"
          >
            Get Started Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
