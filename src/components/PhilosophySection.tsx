"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PhilosophySection() {
    return (
        <section className="py-40 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Editorial Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-10 font-medium">
                            Our Philosophy
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-serif font-thin leading-[1.1] mb-12 text-[var(--foreground)]">
                            We don&apos;t just sell properties; we <span className="italic text-[var(--primary)] font-light">architect</span> legacies.
                        </h3>
                        <div className="space-y-8 text-[var(--muted-foreground)] text-lg md:text-xl font-light leading-relaxed max-w-lg">
                            <p>
                                In an era of high-frequency transactions, we choose intentional transformation. We view ourselves as strategic partners, navigating the complexities of the commercial landscape to unlock exceptional value where others see obstacles.
                            </p>
                            <p>
                                From the evolving skylines of Toronto to the emerging corridors of the GTA, our approach is defined by sophisticated market intelligence and a relentless pursuit of the extraordinary.
                            </p>
                        </div>
                    </motion.div>

                    {/* Meet's Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative h-[700px] w-full rounded-sm overflow-hidden"
                    >
                        <Image
                            src="/realtor-profile.png"
                            alt="Meet Gosai"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 opacity-60" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
