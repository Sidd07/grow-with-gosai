"use client"

import { useEffect, useRef } from "react"

interface InstagramReelProps {
    url: string
    caption?: string
}

export function InstagramReel({ url, caption = "View this post on Instagram" }: InstagramReelProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Function to load the Instagram embed script
        const loadScript = () => {
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process()
                return
            }

            const script = document.createElement("script")
            script.src = "//www.instagram.com/embed.js"
            script.async = true
            script.defer = true
            document.body.appendChild(script)

            script.onload = () => {
                if ((window as any).instgrm) {
                    (window as any).instgrm.Embeds.process()
                }
            }
        }

        loadScript()
    }, [url])

    return (
        <div className="flex justify-center w-full my-8" ref={containerRef}>
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "calc(100% - 2px)"
                }}
            >
                <div style={{ padding: "16px" }}>
                    <a
                        href={url}
                        style={{
                            background: "#FFFFFF",
                            lineHeight: "0",
                            padding: "0 0",
                            textAlign: "center",
                            textDecoration: "none",
                            width: "100%"
                        }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {/* Minimal fallback content if script fails or loads slowly */}
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "40px", width: "40px", marginRight: "14px" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", marginBottom: "6px", width: "100px" }}></div>
                                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", width: "60px" }}></div>
                            </div>
                        </div>
                        <div style={{ padding: "19% 0" }}></div>
                        <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                            {/* SVG Icon omitted for brevity, standard IG placeholder */}
                        </div>
                        <div style={{ paddingTop: "8px" }}>
                            <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 550, lineHeight: "18px" }}>
                                {caption}
                            </div>
                        </div>
                    </a>
                </div>
            </blockquote>
        </div>
    )
}
