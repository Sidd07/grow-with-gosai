"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { X, Upload, Loader2 } from "lucide-react"
import { Property } from "@/types/property"
import { useSession } from "next-auth/react"

interface ListingFormProps {
    initialData?: Property
    onSuccess: () => void
}

export function ListingForm({ initialData, onSuccess }: ListingFormProps) {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<{
        title: string
        description: string
        price: number
        location: string
        type: 'Commercial' | 'Residential' | 'Investment' | 'Land'
        isExclusive: boolean
        isShowcase: boolean
        priority: number
        metaTitle: string
        metaDescription: string
        keywords: string
    }>({
        title: initialData?.title || "",
        description: initialData?.description || "",
        price: initialData?.price || 0,
        location: initialData?.location || "",
        type: initialData?.type || "Commercial",
        isExclusive: initialData?.isExclusive ?? true,
        isShowcase: initialData?.isShowcase ?? false,
        priority: initialData?.priority || 0,
        metaTitle: initialData?.metaTitle || "",
        metaDescription: initialData?.metaDescription || "",
        keywords: initialData?.keywords || ""
    })
    const [files, setFiles] = useState<FileList | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const data = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, String(value))
            })
            if (files) {
                Array.from(files).forEach(file => {
                    data.append('images', file)
                })
            }

            const url = initialData
                ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties/${initialData._id}`
                : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties`

            const method = initialData ? 'PUT' : 'POST'

            const res = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                body: data
            })

            if (!res.ok) throw new Error('Failed to save property')

            onSuccess()
        } catch (error) {
            console.error(error)
            alert('Failed to save property')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-[var(--card)] p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--foreground)]">Title</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--foreground)]">Price</label>
                    <input
                        type="number"
                        required
                        className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-[var(--foreground)]">Description (Rich Text)</label>
                <textarea
                    required
                    className="w-full p-4 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none h-48 shadow-sm font-sans"
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter detailed description..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--foreground)]">Location</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--foreground)]">Type</label>
                    <select
                        className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                        value={formData.type}
                        onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                    >
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Investment">Investment</option>
                        <option value="Land">Land</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-[var(--foreground)]">Images</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                    onChange={e => setFiles(e.target.files)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="isExclusive"
                        checked={formData.isExclusive}
                        onChange={e => setFormData({ ...formData, isExclusive: e.target.checked })}
                        className="w-4 h-4 rounded bg-[var(--background)] text-[var(--primary)] focus:ring-[var(--primary)] border-none shadow-sm"
                    />
                    <label htmlFor="isExclusive" className="text-sm font-medium text-[var(--foreground)]">Exclusive Listing</label>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="isShowcase"
                        checked={formData.isShowcase}
                        onChange={e => setFormData({ ...formData, isShowcase: e.target.checked })}
                        className="w-4 h-4 rounded bg-[var(--background)] text-[var(--primary)] focus:ring-[var(--primary)] border-none shadow-sm"
                    />
                    <label htmlFor="isShowcase" className="text-sm font-medium text-[var(--foreground)]">Showcase on Home</label>
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-[var(--foreground)]">Priority:</label>
                    <input
                        type="number"
                        className="w-20 p-1 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                        value={formData.priority}
                        onChange={e => setFormData({ ...formData, priority: Number(e.target.value) })}
                    />
                </div>
            </div>

            {/* SEO Section */}
            <div className="border-t border-[var(--border)] pt-6 mt-6">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">SEO Metadata</h3>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--foreground)]">Meta Title</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                            value={formData.metaTitle}
                            onChange={e => setFormData({ ...formData, metaTitle: e.target.value })}
                            placeholder="SEO Title (e.g. Luxury Condo in Toronto | GrowwithGosai)"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--foreground)]">Meta Description</label>
                        <textarea
                            className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none h-24 shadow-sm"
                            value={formData.metaDescription}
                            onChange={e => setFormData({ ...formData, metaDescription: e.target.value })}
                            placeholder="Brief summary for search engines..."
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--foreground)]">Keywords</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-[var(--background)] text-[var(--foreground)] focus:ring-1 focus:ring-[var(--ring)] focus:outline-none shadow-sm"
                            value={formData.keywords}
                            onChange={e => setFormData({ ...formData, keywords: e.target.value })}
                            placeholder="Comma separated keywords (e.g. real estate, toronto, luxury)"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-6">
                <Button
                    type="submit"
                    className="bg-[var(--primary)] text-[var(--primary-foreground)] w-full md:w-auto"
                    disabled={loading}
                >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : null}
                    {initialData ? "Update Listing" : "Create Listing"}
                </Button>
            </div>
        </form>
    )
}
