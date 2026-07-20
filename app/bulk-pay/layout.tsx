import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bulk Pay - VibeFlow',
  description: 'Send USDC to your entire team in one transaction. Premium batch payment app.',
}

export default function BulkPayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
