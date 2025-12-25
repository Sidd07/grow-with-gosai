"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Property } from "@/types/property"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

import { ReorderListingsModal } from "@/components/ReorderListingsModal"

import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Plus, Edit, ArrowUpRight } from "lucide-react"

export default function ExclusiveListingsPage() {
    const { data: session } = useSession()
    const router = useRouter() // Added useRouter based on the instruction's implied usage
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('search')

    const [exclusiveProperties, setExclusiveProperties] = useState<Property[]>([])
    const [publicProperties, setPublicProperties] = useState<Property[]>([]) // Mock for now
    const [isReorderOpen, setIsReorderOpen] = useState(false)

    const isAdmin = session?.user?.role === 'admin'

    const fetchProperties = async () => {
        try {
            let url = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties?isExclusive=true`
            if (searchQuery) {
                url += `&search=${encodeURIComponent(searchQuery)}`
            }
            const res = await fetch(url)
            const data = await res.json()
            // Sort by priority (descending)
            const sorted = data.sort((a: Property, b: Property) => (b.priority || 0) - (a.priority || 0))
            setExclusiveProperties(sorted)
        } catch (error) {
            console.error("Failed to fetch properties", error)
        }
    }

    useEffect(() => {
        fetchProperties()
    }, [searchQuery])

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this listing?")) return
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties/${id}`, { method: 'DELETE' })
            fetchProperties()
        } catch (error) {
            console.error("Failed to delete", error)
        }
    }

    const handleReorderSave = async (newOrder: Property[]) => {
        // Optimistic update
        setExclusiveProperties(newOrder)
        setIsReorderOpen(false)

        // Update priorities in backend
        // We'll assign priority based on index (reverse order so top is highest priority)
        try {
            const updates = newOrder.map((item, index) => ({
                id: item._id,
                priority: newOrder.length - index
            }))

            // We need a bulk update endpoint or loop through updates. 
            // For now, loop (inefficient but works for small lists).
            // Ideally backend should have /properties/reorder
            await Promise.all(updates.map(update =>
                fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties/${update.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ priority: update.priority })
                })
            ))

            fetchProperties()
        } catch (error) {
            console.error("Failed to save order", error)
            fetchProperties() // Revert on error
        }
    }

    return (
        <div className="min-h-screen bg-[var(--background)] pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
                            Our Portfolio
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-serif font-thin text-[var(--foreground)] mb-6 leading-tight">
                            Exclusive <span className="italic text-[var(--primary)] font-light">Listings</span>
                        </h1>
                        <p className="text-[var(--muted-foreground)] max-w-xl text-lg font-light leading-relaxed">
                            Curated selection of premium commercial and residential properties.
                        </p>
                    </div>
                    {isAdmin && (
                        <div className="flex gap-4">
                            <Button
                                onClick={() => setIsReorderOpen(true)}
                                variant="outline"
                                className="border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)] uppercase tracking-widest text-xs h-12 px-6"
                            >
                                Reorder Listings
                            </Button>
                            <Button
                                onClick={() => router.push("/management/listings/add")}
                                className="bg-[var(--primary)] text-white hover:bg-[var(--accent)] uppercase tracking-widest text-xs h-12 px-6"
                            >
                                <Plus size={16} className="mr-2" /> Add Listing
                            </Button>
                        </div>
                    )}
                </div>

                {/* Exclusive Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                    {exclusiveProperties.map((property) => (
                        <motion.div
                            key={property._id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group relative bg-[var(--card)] rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[var(--border)]/20"
                        >
                            <div className="relative h-[400px] w-full overflow-hidden">
                                <Image
                                    src={property.images[0] ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}${property.images[0]}` : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}
                                    alt={property.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute top-6 right-6 bg-[var(--primary)] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-[0.2em] shadow-lg">
                                    Exclusive
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-8">
                                    <Link href={`/exclusive-listings/${property.slug || property._id}`} className="text-white flex items-center gap-3 font-medium hover:text-[var(--accent)] transition-colors uppercase tracking-widest text-xs">
                                        View Details <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-serif font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                                        {property.title}
                                    </h3>
                                    <span className="text-[var(--primary)] font-light text-xl">
                                        ${property.price.toLocaleString()}
                                    </span>
                                </div>
                                <p className="text-[var(--muted-foreground)] text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                                    {property.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-8 border-t border-[var(--border)]/30 pt-6">
                                    <span>{property.location}</span>
                                    <span className="text-[var(--border)]">•</span>
                                    <span>{property.type}</span>
                                </div>

                                {isAdmin ? (
                                    <div className="flex gap-3">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                router.push(`/management/listings/edit/${property._id}`)
                                            }}
                                            className="flex-1 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)] uppercase tracking-widest text-[10px] h-10"
                                        >
                                            <Edit size={14} className="mr-2" /> Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(property._id)}
                                            className="flex-1 bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 uppercase tracking-widest text-[10px] h-10"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => router.push(`/exclusive-listings/${property.slug || property._id}`)}
                                        className="w-full bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold h-12 rounded-sm"
                                    >
                                        View Details
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Public Listings Section (Mock) */}
                <div className="pt-20 border-t border-[var(--border)]/10">
                    <h2 className="text-4xl font-serif font-thin text-[var(--foreground)] mb-12">
                        Public <span className="text-[var(--muted-foreground)] italic">Market</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Mock Items */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-[var(--card)] rounded-sm p-6 shadow-sm border border-[var(--border)]/20">
                                <div className="h-48 bg-[var(--muted)]/10 rounded-sm mb-6 animate-pulse" />
                                <div className="h-4 bg-[var(--muted)]/20 rounded-sm w-3/4 mb-3" />
                                <div className="h-3 bg-[var(--muted)]/10 rounded-sm w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reorder Modal */}
                {isReorderOpen && (
                    <ReorderListingsModal
                        properties={exclusiveProperties}
                        onClose={() => setIsReorderOpen(false)}
                        onSave={handleReorderSave}
                    />
                )}
            </div>
        </div>
    )
}
