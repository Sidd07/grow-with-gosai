"use client"

import { ListingForm } from "@/components/ListingForm"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Property } from "@/types/property"
import { use } from "react"

export default function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const router = useRouter()
    const [property, setProperty] = useState<Property | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties/${id}`)
                if (!res.ok) throw new Error("Failed to fetch property")
                const data = await res.json()
                setProperty(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProperty()
    }, [id])

    const handleSuccess = () => {
        router.push("/exclusive-listings")
    }

    if (loading) return <div className="min-h-screen pt-24 text-center">Loading...</div>
    if (!property) return <div className="min-h-screen pt-24 text-center">Property not found</div>

    return (
        <main className="min-h-screen bg-[var(--background)] pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-3xl font-serif font-bold text-[var(--foreground)] mb-8">Edit Listing</h1>
                <ListingForm initialData={property} onSuccess={handleSuccess} />
            </div>
        </main>
    )
}
