"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface QuoteModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  open: false,
  setOpen: () => {},
})

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <QuoteModalContext.Provider value={{ open, setOpen }}>
      {children}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  return useContext(QuoteModalContext)
}
