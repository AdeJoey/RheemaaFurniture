"use client";

import { Sofa, Headphones, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        icon: Sofa,
        title: "Unbeatable Selection",
        description: "Choose from a vast range of premium materials and endless color options.",
    },
    {
        icon: Headphones,
        title: "Expert Customer Service",
        description: "Access a library of the available furniture and choose what fits your style.",
    },
    {
        icon: Sparkles,
        title: "Amazing Value Every Day",
        description: "Offers within to see all the available updates and templates and choose.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-4 mt-4">
            {/* Top Row - Image and Text */}
            <div className="bg-white rounded-3xl p-6 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[220px] lg:h-[280px] rounded-2xl overflow-hidden"
                >
                    <Image
                        src="/assets/dining.png"
                        alt="Interior Design"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                        What Makes Us<br />Different From Others
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                        Unleash your creativity with our versatile furniture options.
                        Experience comfort and quality with our furniture.
                    </p>
                    <p className="text-sm text-gray-500 mb-5">
                        Unleash your creativity with our versatile furniture options.
                        Experience comfort and quality with satisfaction.
                    </p>
                    <button className="bg-brand-dark text-white text-sm px-5 py-2.5 rounded-full hover:bg-brand-green transition-colors">
                        Know More About Us
                    </button>
                </motion.div>
            </div>

            {/* Bottom Row - 3 Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-3xl p-5 text-center"
                    >
                        <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <feature.icon className="w-6 h-6 text-brand-green" />
                        </div>
                        <h3 className="font-bold text-brand-dark text-sm mb-2">{feature.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
