"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const stats = [
    { label: "Volume Sold", value: "$500M+" },
    { label: "Years Active", value: "15+" },
    { label: "Record Prices", value: "47" },
]

export function MarketPulseSection() {
    return (
        <section className="py-40 bg-[var(--background)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Stats Column */}
                    <div className="lg:col-span-1 space-y-16">
                        <h2 className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-10 font-medium">
                            Market Pulse
                        </h2>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="pb-8 border-b border-[var(--border)]/50 last:border-0"
                            >
                                <h3 className="text-6xl font-serif font-thin text-[var(--foreground)] mb-3">
                                    {stat.value}
                                </h3>
                                <p className="text-[var(--muted-foreground)] uppercase tracking-[0.2em] text-[10px] font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Insights Column */}
                    <div className="lg:col-span-2 bg-[var(--card)] p-16 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
                        <div className="absolute top-10 right-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            <ArrowUpRight className="text-[var(--accent)] w-10 h-10" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] uppercase tracking-[0.2em] mb-8 rounded-full">
                                    Latest Insight
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif font-light text-[var(--foreground)] leading-tight mb-8 group-hover:text-[var(--accent)] transition-colors duration-500">
                                    The Future of Commercial Real Estate in Toronto's Waterfront
                                </h3>
                                <p className="text-[var(--muted-foreground)] text-lg max-w-2xl font-light leading-relaxed">
                                    An in-depth analysis of the upcoming infrastructure projects and their impact on property valuations over the next decade.
                                </p>
                            </div>
                            <div className="mt-16">
                                <span className="text-[var(--foreground)] pb-1 text-xs uppercase tracking-[0.2em] border-b border-[var(--accent)]/50 group-hover:border-[var(--accent)] transition-all">
                                    Read Analysis
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
