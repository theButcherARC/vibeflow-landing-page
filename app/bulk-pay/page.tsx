import { AppSidebar } from "@/components/bulk-pay/app-sidebar"
import { AppHeader } from "@/components/bulk-pay/app-header"
import { DashboardStats } from "@/components/bulk-pay/dashboard-stats"
import { RecentTransactions } from "@/components/bulk-pay/recent-transactions"
import { SendForm } from "@/components/bulk-pay/send-form"

export default function BulkPayDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <AppHeader />

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-8">
            {/* Page title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="mt-1 text-muted-foreground">Welcome back! Here's your payment activity.</p>
            </div>

            {/* Stats grid */}
            <div className="mb-8">
              <DashboardStats />
            </div>

            {/* Main content grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left column - Send form */}
              <div className="lg:col-span-2">
                <SendForm />
              </div>

              {/* Right column - Quick actions */}
              <div className="space-y-4">
                <div className="rounded-[16px] border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">Quick Actions</h3>
                  <div className="mt-4 space-y-2">
                    <button className="w-full rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand/20">
                      Use Previous Template
                    </button>
                    <button className="w-full rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                      Import Recipients
                    </button>
                    <button className="w-full rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                      View API Docs
                    </button>
                  </div>
                </div>

                {/* Upcoming features */}
                <div className="rounded-[16px] border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">Useful Links</h3>
                  <div className="mt-4 space-y-2">
                    <a href="#" className="block text-sm text-brand transition-colors hover:text-brand/80">
                      → Payment History
                    </a>
                    <a href="#" className="block text-sm text-brand transition-colors hover:text-brand/80">
                      → Recipients List
                    </a>
                    <a href="#" className="block text-sm text-brand transition-colors hover:text-brand/80">
                      → API Integration
                    </a>
                    <a href="#" className="block text-sm text-brand transition-colors hover:text-brand/80">
                      → Support
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent transactions section */}
            <div className="mt-8">
              <RecentTransactions />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
