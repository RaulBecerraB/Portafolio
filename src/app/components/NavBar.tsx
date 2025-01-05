"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export function NavBar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 bg-tertiary p-4 flex items-center justify-between transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} z-50`}>
            <div className="text-primary font-bold text-xl">{"< Raúl Becerra />"}</div>
            <div className="flex justify-center flex-1">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className="mx-2 text-primary hover:text-secondary transition-colors"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <h2 className="ml-auto font-semibold text-primary border-primary">
                🚧 UNDER CONSTRUCTION 🚧
            </h2>
        </nav>
    )
}

