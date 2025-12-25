"use client"

import { Play } from "lucide-react"

export function IntroVideo() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="relative aspect-video w-full max-w-6xl mx-auto bg-[var(--card)] rounded-sm overflow-hidden border border-[var(--border)]/20 group cursor-pointer shadow-2xl">
                    {/* Placeholder for Video Thumbnail */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-[var(--primary)]/90 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg backdrop-blur-sm">
                            <Play size={36} className="ml-1 fill-current" />
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10">
                        <h3 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">The Gosai Difference</h3>
                        <p className="text-white/80 font-light tracking-wider text-sm uppercase">Watch our story</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
