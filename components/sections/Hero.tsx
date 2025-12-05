"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import Image from "next/image";

export function Hero() {
    return (
        <>
            <section className="relative h-[85vh] lg:h-screen lg:max-h-[95vh] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/assets/Logo1.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center z-0"
                />

                {/* Gradient overlay - stronger on mobile for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white/95 via-white/70 to-white/30 lg:from-white/85 lg:via-white/40 lg:to-transparent z-[1]" />

                {/* Header */}
                <div className="relative z-20">
                    <Header />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 lg:px-9 relative z-10 h-[calc(100%-80px)] flex flex-col lg:py-14 py-8">
                    <div className="max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
                                Furnish your dream<br />with our furniture!
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                                Unleash your creativity with our versatile furniture options.
                                Experience comfort and quality with our furniture.
                            </p>
                            <div className="flex gap-3 justify-center lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-brand-green text-white text-sm px-8 sm:px-12 py-3 sm:py-3.5 rounded-full font-medium shadow-lg shadow-brand-green/30"
                                >
                                    Buy Now
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="border-2 border-brand-green text-brand-green text-sm px-8 sm:px-12 py-3 sm:py-3.5 rounded-full font-medium bg-white/80 backdrop-blur"
                                >
                                    Explore
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Bar - Hidden on mobile, shown on desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-0 right-0 w-[70%] max-w-3xl z-20 hidden lg:block"
                >
                    <div className="py-[1rem] px-[1rem] pb-0 pr-0 rounded-2xl rounded-bl-[0px] bg-white rounded-tr-[0px]">
                        <div className="bg-brand-green rounded-2xl rounded-bl-0 py-8 px-6 lg:px-10 grid grid-cols-3 gap-4 shadow-xl">
                            <div className="text-white text-left flex gap-4">
                                <span className="text-2xl font-bold">975+</span>
                                <p className="text-[10px] lg:text-xs text-white/70 mt-0.5">
                                    Furniture and<br />Home Equipment
                                </p>
                            </div>
                            <div className="text-white text-left flex gap-4 border-l border-white/20 pl-4 lg:pl-6">
                                <span className="text-2xl font-bold">320+</span>
                                <p className="text-[10px] lg:text-xs text-white/70 mt-0.5">
                                    Fresh Interior<br />design Theme
                                </p>
                            </div>
                            <div className="text-white text-left border-l flex gap-4 border-white/20 pl-4 lg:pl-6">
                                <span className="text-2xl font-bold">462+</span>
                                <p className="text-[10px] lg:text-xs text-white/70 mt-0.5">
                                    Happy Client<br />More Of This
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Mobile Stats Bar - Full width, shown only on mobile */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:hidden mt-4"
            >
                <div className="bg-brand-green rounded-2xl py-6 px-4 grid grid-cols-3 gap-2 shadow-xl">
                    <div className="text-white text-center">
                        <span className="text-xl sm:text-2xl font-bold block">975+</span>
                        <p className="text-[9px] sm:text-[10px] text-white/70 mt-1">
                            Furniture &<br />Equipment
                        </p>
                    </div>
                    <div className="text-white text-center border-l border-white/20">
                        <span className="text-xl sm:text-2xl font-bold block">320+</span>
                        <p className="text-[9px] sm:text-[10px] text-white/70 mt-1">
                            Interior<br />Themes
                        </p>
                    </div>
                    <div className="text-white text-center border-l border-white/20">
                        <span className="text-xl sm:text-2xl font-bold block">462+</span>
                        <p className="text-[9px] sm:text-[10px] text-white/70 mt-1">
                            Happy<br />Clients
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
