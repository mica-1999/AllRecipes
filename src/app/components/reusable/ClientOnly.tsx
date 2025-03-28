"use client"

import { useEffect, useState, ReactNode } from "react"

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * Component that renders children only on the client side
 * Used to prevent hydration errors when components rely on browser APIs
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}