"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Building2, TrendingUp, Home } from "lucide-react"

const services = [
    {
        icon: Building2,
        title: "Commercial Sales & Leasing",
        description: "Expert guidance in acquiring and disposing of office, retail, and industrial assets. We maximize value through strategic positioning and market intelligence.",
    },
    {
        icon: TrendingUp,
        title: "Investment Advisory",
        description: "Data-driven strategies to build and manage high-performing real estate portfolios. We identify emerging opportunities before the market catches up.",
    },
    {
        icon: Home,
        title: "Luxury Residential",
        description: "Bespoke service for high-net-worth individuals seeking premium residential properties. Access to exclusive off-market listings.",
    },
]

export function ServiceSummary() {
    return (
        <section className="py-32 bg-[var(--card)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-light text-[var(--foreground)] mb-8 leading-tight">
                        Comprehensive <span className="italic text-[var(--primary)]">Real Estate Solutions</span>
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-lg font-light leading-relaxed">
                        We offer a full suite of services tailored to the unique needs of investors, business owners, and developers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[var(--background)] p-10 rounded-sm transition-all duration-500 group shadow-sm hover:shadow-xl border border-transparent hover:border-[var(--border)]/20">
                            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] mb-8 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-[var(--foreground)] mb-4">{service.title}</h3>
                            <p className="text-[var(--muted-foreground)] mb-10 leading-relaxed font-light">
                                {service.description}
                            </p>
                            <Link href="/services">
                                <Button variant="link" className="p-0 text-[var(--primary)] hover:text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-bold">
                                    Learn More &rarr;
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
