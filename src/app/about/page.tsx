import { IntroVideo } from "@/components/IntroVideo"
import { ServiceSummary } from "@/components/ServiceSummary"
import { StatsSection } from "@/components/StatsSection"
import { ContactSection } from "@/components/ContactSection"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32">
            <div className="container mx-auto px-6 md:px-12 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-thin text-[var(--foreground)] mb-8">
                    About <span className="text-[var(--primary)] italic font-light">GrowwithGosai</span>
                </h1>
                <p className="text-[var(--muted-foreground)] max-w-3xl mx-auto text-xl font-light leading-relaxed">
                    We are redefining commercial real estate with a focus on growth, investment, and premium service.
                </p>
            </div>

            <IntroVideo />
            <StatsSection />
            <ServiceSummary />
            <ContactSection />
        </main>
    )
}
