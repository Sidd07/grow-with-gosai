import { PropertyCard } from "@/components/PropertyCard"
import { Button } from "@/components/ui/Button"

export default function PropertiesPage() {
    const properties = [
        {
            id: "1",
            title: "Skyline Tower Office",
            location: "Downtown Financial District",
            price: "$12,500 / mo",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            type: "Office Space",
            size: "2,500 sqft"
        },
        {
            id: "2",
            title: "Harbor View Retail",
            location: "Waterfront Plaza",
            price: "$8,200 / mo",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            type: "Retail",
            size: "1,200 sqft"
        },
        {
            id: "3",
            title: "Tech Hub Warehouse",
            location: "Innovation Park",
            price: "$15,000 / mo",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
            type: "Industrial",
            size: "5,000 sqft"
        },
        {
            id: "4",
            title: "Executive Suite Complex",
            location: "Midtown Business Center",
            price: "$5,500 / mo",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
            type: "Office Space",
            size: "1,000 sqft"
        },
        {
            id: "5",
            title: "Boutique Storefront",
            location: "Historic District",
            price: "$4,800 / mo",
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
            type: "Retail",
            size: "800 sqft"
        },
        {
            id: "6",
            title: "Logistics Center",
            location: "Airport Industrial Zone",
            price: "$22,000 / mo",
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
            type: "Industrial",
            size: "10,000 sqft"
        }
    ]

    return (
        <main className="min-h-screen bg-[var(--soft-white)]">
            <div className="pt-48 pb-12 bg-[var(--deep-navy)] text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--soft-white)] mb-4">Our Properties</h1>
                <p className="text-[var(--light-grey)]/80 max-w-2xl mx-auto px-4">
                    Explore our curated collection of premium commercial real estate opportunities.
                </p>
            </div>

            <section className="py-16 container mx-auto px-4 md:px-6">
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    <Button variant="default">All Properties</Button>
                    <Button variant="outline">Office Space</Button>
                    <Button variant="outline">Retail</Button>
                    <Button variant="outline">Industrial</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop) => (
                        <PropertyCard key={prop.id} {...prop} />
                    ))}
                </div>
            </section>
        </main>
    )
}
