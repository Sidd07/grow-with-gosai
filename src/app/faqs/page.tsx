"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, ArrowRight, Building2, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

interface FAQItemProps {
    question: string
    answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-[var(--border)]/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="text-xl md:text-2xl font-serif font-light text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {question}
                </span>
                <div className="shrink-0 ml-4">
                    {isOpen ? (
                        <Minus className="text-[var(--primary)]" size={24} />
                    ) : (
                        <Plus className="text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" size={24} />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-[var(--muted-foreground)] text-lg font-light leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const commercialFAQs = [
    {
        question: "How is the value of my commercial property determined?",
        answer: "Our valuation process is multi-faceted. We analyze current Net Operating Income (NOI), apply relevant market Cap Rates for your specific asset class, review recent comparable sales (comps), and perform a discounted cash flow (DCF) analysis. We also evaluate the strength of your current tenant profiles and lease terms."
    },
    {
        question: "What is a Confidential Information Memorandum (CIM)?",
        answer: "A CIM is an institutional-grade document we prepare for your property. It provides prospective buyers with a comprehensive overview, including financial performance, operational details, market analysis, and strategic investment highlights. These are typically shared only with vetted buyers who have signed a Non-Disclosure Agreement (NDA)."
    },
    {
        question: "How long does it typically take to sell a commercial asset?",
        answer: "A typical commercial transaction takes between 4 to 8 months. This includes a 30-day preparation period, 60-90 days of active marketing, and a 60-90 day due diligence and closing period. Timelines can vary based on asset size, market conditions, and financing complexity."
    },
    {
        question: "Do you handle off-market (pocket) listings?",
        answer: "Yes. For many trophy assets and specialized businesses, discretion is paramount. We maintain a vetted network of over 15,000 active investors and family offices. We can execute a completely private disposition strategy that never hits public databases while still ensuring maximum market value."
    }
]

const residentialFAQs = [
    {
        question: "How do you market luxury homes to high-net-worth individuals?",
        answer: "We treat every listing as a masterpiece. Our strategy includes cinematic property films, architectural photography, and targeted digital campaigns on high-end lifestyle platforms. We go beyond simple listing services to tell a story of exclusivity and heritage that resonates with elite buyers globally."
    },
    {
        question: "How do you safeguard my privacy during the selling process?",
        answer: "Privacy is a core pillar of our service. We implement strict buyer vetting, requiring proof of funds or pre-approval before sharing sensitive details or scheduling showings. For high-profile clients, we often facilitate 'Whisper Listings' to maintain complete anonymity."
    },
    {
        question: "What preparations should I make before listing my home?",
        answer: "We offer a 'White-Glove' preparation service. Our team coordinates with professional stagers, designers, and contractors to ensure your home is in pristine condition. We also conduct a pre-listing audit of all legal and structural documentation to prevent any hurdles during the closing process."
    },
    {
        question: "How are property showings managed?",
        answer: "All showings are handled personally by a senior member of the Gosai team. We ensure the property is meticulously prepared before ogni entry and provide detailed post-showing feedback. We emphasize a high-touch, controlled environment rather than high-volume traffic."
    }
]

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-[150px] pb-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-[var(--primary)] text-xs tracking-[0.4em] uppercase mb-6 font-medium">Knowledge Center</h2>
                    <h1 className="text-4xl md:text-7xl font-serif font-thin text-[var(--foreground)] mb-8">
                        Common <span className="italic text-[var(--primary)]">Questions</span>
                    </h1>
                    <p className="text-[var(--muted-foreground)] text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Insights into our professional approach to commercial and residential real estate disposition.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-32">

                    {/* Commercial Section */}
                    <section>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                <Building2 size={24} />
                            </div>
                            <h2 className="text-3xl font-serif font-medium text-[var(--foreground)]">Commercial Sales</h2>
                        </div>
                        <div className="divide-y divide-[var(--border)]/10 border-t border-[var(--border)]/10">
                            {commercialFAQs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </section>

                    {/* Residential Section */}
                    <section>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                <Home size={24} />
                            </div>
                            <h2 className="text-3xl font-serif font-medium text-[var(--foreground)]">Residential Sales</h2>
                        </div>
                        <div className="divide-y divide-[var(--border)]/10 border-t border-[var(--border)]/10">
                            {residentialFAQs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Bottom CTA */}
                <div className="mt-40 text-center bg-[var(--card)] p-12 md:p-24 rounded-sm border border-[var(--border)]/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <h2 className="text-3xl md:text-5xl font-serif font-thin text-[var(--foreground)] mb-10 relative z-10">
                        Ready to establish your <span className="italic text-[var(--primary)]">Market Value?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <Link href="/valuation">
                            <Button className="h-16 px-12 bg-[var(--primary)] text-white hover:bg-[var(--accent)] font-bold text-xs uppercase tracking-[0.3em] rounded-none shadow-xl transition-all">
                                Request Valuation
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-16 px-12 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] font-bold text-xs uppercase tracking-[0.3em] rounded-none shadow-xl transition-all">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
