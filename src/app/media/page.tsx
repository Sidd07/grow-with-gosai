"use client"

import { IntroVideo } from "@/components/IntroVideo"
import { InstagramReel } from "@/components/InstagramReel"

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-40 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-serif font-thin text-[var(--foreground)] mb-8">
                        Media & <span className="italic text-[var(--primary)] font-light">Insights</span>
                    </h1>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        Follow our journey and stay updated with the latest market trends and property showcases.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Reel 1 */}
                    <div className="shadow-2xl rounded-sm overflow-hidden border border-[var(--border)]/20">
                        <InstagramReel url="https://www.instagram.com/reel/DOCB4n1jkA_/" />
                    </div>

                    {/* Placeholders for future reels */}
                    {/* <InstagramReel url="..." /> */}
                </div>
            </div>
        </main>
    )
}
