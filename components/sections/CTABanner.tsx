"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CTABanner() {
    return (
        <section className="py-4 mt-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-green rounded-3xl p-8 lg:p-10 relative overflow-hidden min-h-[280px] flex items-center"
            >
                {/* Left Content */}
                <div className="relative z-10 max-w-md">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Transform Your Home<br />with Our Stylish<br />Furniture!!!
                    </h2>
                    <p className="text-sm text-white/70 mb-5">
                        Shop Now and Discover Endless Possibilities for<br />your Living Space.
                    </p>
                    <button className="bg-white text-brand-dark text-sm px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        Shop Now
                    </button>
                </div>

                {/* Decorative Lines */}
                <div className="absolute right-[35%] top-1/2 -translate-y-1/2 hidden lg:flex gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-28 bg-white/20 rounded-full" />
                    ))}
                </div>

                {/* Chair Image */}
                <div className="absolute right-6 bottom-0 w-[160px] h-[200px] hidden lg:block">
                    <Image
                        src="/assets/chair.png"
                        alt="Stylish Chair"
                        fill
                        className="object-contain object-bottom"
                    />
                </div>
            </motion.div>
        </section>
    );
}
