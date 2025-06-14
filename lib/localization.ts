// Define the structure for our translations
export type Locale = "en" | "am" | "de"

// Define the structure for our translations
export interface Translations {
  header: {
    menuItems: {
      [key: string]: string
    }
    subMenuItems: {
      [key: string]: string
    }
    donate: string
    findUs: string
  }
  footer: {
    call: string
    email: string
    address: string
    resources: string
    usefulLink: string
    contactUs: string
    copyright: string
    footerLinks: {
      [key: string]: string
    }
  }
}

// English translations
export const enTranslations: Translations = {
  header: {
    menuItems: {
      Home: "Home",
      "About us": "About us",
      Service: "Service",
      "News & Events": "News & Events",
      Gallery: "Gallery",
      "Forms & Links": "Forms & Links",
      Contact: "Contact",
    },
    subMenuItems: {
      "Our History": "Our History",
      "Our Clergy": "Our Clergy",
      "Our Faith": "Our Faith",
      "Construction Status": "Construction Status",
      Kirstina: "Kirstina",
      "Sirate Kidase": "Sirate Kidase",
      "Sunday School": "Sunday School",
      Mezmur: "Mezmur",
      Timihirt: "Timihirt",
      "ሕፃናት እና ታዳጊዎች": "Children & Youth",
      "Other Activities": "Other Activities",
      "Tselote Fithat": "Tselote Fithat",
      Mikir: "Mikir",
      "Timihirt & Tarikoch": "Timihirt & Tarikoch",
      "Upcoming Events": "Upcoming Events",
      "Church News": "Church News",
      Calendar: "Calendar",
      Photos: "Photos",
      Videos: "Videos",
      Archive: "Archive",
      "Bank Details": "Bank Details",
      Forms: "Forms",
      "Membership Form": "Membership Form",
      "Kirstina Form": "Kirstina Form",
      "Useful Links": "Useful Links",
      "Churches in Germany": "Churches in Germany",
      "Previous Website": "Previous Website",
      Location: "Location",
      "Contact Form": "Contact Form",
    },
    donate: "Donate",
    findUs: "Find Us",
  },
  footer: {
    call: "Call",
    email: "Email",
    address: "Address",
    resources: "Resources",
    usefulLink: "Useful Links",
    contactUs: "Contact Us",
    copyright: "Copyright © 2025 - All rights reserved. Powered by Marefiyatech",
    footerLinks: {
      "ሰንበት ትምህርት ቤት": "Sunday School",
      "በጀርመን ያሉ አብያተ ክርስቲያናት": "Churches in Germany",
      "የቀን መቁጠሪያ": "Calendar",
      "ሕፃናት እና ታዳጊዎች": "Children & Youth",
      "ለመለገስ": "Donate"
    }
  },
}

// Amharic translations
export const amTranslations: Translations = {
  header: {
    menuItems: {
      Home: "ቀዳሚ ገጽ",
      "About us": "ስለ እኛ",
      Service: "አገልግሎት",
      "News & Events": "ዜናዎች እና ዝግጅቶች",
      Gallery: "ማዕከለ ሥዕሎች",
      "Forms & Links": "ቅጾች እና አገናኞች",
      Contact: "አድራሻ",
    },
    subMenuItems: {
      "Our History": "የቤተክርስቲያን ታሪክ",
      "Our Clergy": "የቤተክርስቲያን ካህናት",
      "Our Faith": "እምነታችን",
      "Construction Status": "የቤተ ክርስቲያን አሁናዊ ይዞታ",
      Kirstina: "ክርስትና",
      "Sirate Kidase": "ሥርዓተ ቅዳሴ",
      "Sunday School": "የሰንበት ትምህርት ቤት",
      Mezmur: "መዝሙር",
      Timihirt: "ትምህርት",
      "ሕፃናት እና ታዳጊዎች": "ሕፃናት እና ታዳጊዎች",
      "Other Activities": "ሌሎች እንቅስቃሴዎች",
      "Tselote Fithat": "ጸሎተ ፍትሐት",
      Mikir: "ምክር",
      "Timihirt & Tarikoch": "ትምህርት እና ታሪኮች",
      "Upcoming Events": "መጪ ዝግጅቶች",
      "Church News": "የቤተክርስቲያን ዜናዎች",
      Calendar: "የቀን መቁጠሪያ",
      Photos: "ፎቶዎች",
      Videos: "ቪዲዮዎች",
      Archive: "የድሮ ሰነዶች",
      "Bank Details": "የባንክ ዝርዝሮች",
      Forms: "ቅጾች",
      "Membership Form": "የአባልነት ቅጽ",
      "Kirstina Form": "የክርስትና ቅጽ",
      "Useful Links": "ጠቃሚ አገናኞች",
      "Churches in Germany": "በጀርመን ያሉ አብያተ ክርስቲያናት",
      "Previous Website": "የቀድሞ ድረ ገጽ",
      Location: "አድራሻ",
      "Contact Form": "የመገናኛ ቅጽ",
    },
    donate: "ለመለገስ",
    findUs: "አድራሻችን",
  },
  footer: {
    call: "ስልክ",
    email: "ኢሜይል",
    address: "አድራሻ",
    resources: "ሀብቶች",
    usefulLink: "ጠቃሚ አገናኞች",
    contactUs: "ያግኙን",
    copyright: "© ኮሎኝ ኢኦተቤ ቅዱስ ሚካኤል 2025 - መብቱ በህግ የተጠበቀ ነው። በማረፊያቴክ የተዘጋጀ",
    footerLinks: {
      "ሰንበት ትምህርት ቤት": "ሰንበት ትምህርት ቤት",
      "በጀርመን ያሉ አብያተ ክርስቲያናት": "በጀርመን ያሉ አብያተ ክርስቲያናት",
      "የቀን መቁጠሪያ": "የቀን መቁጠሪያ",
      "ሕፃናት እና ታዳጊዎች": "ሕፃናት እና ታዳጊዎች",
      "ለመለገስ": "ለመለገስ"
    }
  },
}

