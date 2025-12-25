export interface Property {
    _id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    type: 'Commercial' | 'Residential' | 'Investment' | 'Land';
    images: string[];
    isExclusive: boolean;
    isShowcase: boolean
    priority: number
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    slug?: string;
    createdAt: string;
}
