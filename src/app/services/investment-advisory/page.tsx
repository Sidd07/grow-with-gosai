"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, PieChart, ShieldCheck, Landmark, Scale } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function InvestmentAdvisoryPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/investment-advisory-hero.png"
                        alt="Investment Advisory Boardroom"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight"
                    >
                        Investment Advisory
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 text-white/90"
                    >
                        Data-driven strategies to maximize returns and mitigate risk for your commercial portfolio.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href="/contact">
                            <Button className="bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 px-8 py-4 text-base rounded-none tracking-widest uppercase">
                                Schedule Strategy Session
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-[var(--background)]">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[var(--foreground)]">
                            Precision Wealth Management
                        </h2>
                        <div className="space-y-6 text-[var(--muted-foreground)] text-lg leading-relaxed">
                            <p>
                                In today&apos;s volatile market, intuition isn&apos;t enough. Successful commercial real estate investment requires rigorous analysis, forward-looking strategy, and precise execution.
                            </p>
                            <p>
                                Grow with Gosai serves as your strategic partner, offering institutional-grade advisory services tailored to private investors and family offices. We look beyond the transaction to understand the long-term potential of every asset.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-[var(--card)] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center p-8 group">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/roi-growth-chart.png"
                                alt="Financial Growth Chart"
                                fill
                                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />
                        </div>
                        <div className="relative z-10 text-center bg-[var(--card)]/80 backdrop-blur-sm p-8 rounded-xl border border-[var(--border)] shadow-sm">
                            <TrendingUp size={80} className="mx-auto mb-6 text-[var(--accent)]" />
                            <h3 className="text-2xl font-bold mb-2">ROI Focused</h3>
                            <p className="text-[var(--muted-foreground)]">Optimizing Cap Rates & Cash on Cash Returns</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-[var(--secondary)]/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[var(--accent)] uppercase tracking-[0.2em] text-sm font-bold">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 text-[var(--foreground)]">Strategic Consulting</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <PieChart className="w-10 h-10" />,
                                title: "Portfolio Analysis",
                                description: "Comprehensive review of your current holdings to identify underperforming assets and opportunities for consolidation or diversification."
                            },
                            {
                                icon: <ShieldCheck className="w-10 h-10" />,
                                title: "Risk Assessment",
                                description: "Evaluating market exposure, tenant creditworthiness, and lease terms to stress-test your portfolio against economic shifts."
                            },
                            {
                                icon: <TrendingUp className="w-10 h-10" />,
                                title: "Market Feasibility",
                                description: "In-depth studies for development projects or acquisitions, analyzing demographic trends, supply/demand, and absorption rates."
                            },
                            {
                                icon: <Landmark className="w-10 h-10" />,
                                title: "Capital Stack Structuring",
                                description: "Advising on the optimal mix of debt and equity to maximize leverage while maintaining healthy coverage ratios."
                            },
                            {
                                icon: <Scale className="w-10 h-10" />,
                                title: "1031 Exchange Advisory",
                                description: "Navigating complex tax-deferred exchanges to help you trade up into higher-quality, higher-yielding assets."
                            },
                            {
                                icon: <ArrowRight className="w-10 h-10" />,
                                title: "Exit Strategy",
                                description: "Planning the timing and method of disposition to maximize terminal value and tax efficiency."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 group shadow-sm"
                            >
                                <div className="text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-serif">{service.title}</h3>
                                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-[var(--foreground)]">The Strategic Edge</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Data-First", desc: "We don't guess. We use proprietary data and real-time market analytics to back every recommendation." },
                            { title: "Client-Centric", desc: "Your goals are our blueprint. We operate as fiduciaries, putting your long-term success above quick commissions." },
                            { title: "Full Lifecycle", desc: "From acquisition to management to disposition, we provide continuity of strategy throughout your ownership." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-6xl font-serif font-bold text-[var(--accent)]/20">{`0${i + 1}`}</div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-[var(--muted-foreground)]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[var(--foreground)] text-[var(--background)] text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Secure Your Financial Future</h2>
                    <p className="text-xl text-[var(--background)]/80 mb-12 max-w-2xl mx-auto">
                        Speak with our investment advisors to build a resilient real estate portfolio.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] px-10 py-8 text-lg rounded-none tracking-widest font-bold">
                            START THE CONVERSATION <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
