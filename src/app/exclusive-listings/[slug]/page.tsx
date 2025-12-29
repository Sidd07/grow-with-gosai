import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Maximize, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getProperty(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/properties/${slug}`, { cache: 'no-store' })
    if (!res.ok) return null
    return res.json()
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params
    const property = await getProperty(slug)

    if (!property) {
        return {
            title: 'Property Not Found',
        }
    }

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: property.metaTitle || `${property.title} | GrowwithGosai`,
        description: property.metaDescription || property.description.substring(0, 160),
        keywords: property.keywords?.split(',').map((k: string) => k.trim()) || [],
        openGraph: {
            title: property.metaTitle || property.title,
            description: property.metaDescription || property.description,
            images: property.images.length > 0
                ? [`http://localhost:4000${property.images[0]}`, ...previousImages]
                : previousImages,
        },
    }
}

export default async function ListingPage({ params }: Props) {
    const { slug } = await params
    const property = await getProperty(slug)

    // The user provided these two lines, assuming they are for the component's loading/not found state
    // and replace the original `if (!property) notFound()`
    if (!property) return <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--muted-foreground)] font-light">Loading...</div>
    if (!property) return <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--muted-foreground)] font-light">Property not found</div>

    return (
        <div className="min-h-screen bg-[var(--background)] pt-48 pb-20">
            {/* Hero Image */}
            <div className="relative h-[70vh] w-full mb-12">
                <Image
                    src={property.images[0] ? `http://localhost:4000${property.images[0]}` : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="container mx-auto">
                        <span className="bg-[var(--primary)] text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block shadow-lg">
                            {property.type}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-thin text-white mb-4 leading-tight">
                            {property.title}
                        </h1>
                        <p className="text-white/90 text-xl font-light tracking-wide flex items-center gap-2">
                            <MapPin size={20} className="text-[var(--primary)]" /> {property.location}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-[var(--card)] p-10 rounded-sm shadow-sm border border-[var(--border)]/20 mb-12">
                            <h2 className="text-2xl font-serif font-medium text-[var(--foreground)] mb-8 border-b border-[var(--border)]/20 pb-4">
                                Property Overview
                            </h2>
                            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed font-light whitespace-pre-line">
                                {property.description}
                            </p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {property.images.slice(1).map((img: string, index: number) => (
                                <div key={index} className="relative h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                                    <Image
                                        src={`http://localhost:4000${img}`}
                                        alt={`${property.title} - Image ${index + 2}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-[var(--card)] p-10 rounded-sm shadow-xl border border-[var(--border)]/20 sticky top-48">
                            <div className="mb-10">
                                <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-[0.2em] mb-2 font-medium">Price</p>
                                <p className="text-5xl font-serif font-thin text-[var(--primary)]">
                                    ${property.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="space-y-8 mb-10">
                                <div className="flex items-center gap-4 text-[var(--foreground)] font-light">
                                    <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-[var(--primary)] shadow-sm">
                                        <Maximize size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">Size</p>
                                        <p className="text-lg">2,500 Sq Ft</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-[var(--foreground)] font-light">
                                    <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-[var(--primary)] shadow-sm">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">Listed</p>
                                        <p className="text-lg">{new Date(property.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full h-14 bg-[var(--primary)] text-white hover:bg-[var(--accent)] uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-lg hover:shadow-xl transition-all">
                                Inquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
