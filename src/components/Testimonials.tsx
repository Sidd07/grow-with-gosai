"use client"

import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        content: "Vraj and his team didn't just find us an office; they found us a home where our culture could thrive. The attention to detail was unmatched.",
    },
    {
        name: "Michael Chen",
        role: "Real Estate Investor",
        content: "The insights provided by GrowwithGosai changed my entire investment strategy. I've seen a 40% increase in returns since working with them.",
    },
    {
        name: "David Ross",
        role: "Founder, Ross Retail",
        content: "Professional, sharp, and incredibly well-connected. They got us into an off-market property that wasn't even on our radar.",
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-[var(--bg-dark)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-light)] mb-4">
                        Client Success Stories
                    </h2>
                    <p className="text-[var(--text-dim)]">Trusted by industry leaders and visionary investors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-[var(--bg-card)] p-8 rounded-xl transition-colors shadow-sm hover:shadow-md">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-[var(--accent-blue)] text-[var(--accent-blue)]" />
                                ))}
                            </div>
                            <p className="text-[var(--text-light)]/90 italic mb-6 leading-relaxed">
                                &quot;{t.content}&quot;
                            </p>
                            <div>
                                <p className="text-[var(--text-light)] font-bold">{t.name}</p>
                                <p className="text-[var(--text-dim)] text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
