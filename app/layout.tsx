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
    "Augment your team with top IT talent. As your trusted implementation partner, we embed seasoned consultants directly into your existing software teams—scaling your capacity, expertise, and delivery velocity. We do not sell or share personal information.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "metaintuit – AI-Driven IT Staffing & Software",
    description: "Augment your team with top IT talent. Trusted implementation partner for software teams.",
    url: "https://metaintuit.com",
    siteName: "metaintuit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "metaintuit – AI-Driven IT Staffing & Software",
    description: "Augment your team with top IT talent. Trusted implementation partner for software teams.",
  },
    generator: 'v0.app'
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MetaIntuit Corp",
  alternateName: "metaintuit",
  url: "https://metaintuit.com",
  logo: "https://metaintuit.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-469-998-6267",
    contactType: "customer service",
    email: "hr@metaintuit.com",
    areaServed: "US",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dover",
    addressRegion: "DE",
    postalCode: "19901",
    streetAddress: "8 The Green #12032",
    addressCountry: "US",
  },
  sameAs: ["https://metaintuit.com"],
  description:
    "AI-driven IT staffing and software development company that embeds seasoned consultants into existing software teams.",
  foundingDate: "2025",
  industry: "Information Technology",
  numberOfEmployees: "10-50",
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
