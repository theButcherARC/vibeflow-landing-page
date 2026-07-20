"use client"

import { Bell, Settings, HelpCircle, Menu } from "lucide-react"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Mobile menu + breadcrumb */}
        <div className="flex items-center gap-3">
          <button className="inline-flex sm:hidden">
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <span className="text-sm font-medium text-muted-foreground">Dashboard</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-secondary">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand" />
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-secondary">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-secondary">
            <Settings className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  )
}
