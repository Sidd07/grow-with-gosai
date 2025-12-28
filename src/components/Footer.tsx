import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#020617] text-white/80 pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-20">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-3xl font-serif font-bold text-white mb-8 inline-block tracking-tighter">
                            Growwith<span className="text-[var(--accent)]">Gosai</span>
                        </Link>
                        <p className="text-white/60 mb-8 leading-relaxed font-light max-w-xs">
                            Specializing in premium commercial real estate. We connect visionary businesses with exceptional properties.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-white/60 hover:text-[var(--accent)] transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-[var(--accent)] transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-[var(--accent)] transition-colors">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-[var(--accent)] transition-colors">
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/properties" className="text-white/60 hover:text-[var(--accent)] transition-colors font-light text-sm">
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white/60 hover:text-[var(--accent)] transition-colors font-light text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/60 hover:text-[var(--accent)] transition-colors font-light text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/60 hover:text-[var(--accent)] transition-colors font-light text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white">Services</h3>
                        <ul className="space-y-4">
                            <li className="text-white/60 font-light text-sm">Commercial Sales</li>
                            <li className="text-white/60 font-light text-sm">Leasing</li>
                            <li className="text-white/60 font-light text-sm">Property Management</li>
                            <li className="text-white/60 font-light text-sm">Investment Consulting</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-white/60 font-light text-sm">
                                <MapPin size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                                <span>73 Water St N Unit # 300<br />Cambridge, ON N1R 7L6</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/60 font-light text-sm">
                                <Phone size={18} className="text-[var(--accent)] shrink-0" />
                                <span className="hover:text-[var(--accent)] transition-colors">(647) 675-8404</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/60 font-light text-sm">
                                <Mail size={18} className="text-[var(--accent)] shrink-0" />
                                <span>meet@growwithgosai.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 text-center text-white/40 text-xs font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} GrowwithGosai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
