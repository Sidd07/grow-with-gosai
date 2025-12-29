import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")

    return (
        <main className="min-h-screen bg-[var(--bg-dark)] pt-[150px] pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/services" className="inline-flex items-center text-[var(--text-dim)] hover:text-[var(--accent-blue)] mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--text-light)] mb-6">
                            {title}
                        </h1>
                        <p className="text-[var(--text-dim)] text-lg leading-relaxed mb-8">
                            Comprehensive solutions tailored for {title.toLowerCase()}. We leverage market data and strategic insights to maximize your returns.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-[var(--accent-blue)] mt-1 shrink-0" size={20} />
                                    <p className="text-[var(--text-light)]">Strategic benefit or feature {i} related to {title}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact">
                            <Button size="lg" className="bg-[var(--accent-blue)] text-[var(--text-light)] hover:bg-[var(--accent-blue-dim)]">
                                Consult with an Expert
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--accent-platinum)]/10 p-8 h-fit">
                        <h3 className="text-2xl font-serif font-bold text-[var(--text-light)] mb-6">Success Stories</h3>
                        <div className="space-y-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-6 bg-[var(--bg-dark)] rounded-xl border border-[var(--accent-platinum)]/5">
                                    <p className="text-[var(--text-dim)] italic mb-4">
                                        &quot;GrowwithGosai helped us navigate a complex {title.toLowerCase()} deal with ease. Highly recommended.&quot;
                                    </p>
                                    <p className="text-[var(--text-light)] font-bold text-sm">- Client Name</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
