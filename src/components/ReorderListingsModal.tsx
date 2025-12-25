"use client"

import { useState } from "react"
import { Reorder } from "framer-motion"
import { Property } from "@/types/property"
import { Button } from "@/components/ui/Button"
import { X, GripVertical } from "lucide-react"

interface ReorderListingsModalProps {
    properties: Property[]
    onClose: () => void
    onSave: (newOrder: Property[]) => void
}

export function ReorderListingsModal({ properties, onClose, onSave }: ReorderListingsModalProps) {
    const [items, setItems] = useState(properties)

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-[var(--card)] rounded-xl w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl">
                <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-[var(--foreground)]">Reorder Listings</h2>
                    <button onClick={onClose} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-2">
                        {items.map((item) => (
                            <Reorder.Item
                                key={item._id}
                                value={item}
                                className="bg-[var(--background)] p-4 rounded-lg flex items-center gap-4 cursor-grab active:cursor-grabbing shadow-sm"
                            >
                                <GripVertical className="text-[var(--muted-foreground)]" />
                                <div>
                                    <h3 className="font-medium text-[var(--foreground)]">{item.title}</h3>
                                    <p className="text-xs text-[var(--muted-foreground)]">${item.price.toLocaleString()}</p>
                                </div>
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>

                <div className="p-6 flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose} className="text-[var(--foreground)]">Cancel</Button>
                    <Button onClick={() => onSave(items)} className="bg-[var(--primary)] text-[var(--primary-foreground)]">
                        Save Order
                    </Button>
                </div>
            </div>
        </div>
    )
}
