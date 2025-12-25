"use client"

import Link from "next/link"
import { Linkedin, Instagram, Facebook, Twitter, Mail } from "lucide-react"

export function SocialSidebar() {
    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Mail, href: "/contact", label: "Email" },
    ]

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
            {socialLinks.map((social, index) => (
                <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[var(--accent-platinum)]/30 flex items-center justify-center text-[var(--text-light)] hover:bg-[var(--accent-blue)] hover:text-[var(--text-light)] hover:border-[var(--accent-blue)] transition-all duration-300 group"
                    aria-label={social.label}
                >
                    <social.icon size={18} />
                </Link>
            ))}
        </div>
    )
}
