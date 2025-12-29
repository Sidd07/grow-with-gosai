"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Instagram } from "lucide-react"

export function Navbar() {
    const { data: session } = useSession()
    const pathname = usePathname()
    const [scrolled, setScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Lock scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    // Luxury Text Logic:
    // Always dark text in light mode (default), white in dark mode.
    // Exception: If on Home Page AND NOT scrolled, use White (for Hero overlay).
    // Exception: If on Home Page or Commercial Sales or Investment Advisory or Residential Sales or Exclusive Listing or Leasing AND NOT scrolled, use White (for Hero overlay).
    const isHome = pathname === "/"
    const isServicePage = pathname?.startsWith("/services/")
    const isTransparent = (isHome || isServicePage) && !scrolled

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-sm"
                        : "bg-transparent py-0"
                )}
            >
                {/* Top Bar - Only visible when not scrolled or minimal when scrolled, hidden on mobile menu open */}
                <div className={cn(
                    "border-b border-white/10 transition-all duration-500 overflow-hidden",
                    scrolled || isMobileMenuOpen ? "h-0 opacity-0" : "h-11 opacity-100"
                )}>
                    <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between text-[8px] md:text-[12px] uppercase tracking-[0.2em] font-semibold">
                        {/* Desktop Only: Office Location */}
                        <div className={cn(
                            "hidden md:flex items-center gap-6 transition-colors duration-300",
                            isTransparent ? "text-white/70" : "text-[var(--foreground)]/60"
                        )}>
                            <div className="flex items-center gap-2">
                                <MapPin size={12} className="text-[var(--accent)]" />
                                <span className="hidden lg:inline">73 Water St N Unit # 300, Cambridge, ON</span>
                                <span className="lg:hidden">Cambridge, ON</span>
                            </div>
                        </div>

                        {/* Mobile & Desktop: Contact Info */}
                        <div className={cn(
                            "flex items-center gap-4 md:gap-8 transition-colors duration-300 w-full md:w-auto",
                            isTransparent ? "text-white/70" : "text-[var(--foreground)]/60"
                        )}>
                            <a href="tel:6476758404" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                <Phone size={12} className="text-[var(--accent)]" />
                                <span>(647) 675-8404</span>
                            </a>
                            <a href="mailto:meet@growwithgosai.com" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                <Mail size={12} className="text-[var(--accent)]" />
                                <span>meet@growwithgosai.com</span>
                            </a>
                            <a href="https://www.instagram.com/GrowwithGosai/" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                <Instagram size={12} className="text-[var(--accent)]" />
                                <span>@GrowwithGosai</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cn(
                    "container mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500",
                    !scrolled ? "py-8" : "py-0"
                )}>
                    {/* Brand */}
                    <Link href="/" className="relative z-50 group">
                        <span className={cn(
                            "text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors duration-300",
                            isTransparent && !isMobileMenuOpen ? "text-white" : "text-[var(--foreground)]"
                        )}>
                            Growwith<span className="text-[var(--accent)]">Gosai</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/about" },
                            { name: "Services", href: "/services", hasDropdown: true },
                            { name: "Media", href: "/media" },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-[var(--accent)]",
                                        isTransparent ? "text-white/90" : "text-[var(--foreground)]/80"
                                    )}
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown size={10} className="inline-block ml-1 -mt-0.5 opacity-50" />}
                                </Link>

                                {/* Dropdown */}
                                {item.hasDropdown && (
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                                                animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                                                exit={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                                            >
                                                <div className="bg-[var(--card)] border border-[var(--border)] shadow-2xl rounded-sm p-2 min-w-[240px]">
                                                    {[
                                                        { name: "Investment Advisory", href: "/services/investment-advisory" },
                                                        { name: "Commercial Sales", href: "/services/commercial-sales" },
                                                        { name: "Residential Sales", href: "/services/residential-sales" },
                                                        { name: "Exclusive Listing", href: "/services/exclusive-listing" },
                                                        { name: "Commercial & Residential Leasing", href: "/services/leasing" }
                                                    ].map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-xs uppercase tracking-wider text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}

                        <div className="w-px h-6 bg-[var(--border)] mx-2" />

                        {session ? (
                            <div className="flex items-center gap-4">
                                <span className={cn(
                                    "text-xs font-medium tracking-wide",
                                    isTransparent ? "text-white" : "text-[var(--foreground)]"
                                )}>
                                    {session.user?.name}
                                </span>
                                <Button
                                    onClick={() => signOut()}
                                    variant="ghost"
                                    className={cn(
                                        "text-xs uppercase tracking-wider hover:bg-transparent hover:text-[var(--accent)] px-0",
                                        isTransparent ? "text-white/80" : "text-[var(--foreground)]/60"
                                    )}
                                >
                                    Log out
                                </Button>
                            </div>
                        ) : (
                            <Link href="/contact">
                                <Button
                                    className={cn(
                                        "rounded-none px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300",
                                        isTransparent
                                            ? "bg-white text-black hover:bg-[var(--primary)] hover:text-white border-transparent"
                                            : "bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--primary)] hover:text-[var(--foreground)]"
                                    )}
                                >
                                    Contact
                                </Button>
                            </Link>
                        )}

                        <ThemeToggle className={isTransparent ? "text-white border-white/20 hover:bg-white/10" : ""} />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden z-50 transition-colors text-[var(--foreground)]",
                            isTransparent && !isMobileMenuOpen ? "text-white" : "text-[var(--foreground)]"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Outside motion.nav to avoid transform issues */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[var(--background)] z-[100] flex flex-col md:hidden"
                    >
                        {/* Replicate Header bar in Overlay */}
                        <div className="flex items-center justify-between px-6 py-8 border-b border-[var(--border)]/10">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="text-2xl font-serif font-bold tracking-tighter text-[var(--foreground)]">
                                    Growwith<span className="text-[var(--accent)]">Gosai</span>
                                </span>
                            </Link>
                            <button
                                className="text-[var(--foreground)]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-10">
                            {["Home", "About Us", "Services", "Media", "Contact"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={
                                            item === "Home" ? "/" :
                                                item === "About Us" ? "/about" :
                                                    `/${item.toLowerCase().replace(" ", "-")}`
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-serif font-light text-[var(--foreground)] hover:text-[var(--primary)] transition-colors tracking-wide"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>

    )
}
