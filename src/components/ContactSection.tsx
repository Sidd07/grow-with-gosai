"use client"

import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { toast } from "sonner"

export function ContactSection() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
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
                setFormData({ firstName: "", lastName: "", email: "", message: "" })
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
                                <p className="text-[var(--muted-foreground)] font-light">73 Water St N Unit # 300<br />Cambridge, ON N1R 7L6</p>
                            </div>
                            <div className="p-8 bg-[var(--background)] rounded-sm shadow-sm border border-[var(--border)]/50">
                                <h4 className="text-[var(--foreground)] font-bold mb-2 uppercase tracking-wider text-xs">Contact</h4>
                                <p className="text-[var(--muted-foreground)] font-light">meet@growwithgosai.com<br />(647) 675-8404</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--background)] p-10 md:p-12 rounded-sm shadow-2xl border border-[var(--border)]/50">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full h-14 px-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all shadow-inner font-light"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full h-14 px-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all shadow-inner font-light"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-14 px-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all shadow-inner font-light"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-40 p-6 rounded-sm bg-[var(--card)] text-[var(--foreground)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--background)] focus:outline-none transition-all resize-none shadow-inner font-light"
                                    placeholder="Tell us about your property needs..."
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-14 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
