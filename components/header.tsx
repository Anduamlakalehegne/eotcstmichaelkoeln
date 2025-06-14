"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, GraduationCap, Menu, X, Globe, Phone, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/contexts/locale-context"
import type { Locale } from "@/lib/localization"
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaYoutube } from "react-icons/fa6"

interface SubMenuItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ size?: number }>;
  submenu?: { name: string; href: string }[];
}

interface MenuItem {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

// Menu data structure
const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About us",
    href: "/about",
    submenu: [
      { name: "Our History", href: "/about/history" },
      { name: "Our Clergy", href: "/about/clergy" },
      { name: "Our Faith", href: "/about/faith" },
      { name: "Construction Status", href: "/about/construction-status" },
    ],
  },
  {
    name: "Service",
    href: "/service",
    submenu: [
      { name: "Kirstina", href: "/service/kirstina" },
      { name: "Sirate Kidase", href: "/service/sirate-kidase" },
      {
        name: "Sunday School",
        href: "/service/sunday-school",
        icon: GraduationCap,
        submenu: [
          { name: "Mezmur", href: "/service/mezmur" },
          { name: "Timihirt", href: "/service/timihirt" },
          { name: "ሕፃናት እና ታዳጊዎች", href: "/sunday-school/children" },
          { name: "Other Activities", href: "/service/sunday-school/other-activities" },
        ],
      },
      { name: "Tselote Fithat", href: "/service/tselote-fithat" },
      { name: "Mikir", href: "/service/mikir" },
      { name: "Timihirt & Tarikoch", href: "/service/timihirt-tarikoch" },
    ],
  },
  {
    name: "News & Events",
    href: "/news",
    submenu: [
      { name: "Upcoming Events", href: "/news/events" },
      { name: "Church News", href: "/news/church-news" },
      { name: "Calendar", href: "/news/calendar" },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
    submenu: [
      { name: "Photos", href: "/gallery/photos" },
      { name: "Videos", href: "/gallery/videos" },
      { name: "Archive", href: "/gallery/archive" },
    ],
  },
  {
    name: "Forms & Links",
    href: "/forms-links",
    submenu: [
      { name: "Bank Details", href: "/forms-links/bank-details" },
      {
        name: "Forms",
        href: "/forms-links/forms",
        submenu: [
          { name: "Membership Form", href: "/forms-links/forms/membership" },
          { name: "Kirstina Form", href: "/forms-links/forms/kirstina" },
        ],
      },
      {
        name: "Useful Links",
        href: "/forms-links/useful-links",
        submenu: [
          { name: "Churches in Germany", href: "/forms-links/useful-links/churches-germany" },
          { name: "Previous Website", href: "/forms-links/useful-links/previous-website" },
        ],
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    submenu: [
      { name: "Location", href: "/contact/location" },
      { name: "Contact Form", href: "/contact/form" },
    ],
  },
]

const languages = [
  { code: "en", name: "English" },
  { code: "am", name: "አማርኛ" },
  { code: "de", name: "Deutsch" },
]

export default function Header() {
  const { locale, setLocale, translations } = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  // Get the selected language display code
  const getLanguageDisplay = (localeCode: Locale) => {
    switch (localeCode) {
      case "en":
        return "EN"
      case "de":
        return "DE"
      default:
        return "am"
    }
  }

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  // Translate menu item name
  const translateMenuItem = (name: string) => {
    return translations.header.menuItems[name] || name
  }

  // Translate submenu item name
  const translateSubMenuItem = (name: string) => {
    return translations.header.subMenuItems[name] || name
  }

  // Translate church name
  const getChurchName = () => {
    switch (locale) {
      case "am":
        return {
          name: "ቅዱስ ሚካኤል ኢኦተቤ",
          location: "ጀርመን ኮሎኝ",
        }
      case "de":
        return {
          name: "St. Michael Äthiopisch-Orthodoxe",
          location: "Kirche in Köln",
        }
      default:
        return {
          name: "St. Michael Ethiopian Orthodox",
          location: "Church in Cologne",
        }
    }
  }

  // Add this useEffect after the other useEffect hooks
  useEffect(() => {
    if (!isLanguageOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".language-selector")) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isLanguageOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] ${isScrolled ? "shadow-sm" : ""}`}>
      {/* Top Bar */}
      <div className="bg-[#1e3a8a]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-9 text-white text-sm">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+4912345678" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                {/* <Phone size={14} />
                <span>+49 221 599 26 23</span> */}
              </a>
              <a href="/contact/location" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                {/* <MapPin size={14} />
                <span>{translations.header.findUs}</span> */}
              </a>
            </div>

            {/* Social Links & Language */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <Link
                  href="https://www.facebook.com/CologneKidusMichael"
                  className="hover:text-blue-200 transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={14} />
                </Link>
                <Link href="
                  https://www.youtube.com/@eotcstmichael"
                  className="hover:text-blue-200 transition-colors"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={14} />
                </Link>
                <Link
                  href="https://t.me/colognekidusmichael"
                  className="hover:text-blue-200 transition-colors"
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram size={14} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@colognekidusmicha"
                  className="hover:text-blue-200 transition-colors"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={14} />
                </Link>
                <Link
                  href="https://www.instagram.com/colognekidusmichael?igsh=MW9obnFibDNtbzgxaw=="
                  className="hover:text-blue-200 transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={14} />
                </Link>
              </div>

              {/* Language Selector */}
              <div className="relative language-selector">
                <button
                  className="flex items-center gap-1 hover:text-blue-200 transition-colors"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="listbox"
                >
                  <Globe size={14} />
                  <span>{getLanguageDisplay(locale as Locale)}</span>
                  <ChevronDown size={14} className={`transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
                </button>

                {isLanguageOpen && (
                  <div
                    className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-[101]"
                    role="listbox"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          locale === lang.code
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        } transition-colors`}
                        onClick={() => {
                          setLocale(lang.code as Locale)
                          setIsLanguageOpen(false)
                        }}
                        role="option"
                        aria-selected={locale === lang.code}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-red-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Church Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZJvBpl9au7XYXRex05eYQaUTZuZnPm.png"
                alt="Church Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="text-lg font-semibold leading-tight">{getChurchName().name}</h1>
                <h2 className="text-sm text-gray-600">{getChurchName().location}</h2>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <div key={item.name} className="nav-item">
                  {item.submenu ? (
                    <div className="dropdown">
                      <button
                        className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        {translateMenuItem(item.name)}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* First level dropdown */}
                      <div className="dropdown-menu">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name} className="dropdown-item">
                              {subItem.submenu ? (
                                <div className="submenu-dropdown">
                                  <div className="flex items-center justify-between">
                                    <Link
                                      href={subItem.href}
                                      className="flex-1 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    >
                                      <span className="flex items-center gap-2">
                                        {subItem.icon && <subItem.icon size={16} />}
                                        {translateSubMenuItem(subItem.name)}
                                      </span>
                                    </Link>
                                  <button
                                      className="px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    onClick={() =>
                                      setActiveSubmenu(activeSubmenu === subItem.name ? null : subItem.name)
                                    }
                                    aria-expanded={activeSubmenu === subItem.name}
                                    aria-haspopup="true"
                                  >
                                    <ChevronDown
                                      size={14}
                                      className={`transition-transform ${activeSubmenu === subItem.name ? "rotate-180" : ""}`}
                                    />
                                  </button>
                                  </div>

                                  {/* Second level dropdown */}
                                  <div className="submenu">
                                    <div className="py-1">
                                      {subItem.submenu.map((nestedItem) => (
                                        <Link
                                          key={nestedItem.name}
                                          href={nestedItem.href}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                          {translateSubMenuItem(nestedItem.name)}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  {translateSubMenuItem(subItem.name)}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      {translateMenuItem(item.name)}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/forms-links/bank-details"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {translations.header.donate}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[100px] left-0 right-0 bg-white shadow-lg overflow-auto max-h-[calc(100vh-100px)]"
          >
            <nav className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  {item.submenu ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        {translateMenuItem(item.name)}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 border-l-2 border-blue-100 ml-2 mb-3"
                          >
                            {item.submenu.map((subItem) => (
                              <div key={subItem.name}>
                                {subItem.submenu ? (
                                  <>
                                    <button
                                      className="flex items-center justify-between w-full py-2 text-sm text-gray-700 hover:text-blue-600"
                                      onClick={() =>
                                        setActiveSubmenu(activeSubmenu === subItem.name ? null : subItem.name)
                                      }
                                      aria-expanded={activeSubmenu === subItem.name}
                                    >
                                      <span className="flex items-center gap-2">
                                        {subItem.icon && <subItem.icon size={16} />}
                                        {translateSubMenuItem(subItem.name)}
                                      </span>
                                      <ChevronDown
                                        size={14}
                                        className={`transition-transform ${
                                          activeSubmenu === subItem.name ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                    <AnimatePresence>
                                      {activeSubmenu === subItem.name && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="pl-4 border-l-2 border-blue-100 ml-2"
                                        >
                                          {subItem.submenu.map((nestedItem) => (
                                            <Link
                                              key={nestedItem.name}
                                              href={nestedItem.href}
                                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {translateSubMenuItem(nestedItem.name)}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {translateSubMenuItem(subItem.name)}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-700 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {translateMenuItem(item.name)}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/donate"
                className="block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.header.donate}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for dropdown menus */}
      <style jsx>{`
        /* Base styles for nav items */
        .nav-item {
          position: relative;
        }

        /* First level dropdown */
        .dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          left: 0;
          top: 100%;
          width: 14rem;
          background-color: white;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
          z-index: 101;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }

        /* Second level dropdown */
        .dropdown-item {
          position: relative;
        }

        .submenu-dropdown {
          position: relative;
        }

        .submenu {
          position: absolute;
          left: 100%;
          top: 0;
          width: 14rem;
          background-color: white;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
          z-index: 102;
        }

        .submenu-dropdown:hover .submenu {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </header>
  )
}
