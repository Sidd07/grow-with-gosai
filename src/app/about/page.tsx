import { IntroVideo } from "@/components/IntroVideo"
import { ServiceSummary } from "@/components/ServiceSummary"
import { StatsSection } from "@/components/StatsSection"
import { ContactSection } from "@/components/ContactSection"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-[150px]">
            <div className="container mx-auto px-6 md:px-12 pt-32 pb-20 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-thin text-[var(--foreground)] mb-8">
                    Redefining <span className="text-[var(--primary)] italic font-light">Commercial Excellence</span>
                </h1>
                <p className="text-[var(--muted-foreground)] max-w-3xl mx-auto text-xl font-light leading-relaxed">
                    At GrowwithGosai, we combine institutional insight with boutique service. We don&apos;t just facilitate transactions; we architect strategic legacies for a discerning group of investors and business owners.
                </p>
            </div>

            <IntroVideo />
            <StatsSection />

            <section className="py-32 bg-[var(--card)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-serif font-light text-[var(--foreground)] mb-6 uppercase tracking-[0.2em] text-xs">Our Values</h2>
                            <h3 className="text-5xl font-serif font-thin text-[var(--foreground)] leading-tight">The pillars of <span className="italic text-[var(--primary)]">our practice</span>.</h3>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { title: "Integrity", desc: "Unwavering ethical standards in every transaction, ensuring transparency and trust with every client." },
                                { title: "Intelligence", desc: "Data-driven insights and sophisticated market analysis that go beyond the surface level." },
                                { title: "Discretion", desc: "Handling high-value assets with the utmost confidentiality and professional poise." },
                                { title: "Value", desc: "A relentless focus on maximizing ROI and long-term equity for our partners." }
                            ].map((value, i) => (
                                <div key={i} className="space-y-4">
                                    <h4 className="text-xl font-serif font-semibold text-[var(--foreground)]">{value.title}</h4>
                                    <p className="text-[var(--muted-foreground)] font-light leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-[var(--background)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-4">The Methodology</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-thin text-[var(--foreground)]">A systematic approach to <span className="italic">exceptional results</span>.</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Intelligence", desc: "Rigorous research and data collection to identify undervalued opportunities." },
                            { step: "02", title: "Strategy", desc: "Crafting bespoke investment paths aligned with your long-term legacy." },
                            { step: "03", title: "Execution", desc: "Precision-led negotiation and seamless transaction management." },
                            { step: "04", title: "Scale", desc: "Proactive portfolio monitoring and strategic exit planning." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-8 border border-[var(--border)]/10 hover:border-[var(--primary)]/30 transition-colors group">
                                <span className="text-5xl font-serif font-bold text-[var(--primary)]/10 group-hover:text-[var(--primary)]/20 transition-colors absolute top-4 right-4">{item.step}</span>
                                <h4 className="text-xl font-serif font-medium text-[var(--foreground)] mb-4">{item.title}</h4>
                                <p className="text-[var(--muted-foreground)] text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceSummary />
            <ContactSection />
        </main>
    )
}
