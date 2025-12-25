"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import axios from "axios"

export function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    useEffect(() => {
        // Check if user has already seen or subscribed
        const hasSeen = localStorage.getItem("newsletter_seen")
        if (hasSeen) return

        // Show popup after 30 seconds
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 30000)

        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        localStorage.setItem("newsletter_seen", "true")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`, { email })
            setStatus("success")
            setTimeout(() => {
                handleClose()
            }, 2000)
        } catch (error) {
            console.error("Subscription failed:", error)
            setStatus("error")
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[var(--card)] border border-[var(--border)] shadow-2xl p-8 md:p-10 overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-[var(--foreground)]/50 hover:text-[var(--foreground)] transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Exclusive Access</h3>
                            <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                                Be the first to know about our most prestigious off-market listings.
                            </p>
                        </div>

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-4"
                            >
                                <p className="text-green-500 font-medium">Welcome to the inner circle.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-12 px-4 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all placeholder:text-[var(--foreground)]/30"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full h-12 text-xs uppercase tracking-widest font-bold bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--primary)] hover:text-white transition-all"
                                >
                                    {status === "loading" ? "Joining..." : "Get Updates"}
                                </Button>
                                {status === "error" && (
                                    <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}

                        <p className="mt-6 text-[10px] text-center text-[var(--foreground)]/40 uppercase tracking-wider">
                            No spam. Unsubscribe anytime.
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
