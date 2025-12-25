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
import { Menu, X, ChevronDown } from "lucide-react"

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

    // Luxury Text Logic:
    // Always dark text in light mode (default), white in dark mode.
    // Exception: If on Home Page AND NOT scrolled, use White (for Hero overlay).
    const isHome = pathname === "/"
    const isTransparent = isHome && !scrolled

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/5 backdrop-blur-md border-b border-white/10 py-4 shadow-sm"
                    : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="relative z-50 group">
                    <span className={cn(
                        "text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors duration-300",
                        isTransparent ? "text-white" : "text-[var(--foreground)]"
                    )}>
                        Growwith<span className="text-[var(--accent)]">Gosai</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Services", href: "/services", hasDropdown: true },
                        { name: "Exclusive Listings", href: "/exclusive-listings" },
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
                                            <div className="bg-[var(--card)] border border-[var(--border)] shadow-2xl rounded-sm p-2 min-w-[200px]">
                                                {["Commercial Sales", "Leasing", "Investment Advisory"].map((subItem) => (
                                                    <Link
                                                        key={subItem}
                                                        href={`/services/${subItem.toLowerCase().replace(" ", "-")}`}
                                                        className="block px-4 py-3 text-xs uppercase tracking-wider text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                                                    >
                                                        {subItem}
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
                        "md:hidden z-50 transition-colors",
                        isTransparent && !isMobileMenuOpen ? "text-white" : "text-[var(--foreground)]"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[var(--background)] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {["Home", "About", "Services", "Exclusive Listings", "Media", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif font-light text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
