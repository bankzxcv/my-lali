import "./globals.css"

import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next"
import NavBar from "@/components/NavBar"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "My Lali App",
  description: "This application is a Lali app. that is used to do chock in and out for work.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
