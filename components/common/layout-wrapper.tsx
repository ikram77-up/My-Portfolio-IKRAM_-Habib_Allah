"use client"

import { Toaster } from "@/components/ui/toaster"
import { ModalProvider } from "@/providers/modal-provider"
import { usePathname } from "next/navigation" // Import usePathname
import { useEffect, useState } from "react"
import { Analytics } from "./analytics"
import LoadingScreen from "./loading-screen"
import ScrollToTop from "./scroll-to-top"
import { ThemeProvider } from "./theme-provider"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname() // Get current pathname

  useEffect(() => {
    setIsLoading(true) // Always show loading screen on route change
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [pathname]) // Depend on pathname

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={[
        "light",
        "dark",
        "retro",
        "cyberpunk",
        "paper",
        "aurora",
        "synthwave",
      ]}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {children}
          <Analytics />
          <Toaster />
          <ModalProvider />
          <ScrollToTop />
        </>
      )}
    </ThemeProvider>
  )
}
