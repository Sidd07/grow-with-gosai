"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Instagram } from "lucide-react"

export function InstaGallery() {
    return (
        <section className="py-24 bg-[var(--bg-dark)] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-light)] mb-4">
                        Follow the Journey
                    </h2>
                    <p className="text-[var(--text-dim)]">@GrowwithGosai on Instagram</p>
                </div>
                <Link href="https://instagram.com" target="_blank">
                    <Button variant="outline" className="hidden md:flex gap-2">
                        <Instagram size={16} /> Follow Us
                    </Button>
                </Link>
            </div>

            {/* Placeholder for Instagram Feed / Horizontal Scroll */}
            <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-6 no-scrollbar">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="min-w-[300px] h-[400px] bg-[var(--bg-card)] rounded-xl flex items-center justify-center relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] to-transparent opacity-60" />
                        <span className="relative z-10 text-[var(--text-dim)] font-medium">Post Preview {item}</span>
                        {/* In real implementation, this would be an image or video */}
                    </div>
                ))}
            </div>
        </section>
    )
}
