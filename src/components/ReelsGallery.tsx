"use client"

import { useEffect, useRef, useState } from "react"

export function ReelsGallery() {
    const [reels, setReels] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchReels = async () => {
            try {
                const res = await fetch('http://localhost:4000/instagram/reels')
                if (res.ok) {
                    const data = await res.json()
                    // Duplicate for infinite scroll if we have enough items, else just show them
                    // If we have very few, we might need to duplicate more
                    setReels([...data, ...data, ...data])
                } else {
                    console.error("Failed to fetch reels")
                    // Fallback to static if API fails (or token missing)
                    const fallbackIds = ['C5lP1x_v1Z9', 'C5j2x_v1Z9', 'C5h3x_v1Z9', 'C5f4x_v1Z9']
                    setReels([...fallbackIds, ...fallbackIds, ...fallbackIds].map(id => ({ shortcode: id })))
                }
            } catch (error) {
                console.error("Error fetching reels", error)
                const fallbackIds = ['C5lP1x_v1Z9', 'C5j2x_v1Z9', 'C5h3x_v1Z9', 'C5f4x_v1Z9']
                setReels([...fallbackIds, ...fallbackIds, ...fallbackIds].map(id => ({ shortcode: id })))
            } finally {
                setLoading(false)
            }
        }
        fetchReels()
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
                                frameBorder="0"
                                scrolling="no"
                                allowtransparency="true"
                                allow="encrypted-media"
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
