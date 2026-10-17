import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bulk Pay - VibeFlow',
  description: 'Send USDC to your entire team in one transaction. Premium batch payment app.',
  // The app dashboard holds demo content — keep it out of search results
  // so only the landing page competes for rankings.
  robots: {
    index: false,
    follow: false,
  },
}

export default function BulkPayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
