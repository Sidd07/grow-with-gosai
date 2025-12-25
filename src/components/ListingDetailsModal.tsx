"use client"

import { Property } from "@/types/property"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { X } from "lucide-react"

interface ListingDetailsModalProps {
    property: Property
    onClose: () => void
}

export function ListingDetailsModal({ property, onClose }: ListingDetailsModalProps) {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-[var(--card)] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-full min-h-[300px]">
                        <Image
                            src={property.images[0] ? `http://localhost:4000${property.images[0]}` : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}
                            alt={property.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="p-8">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                {property.type}
                            </span>
                            <h2 className="text-3xl font-serif font-bold text-[var(--foreground)] mb-2">
                                {property.title}
                            </h2>
                            <p className="text-xl font-medium text-[var(--accent)]">
                                ${property.price.toLocaleString()}
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div>
                                <h3 className="text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Location</h3>
                                <p className="text-[var(--foreground)]">{property.location}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Description</h3>
                                <p className="text-[var(--foreground)]/80 leading-relaxed">
                                    {property.description}
                                </p>
                            </div>
                        </div>

                        <Button className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90">
                            Inquire About This Property
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
