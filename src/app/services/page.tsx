import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] pt-40 px-6 md:px-12 pb-20">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
                        Our Expertise
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-serif font-thin text-[var(--foreground)] mb-8">
                        Comprehensive <span className="italic text-[var(--primary)] font-light">Solutions</span>
                    </h1>
                    <p className="text-[var(--muted-foreground)] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Tailored strategies for every stage of your real estate journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Investment Advisory",
                            slug: "investment-advisory",
                            desc: "Data-driven strategies to build and sustain generational wealth through sophisticated portfolio management."
                        },
                        {
                            name: "Commercial Sales",
                            slug: "commercial-sales",
                            desc: "Maximizing value through strategic positioning, global reaching, and expert negotiation of prime assets."
                        },
                        {
                            name: "Residential Sales",
                            slug: "residential-sales",
                            desc: "Bespoke residential solutions for high-net-worth individuals, focusing on luxury, discretion, and market precision."
                        },
                        {
                            name: "Exclusive Listing",
                            slug: "exclusive-listing",
                            desc: "A strategic 'List With Us' approach, offering both Public MLS® and confidential Private sales strategies."
                        },
                        {
                            name: "Leasing",
                            slug: "leasing",
                            desc: "Comprehensive leasing solutions for commercial retail, office, and luxury residential executive relocations."
                        }
                    ].map((service) => (
                        <div key={service.slug} className="p-10 bg-[var(--card)] rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-[var(--border)]/30 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-serif font-light text-[var(--foreground)] mb-6 group-hover:text-[var(--accent)] transition-colors">{service.name}</h3>
                                <p className="text-[var(--muted-foreground)] mb-10 font-light leading-relaxed min-h-[80px]">
                                    {service.desc}
                                </p>
                            </div>
                            <Link href={`/services/${service.slug}`}>
                                <Button variant="outline" className="w-full h-12 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white hover:border-transparent uppercase tracking-[0.2em] text-xs font-bold rounded-sm transition-all">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
