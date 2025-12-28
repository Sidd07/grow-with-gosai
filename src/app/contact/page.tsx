import { Button } from "@/components/ui/Button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-dark)] pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Details Side */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--text-light)] mb-6">
                            Get in <span className="text-[var(--accent-blue)]">Touch</span>
                        </h1>
                        <p className="text-[var(--text-dim)] text-lg mb-12 leading-relaxed">
                            Ready to elevate your real estate portfolio? Our team of experts is here to provide strategic guidance and exclusive market access.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)] shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-light)] mb-2">Headquarters</h3>
                                    <p className="text-[var(--text-dim)]">
                                        73 Water St N Unit # 300<br />
                                        Cambridge, ON N1R 7L6<br />
                                        Canada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)] shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-light)] mb-2">Phone</h3>
                                    <p className="text-[var(--text-dim)]">
                                        (647) 675-8404<br />
                                        <span className="text-sm opacity-60">Mon-Fri, 9am - 6pm EST</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)] shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-light)] mb-2">Email</h3>
                                    <p className="text-[var(--text-dim)]">
                                        meet@growwithgosai.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="bg-[var(--bg-card)] p-8 md:p-12 rounded-2xl border border-[var(--accent-platinum)]/10 shadow-2xl">
                        <h3 className="text-2xl font-serif font-bold text-[var(--text-light)] mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-light)]">First Name</label>
                                    <input type="text" className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-light)]">Last Name</label>
                                    <input type="text" className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-light)]">Email</label>
                                <input type="email" className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-light)]">Phone (Optional)</label>
                                <input type="tel" className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-light)]">Message</label>
                                <textarea className="w-full h-32 p-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors resize-none" placeholder="Tell us about your property needs..." />
                            </div>
                            <Button className="w-full h-14 bg-[var(--accent-blue)] text-[var(--text-light)] hover:bg-[var(--accent-blue-dim)] font-bold text-lg mt-4">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
