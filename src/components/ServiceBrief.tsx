"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServiceBrief() {
    return (
        <section className="py-24 bg-[var(--bg-dark)]">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-light)] mb-6">
                    Strategic Real Estate Solutions
                </h2>
                <p className="text-[var(--text-dim)] text-lg leading-relaxed mb-10">
                    We specialize in connecting visionary investors with high-value commercial opportunities.
                    From acquisition to disposition, our data-driven approach ensures your portfolio
                    outperforms the market.
                </p>
                <Link href="/services">
                    <Button variant="outline" className="group border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-[var(--text-light)]">
                        Explore Our Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}
