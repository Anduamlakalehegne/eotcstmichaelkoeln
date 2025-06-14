"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, getTranslation, type Translations } from "@/lib/localization"

interface LocaleContextType {
  locale: Locale
  translations: Translations
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("am")
  const [translations, setTranslations] = useState<Translations>(getTranslation("am"))

  // Update translations when locale changes
  useEffect(() => {
    setTranslations(getTranslation(locale))

    // Save locale preference to localStorage
    localStorage.setItem("preferredLocale", locale)

    // Optional: Update HTML lang attribute
    document.documentElement.lang = locale
  }, [locale])

  // Load saved locale on initial render
  useEffect(() => {
    const savedLocale = localStorage.getItem("preferredLocale") as Locale | null
    if (savedLocale && ["en", "am", "de"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  return <LocaleContext.Provider value={{ locale, translations, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
