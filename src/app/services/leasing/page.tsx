"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { CheckCircle2, Building2, Home, Key, Users } from "lucide-react"

export default function LeasingPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[75vh] flex items-center justify-center overflow-hidden pt-[150px]">
                <Image
                    src="/images/leasing-hero.png" // Placeholder
                    alt="Leasing Services"
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
                        Commercial & <span className="italic">Residential Leasing</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
                        Connecting exceptional tenants with premium spaces across the GTA.
                    </p>
                </div>
            </section>

            {/* Dual Focus Section */}
            <section className="py-32 bg-[var(--background)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Commercial Leasing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 bg-[var(--card)] rounded-sm border border-[var(--border)]/10"
                        >
                            <Building2 className="text-[var(--primary)] mb-8" size={48} />
                            <h3 className="text-3xl font-serif font-light text-[var(--foreground)] mb-6">Commercial Leasing</h3>
                            <p className="text-[var(--muted-foreground)] font-light leading-relaxed mb-10">
                                Strategic tenant acquisition for retail, office, and industrial assets. We focus on long-term occupancy and tenant quality to secure your asset&apos;s value.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Retail & Storefront Positioning",
                                    "Professional Office Suites",
                                    "Industrial & Flex Spaces",
                                    "Tenant Credit Analysis"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--foreground)]/80">
                                        <CheckCircle2 size={18} className="text-[var(--primary)]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Residential Leasing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-12 bg-[var(--foreground)] text-[var(--background)] rounded-sm shadow-2xl"
                        >
                            <Home className="text-[var(--primary)] mb-8" size={48} />
                            <h3 className="text-3xl font-serif font-light mb-6">Luxury Residential</h3>
                            <p className="text-[var(--background)]/70 font-light leading-relaxed mb-10">
                                High-end rentals and executive relocations for HNW individuals. We curate exclusive rental opportunities in the GTA&apos;s most desirable neighborhoods.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Elite Rental Concierge",
                                    "Executive Relocation Services",
                                    "Luxury Condo & Estate Leasing",
                                    "Seamless Move-in Coordination"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--background)]/90">
                                        <CheckCircle2 size={18} className="text-[var(--primary)]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-[var(--card)] border-t border-[var(--border)]/10">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-thin text-[var(--foreground)] mb-10">
                        Find Your <span className="italic text-[var(--primary)]">Perfect Match</span>.
                    </h2>
                    <Link href="/contact">
                        <Button className="h-16 px-12 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white font-bold text-xs uppercase tracking-[0.3em] rounded-sm shadow-xl transition-all">
                            Inquire About Leasing
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
