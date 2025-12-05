"use client";

import Link from "next/link";
import { User, ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-50 bg-transparent">
            <div className="container mx-auto px-4 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center">
                    <img src="/assets/Logo.png" alt="Rheemaa Logo" className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full shadow-sm" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {["Home", "About", "Furniture", "Testimonial", "Blog"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white/50 transition-colors bg-white/30">
                        <User className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white/50 transition-colors bg-white/30">
                        <ShoppingBag className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="hidden sm:flex w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-200 items-center justify-center hover:bg-white/50 transition-colors bg-white/30">
                        <Search className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                        className="md:hidden w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white/50 transition-colors bg-white/30"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-lg mx-2"
                    >
                        <nav className="flex flex-col p-4 gap-3">
                            {["Home", "About", "Furniture", "Testimonial", "Blog"].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-base font-medium text-gray-600 hover:text-brand-green transition-colors block py-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