// German translations (basic structure, can be expanded later)
export const deTranslations: Translations = {
  header: {
    menuItems: {
      Home: "Startseite",
      "About us": "Über uns",
      Service: "Dienst",
      "News & Events": "Nachrichten & Veranstaltungen",
      Gallery: "Galerie",
      "Forms & Links": "Formulare & Links",
      Contact: "Kontakt",
    },
    subMenuItems: {
      "Our History": "Unsere Geschichte",
      "Our Clergy": "Unsere Geistlichen",
      "Our Faith": "Unser Glaube",
      "Construction Status": "Baustatus",
      Kirstina: "Kirstina",
      "Sirate Kidase": "Sirate Kidase",
      "Sunday School": "Sonntagsschule",
      Mezmur: "Mezmur",
      Timihirt: "Timihirt",
      "ሕፃናት እና ታዳጊዎች": "Kinder & Jugend",
      "Other Activities": "Andere Aktivitäten",
      "Tselote Fithat": "Tselote Fithat",
      Mikir: "Mikir",
      "Timihirt & Tarikoch": "Timihirt & Tarikoch",
      "Upcoming Events": "Kommende Veranstaltungen",
      "Church News": "Kirchennachrichten",
      Calendar: "Kalender",
      Photos: "Fotos",
      Videos: "Videos",
      Archive: "Archiv",
      "Bank Details": "Bankverbindung",
      Forms: "Formulare",
      "Membership Form": "Mitgliedsformular",
      "Kirstina Form": "Kirstina Formular",
      "Useful Links": "Nützliche Links",
      "Churches in Germany": "Kirchen in Deutschland",
      "Previous Website": "Vorherige Website",
      Location: "Standort",
      "Contact Form": "Kontaktformular",
    },
    donate: "Spenden",
    findUs: "Finden Sie uns",
  },
  footer: {
    call: "Anrufen",
    email: "E-Mail",
    address: "Adresse",
    resources: "Ressourcen",
    usefulLink: "Nützliche Links",
    contactUs: "Kontaktieren Sie uns",
    copyright: "Copyright © 2025 - Alle Rechte vorbehalten. Entwickelt von Marefiyatech",
    footerLinks: {
      "ሰንበት ትምህርት ቤት": "Sonntagsschule",
      "በጀርመን ያሉ አብያተ ክርስቲያናት": "Kirchen in Deutschland",
      "የቀን መቁጠሪያ": "Kalender",
      "ሕፃናት እና ታዳጊዎች": "Kinder & Jugend",
      "ለመለገስ": "Spenden"
    }
  },
}

// Map of all translations
export const translations: Record<Locale, Translations> = {
  en: enTranslations,
  am: amTranslations,
  de: deTranslations,
}

// Helper function to get translations
export function getTranslation(locale: Locale): Translations {
  return translations[locale] || enTranslations
}
