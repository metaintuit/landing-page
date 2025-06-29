import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "600"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["700", "900"],
})

export const metadata: Metadata = {
  title: "metaintuit – AI-Driven IT Staffing & Software",
  description:
    "Augment your team with top IT talent. As your trusted implementation partner, we embed seasoned consultants directly into your existing software teams—scaling your capacity, expertise, and delivery velocity.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
