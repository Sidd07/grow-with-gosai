import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUpRight } from "lucide-react"

interface PropertyCardProps {
    id?: string
    slug?: string
    title?: string
    location?: string
    price?: string
    image?: string
    type?: string
    specs?: {
        sqft: string
        beds: number
        baths: number
    }
}

export function PropertyCard({
    id = "1",
    slug,
    title = "Modern Office Space",
    location = "Downtown District",
    price = "$1,200,000",
    image = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    type = "Commercial",
    specs
}: PropertyCardProps) {
    const linkHref = slug ? `/exclusive-listings/${slug}` : `/exclusive-listings/${id}`

    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[var(--deep-navy)]/90 text-[var(--primary-gold)] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                    {type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <Link href={linkHref} className="text-white flex items-center gap-2 font-medium hover:text-[var(--primary-gold)] transition-colors">
                        View Details <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-[var(--deep-navy)] line-clamp-1">{title}</h3>
                    <span className="text-[var(--primary-gold)] font-bold whitespace-nowrap">{price}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={16} className="mr-1" />
                    {location}
                </div>

                <div className="mt-auto pt-4 flex justify-between items-center text-sm text-[var(--charcoal)]">
                    <Link href={linkHref} className="text-[var(--deep-navy)] font-semibold hover:text-[var(--primary-gold)] transition-colors">
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    )
}
