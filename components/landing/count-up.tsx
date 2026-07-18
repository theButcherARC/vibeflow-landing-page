"use client"

import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  /** Numeric target to animate to */
  value: number
  /** Rendered before the number, e.g. "$" */
  prefix?: string
  /** Rendered after the number, e.g. "M+", "K+", "s" */
  suffix?: string
  /** Decimal places to display */
  decimals?: number
  /** Duration in ms */
  duration?: number
  className?: string
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              // easeOutExpo for a snappy, premium feel
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
              setDisplay(value * eased)
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
