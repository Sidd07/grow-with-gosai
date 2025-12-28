"use client"

import { useEffect, useRef, useState } from "react"

export function ReelsGallery() {
    // Static reels configuration
    const [reels] = useState([
        { shortcode: 'DPT4Lwnkvkx' },
        { shortcode: 'DQC19btj2l5' },
        { shortcode: 'DPE97TEj-9Y' },
        { shortcode: 'DPpHtCRjBVp' },
        { shortcode: 'DNRDhgOV3IF' },
        { shortcode: 'DIuIqm-B3j5' },
        { shortcode: 'DEXpWVfCw2i' },
        { shortcode: 'DARDToLOl-N' },
        { shortcode: 'C-LREPGOwCR' },
        { shortcode: 'C6o2J-POMKZ' },
        { shortcode: 'C5O5A5xOo0f' },
        { shortcode: 'DGQtdHXMVGS' }
    ])
    const [loading, setLoading] = useState(false)

    // API call removed as requested - keeping static
    useEffect(() => {
        // No-op
    }, [])

    if (loading) return <div className="py-24 text-center">Loading Reels...</div>

    return (
        <section className="py-24 bg-[var(--bg-dark)] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-light)] mb-4">
                    Market Insights & Tours
                </h2>
                <p className="text-[var(--text-dim)]">Latest from our Instagram Reels</p>
            </div>

            <div className="relative w-full">
                <div className="flex gap-6 animate-scroll w-max hover:pause">
                    {reels.map((reel, index) => (
                        <div key={`${reel.shortcode}-${index}`} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-[var(--bg-card)] rounded-xl relative group overflow-hidden shadow-lg">
                            <iframe
                                src={`https://www.instagram.com/reel/${reel.shortcode}/embed`}
                                className="w-full h-full rounded-xl pointer-events-auto"
                                style={{ border: 0 }}
                                scrolling="no"
                                // @ts-expect-error: React requires lowercase for this legacy attribute, but TS expects camelCase
                                allowtransparency="true"
                                allow="encrypted-media"
                                title={`Instagram Reel ${reel.shortcode}`}
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
