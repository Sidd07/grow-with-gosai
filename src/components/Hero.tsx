"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"

export function Hero() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-screen w-full bg-[var(--background)]" />
    }

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[var(--background)]">
            {/* Cinematic Background - Pexels Video Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="relative w-full h-full overflow-hidden"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-[1.05] blur-[1px] md:blur-[1.4px]"
                    >
                        <source src="https://videos.pexels.com/video-files/5601810/5601810-hd_1920_1080_30fps.mp4" type="video/mp4" />
                    </video>
                </motion.div>
                {/* Elegant Overlay: Darker for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full container mx-auto px-4 md:px-12 flex flex-col justify-center items-center text-center">
                <div className="max-w-5xl w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 font-medium text-[var(--accent)] drop-shadow-md"
                    >
                        The Art of Modern Living
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-8xl lg:text-8xl font-serif font-medium mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tight text-white drop-shadow-2xl"
                    >
                        Curating the <br />
                        <span className="italic font-light text-[var(--primary)]">Exceptional</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-relaxed text-white/90 drop-shadow-lg px-4"
                    >
                        Exclusive commercial and residential portfolios for the visionary investor.
                    </motion.p>

                    {/* Minimalist Search Bar - Mobile Optimized */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="w-full max-w-2xl mx-auto mb-12 md:mb-20 px-2"
                    >
                        <form action="/exclusive-listings" className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-sm p-1.5 md:p-2 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                            <Search className="ml-3 md:ml-6 text-white/70 w-4 h-4 md:w-5 md:h-5" />
                            <input
                                type="text"
                                name="search"
                                placeholder="Search properties..."
                                className="flex-1 h-12 md:h-14 px-3 md:px-6 bg-transparent border-none text-white placeholder:text-white/60 focus:outline-none focus:ring-0 text-base md:text-lg font-light tracking-wide"
                            />
                            <Button type="submit" className="h-12 md:h-14 px-6 md:px-10 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white rounded-sm font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs transition-all">
                                Search
                            </Button>
                        </form>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-4"
                    >
                        {/* <Link href="/exclusive-listings" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold rounded-none min-w-[200px] md:min-w-[220px] transition-all bg-white text-black hover:bg-[var(--primary)] hover:text-white border border-transparent">
                                View exclusive Listings
                            </Button>
                        </Link> */}
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold rounded-none min-w-[200px] md:min-w-[220px] transition-all bg-white text-black hover:bg-[var(--primary)] hover:text-white border border-transparent">
                                Get in Touch
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Refined Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
            >
                <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/60 to-transparent" />
            </motion.div>
        </div>
    )
}
