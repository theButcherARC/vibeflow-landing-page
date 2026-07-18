"use client"

/**
 * A bespoke, premium animated visual of a single batch payment
 * fanning out to many recipients. Built with native SVG + SMIL
 * animateMotion so coins travel precisely along each path.
 */

const RECIPIENTS = [
  { y: 34, delay: "0s", tint: "var(--brand)" },
  { y: 88, delay: "0.5s", tint: "var(--accent-blue)" },
  { y: 142, delay: "1s", tint: "var(--success)" },
  { y: 196, delay: "1.5s", tint: "#f97316" },
]

// Curved path from the sender node (66,115) to each recipient (312,y)
function pathFor(y: number) {
  return `M66,115 C160,115 200,${y} 312,${y}`
}

export function PaymentFlow() {
  return (
    <svg
      viewBox="0 0 380 230"
      className="h-full w-full"
      role="img"
      aria-label="One transaction paying an entire team at once"
    >
      {/* connector paths */}
      {RECIPIENTS.map((r, i) => (
        <path
          key={`line-${i}`}
          d={pathFor(r.y)}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
      ))}

      {/* traveling coins */}
      {RECIPIENTS.map((r, i) => (
        <g key={`coin-${i}`}>
          <circle r="6" fill={r.tint}>
            <animateMotion dur="2.5s" repeatCount="indefinite" begin={r.delay} path={pathFor(r.y)} />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.88;1"
              dur="2.5s"
              repeatCount="indefinite"
              begin={r.delay}
            />
          </circle>
        </g>
      ))}

      {/* recipient nodes */}
      {RECIPIENTS.map((r, i) => (
        <g key={`node-${i}`}>
          <circle cx="312" cy={r.y} r="15" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="312" cy={r.y} r="7" fill={r.tint} opacity="0.9" />
        </g>
      ))}

      {/* sender node with pulse */}
      <g>
        <circle cx="66" cy="115" r="24" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="66" cy="115" r="24" fill="none" stroke="var(--brand)" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" values="24;40" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="66" cy="115" r="16" fill="var(--brand)" />
        <text
          x="66"
          y="115"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="10"
          fontWeight="700"
          fill="#ffffff"
          fontFamily="var(--font-sans)"
        >
          You
        </text>
      </g>
    </svg>
  )
}
