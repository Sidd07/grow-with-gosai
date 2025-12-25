"use client"

import { Button } from "@/components/ui/Button"

export function ContactSection() {
    return (
        <section className="py-40 bg-[var(--card)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--foreground)] mb-8 leading-tight">
                            Let&apos;s Discuss Your <br />
                            <span className="text-[var(--primary)] italic font-light">Next Investment</span>
                        </h2>
                        <p className="text-[var(--muted-foreground)] text-xl font-light mb-12 max-w-md">
                            Whether you&apos;re looking to buy, sell, or lease, our team is ready to provide the strategic guidance you need.
                        </p>

                        <div className="space-y-8">
                            <div className="p-8 bg-[var(--background)] rounded-sm shadow-sm border border-[var(--border)]/50">
                                <h4 className="text-[var(--foreground)] font-bold mb-2 uppercase tracking-wider text-xs">Office</h4>
                                <p className="text-[var(--muted-foreground)] font-light">123 Business Ave, Suite 100<br />Toronto, ON M5V 2T6</p>
                            </div>
                            <div className="p-8 bg-[var(--background)] rounded-sm shadow-sm border border-[var(--border)]/50">
                                <h4 className="text-[var(--foreground)] font-bold mb-2 uppercase tracking-wider text-xs">Contact</h4>
                                <p className="text-[var(--muted-foreground)] font-light">hello@growwithgosai.com<br />+1 (555) 000-0000</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--background)] p-10 md:p-12 rounded-sm shadow-2xl border border-[var(--border)]/50">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">First Name</label>
                                    <input type="text" className="w-full h-14 px-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all shadow-inner font-light" placeholder="John" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">Last Name</label>
                                    <input type="text" className="w-full h-14 px-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all shadow-inner font-light" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">Email</label>
                                <input type="email" className="w-full h-14 px-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all shadow-inner font-light" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">Message</label>
                                <textarea className="w-full h-40 p-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all resize-none shadow-inner font-light" placeholder="Tell us about your property needs..." />
                            </div>
                            <Button className="w-full h-14 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-lg hover:shadow-xl">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
