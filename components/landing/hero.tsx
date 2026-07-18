import Link from "next/link"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { ROUTES } from "@/constants/routes"

const RECIPIENTS = [
  { name: "Alex Rivera", handle: "alex.arc", amount: "2,500.00", token: "USDC" },
  { name: "Priya Shah", handle: "priya.arc", amount: "1,800.00", token: "USDC" },
  { name: "Tom Becker", handle: "tom.arc", amount: "3,200.00", token: "EURC" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="max-w-xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span className="text-xs font-medium text-muted-foreground">Powered by Arc Blockchain</span>
          </div>

          <h1 className="animate-fade-up delay-100 mt-6 text-pretty text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Batch USDC Payments.
            <br />
            <span className="text-accent-blue">Instantly. Effortlessly.</span>
          </h1>

          <p className="animate-fade-up delay-100 mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Send USDC or EURC to your entire team in one transaction. AI-powered, zero approval, settled in under a
            second on Arc.
          </p>

          <div className="animate-fade-up delay-180 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ROUTES.BULK_PAY}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:scale-[1.02]"
            >
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={ROUTES.HOW_IT_WORKS}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-150 hover:scale-[1.02]"
            >
              See How It Works
            </Link>
          </div>

          <div className="animate-fade-up delay-260 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Zero approval needed", "AI-powered parsing", "Sub-second finality"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-success" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right column - dashboard preview card */}
        <div className="animate-fade-up delay-180">
          <div className="rounded-[20px] border border-border bg-card p-2 shadow-[0_1px_2px_rgba(17,17,17,0.04),0_12px_40px_-12px_rgba(17,17,17,0.12)]">
            <div className="rounded-[16px] border border-border bg-background">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Batch Payment</p>
                  <p className="text-xs text-muted-foreground">July Salary</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                  <Sparkles className="h-3 w-3" />
                  AI parsed
                </span>
              </div>

              {/* Recipients */}
              <div className="divide-y divide-border">
                {RECIPIENTS.map((r) => (
                  <div key={r.handle} className="flex items-center justify-between px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground">
                        {r.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.handle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">{r.amount}</p>
                      <p className="text-xs text-muted-foreground">{r.token}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between border-t border-border px-5 py-4">
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="text-lg font-bold text-foreground">7,500.00</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-[14px] bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                  Send batch
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Status strip */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Settled in 0.8s
              </span>
              <span className="text-xs text-muted-foreground">3 recipients | 1 transaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
