"use client"

import { Button } from "@/components/ui/Button"
import { Mail, MapPin, Phone, Instagram } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                toast.success("Message sent successfully!")
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
            } else {
                toast.error("Failed to send message. Please try again.")
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <main className="min-h-screen bg-[var(--bg-dark)] pt-[150px] pb-20">
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

                            <a href="https://www.instagram.com/GrowwithGosai/" target="_blank" rel="noreferrer" className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)] shrink-0 group-hover:bg-[var(--accent-blue)]/20 transition-colors">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-light)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Instagram</h3>
                                    <p className="text-[var(--text-dim)] group-hover:text-[var(--text-light)] transition-colors">
                                        @GrowwithGosai
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="bg-[var(--bg-card)] p-8 md:p-12 rounded-2xl border border-[var(--accent-platinum)]/10 shadow-2xl">
                        <h3 className="text-2xl font-serif font-bold text-[var(--text-light)] mb-8">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-light)]">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-light)]">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-light)]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-light)]">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-light)]">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-32 p-4 rounded-md bg-[var(--bg-dark)] border border-[var(--accent-platinum)]/10 text-[var(--text-light)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your property needs..."
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-14 bg-[var(--accent-blue)] text-[var(--text-light)] hover:bg-[var(--accent-blue-dim)] font-bold text-lg mt-4 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
