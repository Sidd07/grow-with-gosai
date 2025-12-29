"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { CheckCircle2, Globe, Shield, Zap, TrendingUp } from "lucide-react"

export default function ResidentialSalesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[75vh] flex items-center justify-center overflow-hidden pt-[150px]">
                <Image
                    src="/images/luxury-residential-hero.png" // I'll need to generate this
                    alt="Luxury Residential Sales"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-thin mb-6"
                    >
                        Redefining <span className="italic">Luxury Living</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
                        Bespoke residential sales strategies for the world&apos;s most discerning clientele.
                    </p>
                </div>
            </section>

            {/* Core Values / Benefits */}
            <section className="py-32 bg-[var(--background)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-[var(--primary)] text-xs tracking-[0.4em] uppercase mb-8 font-medium">Exceptional Service</h2>
                            <h3 className="text-4xl md:text-6xl font-serif font-thin text-[var(--foreground)] mb-10 leading-tight">
                                A <span className="italic">White-Glove</span> approach to high-end real estate.
                            </h3>
                            <p className="text-[var(--muted-foreground)] text-lg font-light leading-relaxed mb-12">
                                We understand that a luxury residence is more than just a home; it&apos;s an aspiration and a sanctuary. Our team provides an elite level of service, market intelligence, and discretion.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { icon: Shield, title: "Discretion & Privacy", desc: "Facilitating anonymous purchases and safeguarding your identity." },
                                    { icon: Globe, title: "Global Exposure", desc: "Showcasing your property on the world&apos;s most prestigious marketing stages." },
                                    { icon: Zap, title: "Market Intelligence", desc: "Proprietary data and deep insights into the GTA&apos;s premium submarkets." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/5 flex items-center justify-center shrink-0">
                                            <item.icon className="text-[var(--primary)]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-serif font-medium text-[var(--foreground)] mb-2">{item.title}</h4>
                                            <p className="text-[var(--muted-foreground)] font-light text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/luxury-interior.png" // Need to generate
                                alt="Luxury Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-[var(--card)] border-t border-[var(--border)]/10">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-thin text-[var(--foreground)] mb-10">
                        Experience the <span className="italic text-[var(--primary)]">Bespoke difference</span>.
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact">
                            <Button className="h-16 px-12 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white font-bold text-xs uppercase tracking-[0.3em] rounded-sm shadow-xl transition-all w-full sm:w-auto">
                                Request Private Consultation
                            </Button>
                        </Link>
                        <Link href="/valuation">
                            <Button variant="outline" className="h-16 px-12 border-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white font-bold text-xs uppercase tracking-[0.3em] rounded-sm shadow-xl transition-all w-full sm:w-auto">
                                Request Valuation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
