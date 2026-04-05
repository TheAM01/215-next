"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Admin", href: "/contact/admin" },
    { name: "Contact Customer Sales", href: "/contact/customer-sales" },
    { name: "Contact Queries", href: "/contact/queries" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-white text-xl font-semibold tracking-tight">
                    <span className="font-extrabold">215</span>
                    <span className="text-white/60">Next</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm transition-all duration-200 relative ${active ? "text-white" : "text-white/50 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute left-0 -bottom-1 h-px bg-white transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {/* <Menu size={22} /> */}
                    ⇆
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="px-6 pb-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`text-sm ${pathname === link.href
                                    ? "text-white"
                                    : "text-white/50 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
