"use client"

import { ListingForm } from "@/components/ListingForm"
import { useRouter } from "next/navigation"

export default function AddListingPage() {
    const router = useRouter()

    const handleSuccess = () => {
        router.push("/exclusive-listings")
    }

    return (
        <main className="min-h-screen bg-[var(--background)] pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-3xl font-serif font-bold text-[var(--foreground)] mb-8">Add New Listing</h1>
                <ListingForm onSuccess={handleSuccess} />
            </div>
        </main>
    )
}
