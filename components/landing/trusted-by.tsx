import { Reveal } from "@/components/landing/reveal"

const LOGOS = ["ARC", "Circle", "USDC", "EURC", "Multicall3"]

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-background px-4 py-10 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Built on infrastructure you trust
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((logo) => (
            <span key={logo} className="text-lg font-semibold tracking-tight text-muted-foreground/70">
              {logo}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
