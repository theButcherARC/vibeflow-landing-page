"use client"

import { Users, ChevronRight, Download, Filter } from "lucide-react"

const TRANSACTIONS = [
  {
    id: 1,
    recipients: "Design Team",
    amount: 250.0,
    count: 5,
    status: "Completed",
    time: "2 min ago",
    txHash: "0x1234...5678",
  },
  {
    id: 2,
    recipients: "Marketing Wallets",
    amount: 1200.0,
    count: 12,
    status: "Completed",
    time: "15 min ago",
    txHash: "0x8765...4321",
  },
  {
    id: 3,
    recipients: "Community Rewards",
    amount: 500.0,
    count: 8,
    status: "Completed",
    time: "1 hour ago",
    txHash: "0xabcd...ef01",
  },
  {
    id: 4,
    recipients: "Partners",
    amount: 2000.0,
    count: 4,
    status: "Completed",
    time: "3 hours ago",
    txHash: "0x2468...1357",
  },
  {
    id: 5,
    recipients: "Airdrop Winners",
    amount: 3000.0,
    count: 25,
    status: "Completed",
    time: "5 hours ago",
    txHash: "0x9753...8642",
  },
]

export function RecentTransactions() {
  return (
    <div className="rounded-[16px] border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="text-base font-semibold text-foreground">Recent Transactions</h3>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {TRANSACTIONS.map((tx) => (
          <button
            key={tx.id}
            className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-secondary/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                <Users className="h-5 w-5 text-brand" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{tx.recipients}</p>
                <p className="text-xs text-muted-foreground">{tx.count} recipients • {tx.txHash}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">${tx.amount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  {tx.status}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-border px-6 py-3">
        <button className="text-sm font-semibold text-brand transition-colors hover:text-brand/80">
          View all transactions →
        </button>
      </div>
    </div>
  )
}
