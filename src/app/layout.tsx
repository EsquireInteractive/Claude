import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EI Team Dashboard",
  description: "Esquire Interactive — Unified Team & Specialist Hub",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070d1a] text-slate-50 antialiased">{children}</body>
    </html>
  )
}
