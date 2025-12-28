"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Property } from "@/types/property"

export function CollectionSection() {
    // Static collection data
    const [collection] = useState<Property[]>([
        {
            _id: '1',
            title: 'The Sovereign Tower',
            type: 'Commercial',
            location: 'Downtown Finance District',
            images: ['/images/commercial-sales-hero-light.png'],
            price: 0,
            description: '',
            isShowcase: true,
            isExclusive: false,
            priority: 0,
            createdAt: new Date().toISOString()
        },
        {
            _id: '2',
            title: 'Harbourview Complex',
            type: 'Investment',
            location: 'Waterfront, Toronto',
            images: ['/images/investment-advisory-hero.png'],
            price: 0,
            description: '',
            isShowcase: true,
            isExclusive: false,
            priority: 0,
            createdAt: new Date().toISOString()
        },
        {
            _id: '3',
            title: 'Yorkville Retail Plaza',
            type: 'Commercial',
            location: 'Yorkville Ave',
            images: ['/images/retail-storefront.png'],
            price: 0,
            description: '',
            isShowcase: true,
            isExclusive: false,
            priority: 0,
            createdAt: new Date().toISOString()
        }
    ])

    useEffect(() => {
        // Static data used - no API fetch
    }, [])

    if (collection.length === 0) return null

    return (
        <section className="py-20 md:py-40 bg-[var(--card)] text-[var(--foreground)]">
            <div className="container mx-auto px-6 md:px-12 mb-20 flex justify-between items-end">
                <div>
                    <h2 className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
                        The Collection
                    </h2>
                    <h3 className="text-5xl md:text-6xl font-serif font-thin text-[var(--foreground)]">
                        Curated Opportunities
                    </h3>
                </div>
                <Link href="/exclusive-listings" className="hidden md:flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors uppercase tracking-[0.2em] text-xs font-medium group">
                    View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto pb-16 hide-scrollbar">
                <div className="flex gap-10 px-6 md:px-12 w-max">
                    {collection.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
                            className="relative group w-[320px] md:w-[480px] cursor-pointer"
                        >
                            <div className="relative h-[550px] md:h-[650px] overflow-hidden bg-[var(--background)] shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-sm">
                                <Image
                                    src={item.images[0] ? `http://localhost:4000${item.images[0]}` : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-[var(--accent)] text-[10px] uppercase tracking-[0.3em] mb-3 block">
                                        {item.type}
                                    </span>
                                    <h4 className="text-3xl font-serif font-medium text-white mb-2 leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-white/70 text-sm font-light tracking-wide">
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
