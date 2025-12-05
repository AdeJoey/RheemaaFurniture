"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Features() {
    return (
        <section className="py-4 mt-4">
            {/* Bento Grid - responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                {/* Large Card - Modern Furniture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 lg:row-span-2 bg-white rounded-3xl relative overflow-hidden min-h-[300px] lg:min-h-[480px]"
                >
                    {/* Full background image */}
                    <Image
                        src="/assets/dining.png"
                        alt="Modern Dining Room"
                        fill
                        className="object-cover"
                    />

                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent p-5 lg:p-6">
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mb-3">
                            Our Collection
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">
                            Modern<br />Furniture
                        </h2>
                    </div>

                    {/* Arrow button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute bottom-5 right-5 w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-brand-green transition-colors z-10 shadow-lg"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>

                {/* Top Right - Outdoor Seating */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-5 bg-white rounded-3xl relative overflow-hidden min-h-[200px] lg:min-h-[230px]"
                >
                    {/* Background image */}
                    <Image
                        src="/assets/outdoor.png"
                        alt="Outdoor Seating"
                        fill
                        className="object-cover"
                    />

                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent p-5">
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mb-2">
                            New Offer
                        </span>
                        <h3 className="text-xl font-bold text-brand-dark">Outdoor<br />Seating</h3>
                        <div className="mt-2">
                            <span className="text-2xl font-bold text-brand-dark">50%</span>
                            <span className="text-sm text-gray-500 ml-1">Discount</span>
                        </div>
                    </div>

                    {/* Arrow button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute bottom-4 right-4 w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-brand-green transition-colors z-10 shadow-lg"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>

                {/* Bottom Right - Comfort Zone Sofa (Green card) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 bg-brand-green rounded-3xl relative overflow-hidden min-h-[200px] lg:min-h-[230px]"
                >
                    {/* Sofa image on right side */}
                    <div className="absolute right-0 bottom-0 w-[60%] h-full">
                        <Image
                            src="/assets/sofa.png"
                            alt="Comfort Zone Sofa"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-5 h-full flex flex-col">
                        <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-2 w-fit">
                            Best Sales
                        </span>
                        <h3 className="text-xl font-bold text-white">Comfort<br />Zone Sofa</h3>
                        <p className="text-xs text-white/70 mt-2 max-w-[130px]">
                            Unleash your creativity with our versatile furniture options.
                        </p>
                    </div>

                    {/* Arrow button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute bottom-4 right-4 w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors z-10 shadow-lg"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
