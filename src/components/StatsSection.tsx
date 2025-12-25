"use client"

import { motion } from "framer-motion"

const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "$500M+", label: "Volume Sold" },
    { value: "1000+", label: "Happy Clients" },
    { value: "Top 1%", label: "Nationwide" },
]

export function StatsSection() {
    return (
        <section className="py-24 bg-[var(--background)] border-b border-[var(--border)]/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="text-center"
                        >
                            <h3 className="text-5xl md:text-6xl font-serif font-thin text-[var(--primary)] mb-3">
                                {stat.value}
                            </h3>
                            <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-[0.2em] font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
