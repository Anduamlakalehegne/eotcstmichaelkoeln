import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/contexts/locale-context"
import { AuthProvider } from "@/contexts/auth-context"
import Header from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import Footer from "@/components/footer"
import { checkRequiredEnvVars } from "@/lib/env-check"

// Run environment variable check during build
if (process.env.NODE_ENV === "development") {
  checkRequiredEnvVars()
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethiopian Orthodox Tewahedo Church",
  description: "Official website of the Ethiopian Orthodox Tewahedo Church",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <LocaleProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                
                <ScrollToTop />
              </div>
            </LocaleProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
