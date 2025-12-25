"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function Banner() {
    return (
        <section className="py-20 bg-[var(--bg-card)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-light)] mb-6">
                    Ready to Elevate Your Portfolio?
                </h2>
                <p className="text-[var(--text-dim)] text-lg mb-8 max-w-2xl mx-auto">
                    Join the elite circle of investors who trust GrowwithGosai for their commercial real estate needs.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="bg-[var(--accent-blue)] text-[var(--text-light)] hover:bg-[var(--accent-blue-dim)]">
                        Start Your Journey
                    </Button>
                </Link>
            </div>
        </section>
    )
}
