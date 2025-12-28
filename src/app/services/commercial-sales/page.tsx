"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, BarChart3, Users, Handshake } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function CommercialSalesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/commercial-sales-hero-light.png"
                        alt="Commercial Real Estate Office Building"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight"
                    >
                        Commercial Sales
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 text-white/90"
                    >
                        Maximizing value in every transaction through strategic insight and market expertise.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href="/contact">
                            <Button className="bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 px-8 py-6 text-lg rounded-none tracking-widest uppercase">
                                Request Valuation
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-[var(--background)]">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[var(--foreground)]">
                            Strategic Real Estate Solutions
                        </h2>
                        <div className="space-y-6 text-[var(--muted-foreground)] text-lg leading-relaxed">
                            <p>
                                At Grow with Gosai, we understand that commercial real estate is more than just property—it&apos;s a significant financial asset. We specialize in facilitating seamless transactions for a diverse range of commercial property types.
                            </p>
                            <p>
                                Whether you are a private investor, developer, or institutional owner, we tailor our approach to your unique goals. Our expertise spans across all major asset classes, ensuring that your specific property type is marketed effectively to the right audience.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
                            { name: "Retail", img: "/images/retail-storefront.png" },
                            { name: "Industrial", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80" },
                            { name: "Multi-Family", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" }
                        ].map((item) => (
                            <div key={item.name} className="relative aspect-square rounded-lg overflow-hidden group">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-bold tracking-widest uppercase text-lg drop-shadow-md">{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Types Detail */}
            <section className="py-20 bg-[var(--card)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[var(--accent)] uppercase tracking-[0.2em] text-sm font-bold">Asset Classes</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 text-[var(--foreground)]">Properties We Transact</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Office Buildings",
                                desc: "From Class A corporate headquarters to suburban medical offices, we understand the nuances of workplace trends and occupancy strategies."
                            },
                            {
                                title: "Retail & Shopping Centers",
                                desc: "High-street retail, strip malls, and mixed-use developments. We maximize visibility and tenant mix value."
                            },
                            {
                                title: "Industrial & Logistics",
                                desc: "Warehouses, distribution centers, and flex spaces. connecting buyers with functional assets in key logistics hubs."
                            },
                            {
                                title: "Multi-Family",
                                desc: "Apartment complexes and portfolio acquisitions. We analyze cap rates and value-add potential for maximum ROI."
                            },
                            {
                                title: "Land & Development",
                                desc: "Raw land, redevelopment sites, and pad sites. We help unlock potential through zoning analysis and market feasibility."
                            },
                            {
                                title: "Hospitality",
                                desc: "Hotels, motels, and boutique stays. Specialized valuation understanding RevPAR and operational complexities."
                            }
                        ].map((type, i) => (
                            <motion.div
                                key={type.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--background)] p-8 border-l-4 border-[var(--accent)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold mb-3 font-serif text-[var(--foreground)]">{type.title}</h3>
                                <p className="text-[var(--muted-foreground)] text-sm">{type.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-[var(--secondary)]/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[var(--accent)] uppercase tracking-[0.2em] text-sm font-bold">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 text-[var(--foreground)]">Comprehensive Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <BarChart3 className="w-10 h-10" />,
                                title: "Investment Sales",
                                description: "Expert guidance on the acquisition and disposition of income-producing properties across all asset classes."
                            },
                            {
                                icon: <Users className="w-10 h-10" />,
                                title: "Landlord Rep",
                                description: "Strategic leasing programs designed to maximize occupancy, rental rates, and asset value."
                            },
                            {
                                icon: <Building2 className="w-10 h-10" />,
                                title: "Tenant Rep",
                                description: "Aligning your business objectives with real estate strategies to find the perfect space for your operations."
                            },
                            {
                                icon: <Handshake className="w-10 h-10" />,
                                title: "Valuation Advisory",
                                description: "Data-driven insights and BOVs to help you make informed decisions about your portfolio."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
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

            {/* Process Section */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--foreground)] sticky top-32">
                                The Process
                            </h2>
                        </div>
                        <div className="md:w-2/3 space-y-12">
                            {[
                                { step: "01", title: "Discovery & Strategy", desc: "We begin by understanding your specific investment criteria or disposition goals to craft a tailored roadmap." },
                                { step: "02", title: "Market Analysis", desc: "Leveraging proprietary data to identify opportunities, assess risks, and determine optimal pricing positioning." },
                                { step: "03", title: "Marketing & Negotiation", desc: "For sellers, we deploy aggressive multi-channel marketing. For buyers, we expertly navigate off-market opportunities." },
                                { step: "04", title: "Closing & Beyond", desc: "Meticulous transaction management ensuring a smooth close, followed by continued advisory support." }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 border-b border-[var(--border)] pb-12 group hover:pl-4 transition-all duration-300">
                                    <span className="text-4xl font-light text-[var(--accent)]/50 group-hover:text-[var(--accent)] transition-colors">
                                        {item.step}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-[var(--muted-foreground)] max-w-lg">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[var(--foreground)] text-[var(--background)] text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Elevate Your Portfolio?</h2>
                    <p className="text-xl text-[var(--background)]/80 mb-12 max-w-2xl mx-auto">
                        Connect with our commercial real estate experts today.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] px-10 py-8 text-lg rounded-none tracking-widest font-bold">
                            SCHEDULE A CONSULTATION <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
