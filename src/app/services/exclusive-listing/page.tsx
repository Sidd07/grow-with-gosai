"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Shield, Zap, Target, BarChart3, Users } from "lucide-react"

export default function ExclusiveListingPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[75vh] flex items-center justify-center overflow-hidden pt-[150px]">
                <Image
                    src="/images/exclusive-listing-hero.png" // Placeholder or existing
                    alt="Exclusive Listing Service"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-thin mb-6"
                    >
                        Strategic <span className="italic">Asset Disposition</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
                        Maximized value through targeted exposure and elite negotiation.
                    </p>
                </div>
            </section>

            {/* Public vs Private */}
            <section className="py-32 bg-[var(--background)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-[var(--primary)] text-xs tracking-[0.4em] uppercase mb-6 font-medium">Strategic Choice</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-thin text-[var(--foreground)]">Public MLS® vs. <span className="italic text-[var(--primary)]">Exclusive Listing</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-10 border border-[var(--border)]/10 bg-[var(--card)] rounded-sm">
                            <h4 className="text-2xl font-serif font-medium text-[var(--foreground)] mb-6">Public MLS® Listing</h4>
                            <p className="text-[var(--muted-foreground)] font-light leading-relaxed mb-6">
                                Ideal for income-generating assets like retail plazas or office buildings where maximum visibility and competitive bidding are key to price discovery.
                            </p>
                            <ul className="space-y-3">
                                {["Maximum Market Reach", "Multiple Offer Scenarios", "Public Price Discovery"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--foreground)]/80">
                                        <Zap size={16} className="text-[var(--primary)]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 border border-[var(--primary)]/20 bg-[var(--primary)]/5 rounded-sm">
                            <h4 className="text-2xl font-serif font-medium text-[var(--foreground)] mb-6 italic">Exclusive Listing</h4>
                            <p className="text-[var(--muted-foreground)] font-light leading-relaxed mb-6">
                                Best for specialized businesses (restaurants, salons) or trophy residences where confidentiality is paramount. Handled via NDAs and targeted outreach.
                            </p>
                            <ul className="space-y-3">
                                {["Complete Confidentiality", "Vetted Buyer Access", "Discreet Showings"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--foreground)]/80">
                                        <Shield size={16} className="text-[var(--primary)]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-32 bg-[var(--card)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/meeting-room.png" // Placeholder
                                alt="Strategy Session"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-[var(--primary)] text-xs tracking-[0.4em] uppercase mb-8 font-medium">The Methodology</h2>
                            <h3 className="text-4xl md:text-6xl font-serif font-thin text-[var(--foreground)] mb-10 leading-tight">
                                A <span className="italic">Proven Path</span> to closing.
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Analysis & Valuation", desc: "Detailed market audit to establish the optimal entry price and strategy." },
                                    { step: "02", title: "Marketing Preparation", desc: "Professional media production and high-impact digital storytelling." },
                                    { step: "03", title: "Targeted Outreach", desc: "Direct engagement with our vetted network of 15,000+ active buyers." },
                                    { step: "04", title: "Negotiation & Closing", desc: "Expert management of complex terms to secure maximum market value." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8">
                                        <span className="text-3xl font-serif font-bold text-[var(--primary)]/20">{item.step}</span>
                                        <div>
                                            <h4 className="text-xl font-serif font-medium text-[var(--foreground)] mb-2">{item.title}</h4>
                                            <p className="text-[var(--muted-foreground)] font-light text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-[var(--background)] border-t border-[var(--border)]/10">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-thin text-[var(--foreground)] mb-10">
                        Ready to <span className="italic text-[var(--primary)]">List Your Asset?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact">
                            <Button className="h-16 px-12 bg-white text-black hover:bg-[var(--primary)] hover:text-white font-bold text-xs uppercase tracking-[0.3em] rounded-sm shadow-xl transition-all w-full sm:w-auto border border-transparent">
                                Submit Listing Request
                            </Button>
                        </Link>
                        <Link href="/valuation">
                            <Button variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white hover:text-black font-bold text-xs uppercase tracking-[0.3em] rounded-sm shadow-xl transition-all w-full sm:w-auto">
                                Request Valuation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
