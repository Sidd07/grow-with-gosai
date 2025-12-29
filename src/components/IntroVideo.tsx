"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function IntroVideo() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-6 md:px-12">
                <div
                    className="relative aspect-video w-full max-w-6xl mx-auto bg-[var(--card)] rounded-sm overflow-hidden border border-[var(--border)]/20 group cursor-pointer shadow-2xl"
                    onClick={() => setIsPlaying(true)}
                >
                    {!isPlaying ? (
                        <>
                            <Image
                                src="/images/about-video-thumbnail.jpg"
                                alt="Grow with Gosai - Introduction"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center text-white">
                                <div className="w-20 h-20 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <iframe
                            src="https://drive.google.com/file/d/1nhopiKzAanofBQaKPnN4tEn7VGut0fYK/preview?autoplay=1"
                            className="w-full h-full"
                            allow="autoplay"
                            title="About GrowwithGosai"
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    )
}
