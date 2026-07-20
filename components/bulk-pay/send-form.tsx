"use client"

import { useState } from "react"
import { Upload, Plus, Trash2, Send } from "lucide-react"

const FORM_STEPS = [
  { number: 1, label: "Add Recipients", active: true },
  { number: 2, label: "Set Amounts", active: false },
  { number: 3, label: "Review & Send", active: false },
]

export function SendForm() {
  const [recipients, setRecipients] = useState([
    { id: 1, address: "0x1234...5678", amount: "" },
    { id: 2, address: "0x8765...4321", amount: "" },
  ])

  const addRecipient = () => {
    setRecipients([...recipients, { id: Date.now(), address: "", amount: "" }])
  }

  const removeRecipient = (id: number) => {
    setRecipients(recipients.filter((r) => r.id !== id))
  }

  return (
    <div className="rounded-[16px] border border-border bg-card">
      <div className="border-b border-border px-6 py-6">
        <h2 className="text-2xl font-bold text-foreground">Send USDC</h2>
        <p className="mt-1 text-sm text-muted-foreground">Pay your entire team in one transaction</p>

        {/* Steps indicator */}
        <div className="mt-6 flex gap-4">
          {FORM_STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  step.active
                    ? "bg-brand text-white"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step.number}
              </div>
              <span className="text-sm font-medium text-foreground">{step.label}</span>
              {i < FORM_STEPS.length - 1 && (
                <div className="ml-4 h-px w-12 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Upload CSV section */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-foreground">Upload CSV or Add Recipients</label>
          <div className="mt-3 rounded-lg border-2 border-dashed border-border bg-secondary/30 p-6 text-center transition-colors hover:border-brand/50">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium text-foreground">Drag and drop CSV here</p>
            <p className="text-xs text-muted-foreground">or click to browse</p>
          </div>
        </div>

        {/* Recipients table */}
        <div className="mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                    Recipient Address
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                    Amount (USDC)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recipients.map((recipient) => (
                  <tr key={recipient.id} className="hover:bg-secondary/50">
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        placeholder="0x..."
                        defaultValue={recipient.address}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-brand focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        placeholder="0.00"
                        defaultValue={recipient.amount}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-brand focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => removeRecipient(recipient.id)}
                        className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={addRecipient}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Plus className="h-4 w-4" />
            Add Recipient
          </button>
        </div>

        {/* Total summary */}
        <div className="mb-8 rounded-lg bg-secondary/50 p-4">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Total Amount:</span>
            <span className="text-base font-bold text-foreground">$3,450.00</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-sm text-muted-foreground">Recipients:</span>
            <span className="text-base font-bold text-foreground">{recipients.length}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
            Save as Template
          </button>
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg">
            <Send className="h-4 w-4" />
            Review & Send
          </button>
        </div>
      </div>
    </div>
  )
}
