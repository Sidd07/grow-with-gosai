"use client"

import { Play } from "lucide-react"

export function IntroVideo() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="relative aspect-video w-full max-w-6xl mx-auto bg-[var(--card)] rounded-sm overflow-hidden border border-[var(--border)]/20 group cursor-pointer shadow-2xl">
                    <iframe
                        src="https://drive.google.com/file/d/1nhopiKzAanofBQaKPnN4tEn7VGut0fYK/preview"
                        className="w-full h-full"
                        allow="autoplay"
                        title="About GrowwithGosai"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
