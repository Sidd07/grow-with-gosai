"use client"

import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { toast } from "sonner"
import { Building2, Home, MapPin, ClipboardList, Info } from "lucide-react"

export default function ValuationPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        propertyType: "Office",
        sqFt: "",
        currentUsage: "",
        reason: "Selling"
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    subject: "Quick Property Valuation Request",
                    message: `Valuation Request Details:\n
Property Type: ${formData.propertyType}\n
Square Footage: ${formData.sqFt}\n
Current Usage: ${formData.currentUsage}\n
Reason for Valuation: ${formData.reason}\n
Address: ${formData.address}, ${formData.city}, ${formData.postalCode}`
                })
            })

            if (response.ok) {
                toast.success("Valuation request sent successfully!")
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                    city: "",
                    postalCode: "",
                    propertyType: "Office",
                    sqFt: "",
                    currentUsage: "",
                    reason: "Selling"
                })
            } else {
                toast.error("Failed to send request. Please try again.")
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <main className="min-h-screen bg-[var(--background)] pt-[150px] pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[var(--primary)] text-xs tracking-[0.4em] uppercase mb-6 font-medium">Market Intelligence</h2>
                        <h1 className="text-4xl md:text-6xl font-serif font-thin text-[var(--foreground)] mb-6">
                            Quick Property <span className="italic text-[var(--primary)]">Valuation</span>
                        </h1>
                        <p className="text-[var(--muted-foreground)] text-lg font-light max-w-2xl mx-auto leading-relaxed">
                            Receive a professional assessment of your asset&apos;s current market value. Our experts leverage real-time data and institutional insights to provide precise valuations.
                        </p>
                    </div>

                    <div className="bg-[var(--card)] p-8 md:p-12 rounded-sm border border-[var(--border)]/20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />

                        <form className="space-y-12" onSubmit={handleSubmit}>
                            {/* Section 1: Contact Information */}
                            <div>
                                <h3 className="flex items-center gap-3 text-xl font-serif font-medium text-[var(--foreground)] mb-8 border-b border-[var(--border)]/10 pb-4">
                                    <ClipboardList size={20} className="text-[var(--primary)]" />
                                    Contact Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Property Details */}
                            <div>
                                <h3 className="flex items-center gap-3 text-xl font-serif font-medium text-[var(--foreground)] mb-8 border-b border-[var(--border)]/10 pb-4">
                                    <Info size={20} className="text-[var(--primary)]" />
                                    Property Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Property Type</label>
                                        <select
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light appearance-none"
                                        >
                                            <option>Office</option>
                                            <option>Retail</option>
                                            <option>Industrial</option>
                                            <option>Multi-Family</option>
                                            <option>Residential</option>
                                            <option>Land</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Approx. Square Footage</label>
                                        <input
                                            type="number"
                                            name="sqFt"
                                            required
                                            value={formData.sqFt}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="5500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Current Usage</label>
                                        <input
                                            type="text"
                                            name="currentUsage"
                                            required
                                            value={formData.currentUsage}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="Owner Occupied / Tenanted"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Reason for Valuation</label>
                                        <select
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light appearance-none"
                                        >
                                            <option>Selling</option>
                                            <option>Refinancing</option>
                                            <option>Asset Management</option>
                                            <option>Informational</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Property Location */}
                            <div>
                                <h3 className="flex items-center gap-3 text-xl font-serif font-medium text-[var(--foreground)] mb-8 border-b border-[var(--border)]/10 pb-4">
                                    <MapPin size={20} className="text-[var(--primary)]" />
                                    Property Location
                                </h3>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Street Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                            placeholder="123 Luxury Lane"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                                placeholder="Toronto"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">Postal Code</label>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                required
                                                value={formData.postalCode}
                                                onChange={handleChange}
                                                className="w-full h-12 px-4 rounded-none bg-[var(--background)] border border-[var(--border)]/40 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors font-light"
                                                placeholder="M5V 2L7"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-16 bg-[var(--primary)] text-white hover:bg-[var(--accent)] font-bold text-xs uppercase tracking-[0.3em] rounded-none shadow-xl transition-all disabled:opacity-50 mt-8"
                            >
                                {loading ? "Analyzing..." : "Request Private Valuation"}
                            </Button>
                        </form>
                    </div>

                    <div className="mt-12 text-center text-[var(--muted-foreground)] text-sm font-light">
                        <p>All valuation requests are handled with the utmost discretion and confidentiality.</p>
                        <p className="mt-2">Estimated delivery: 24-48 business hours.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
