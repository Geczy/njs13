import "styles/globals.css"

import { Toaster } from "@/components/ui/toast"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-white text-slate-900 antialiased">
      <head />
      <body className="min-h-screen">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
