"use client"

import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting))
        })

        const currentElement = domRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])

    return (
        <div
            ref={domRef}
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}