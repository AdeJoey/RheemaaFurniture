"use client";

import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
    { id: 1, name: "Coffee Table", price: 125.00, image: "/assets/coffee_table.png" },
    { id: 2, name: "Entertaining", price: 25.00, image: "/assets/outdoor.png" },
    { id: 3, name: "Kitchen Table", price: 225.00, image: "/assets/dining.png" },
    { id: 4, name: "Sectionals", price: 95.00, image: "/assets/hero.png" },
    { id: 5, name: "Arm Chairs", price: 50.00, image: "/assets/chair.png" },
    { id: 6, name: "Leather", price: 139.00, image: "/assets/sofa.png" },
];

export function ProductShowcase() {
    return (
        <section className="py-4 mt-4 bg-white rounded-3xl p-4 sm:p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark">
                    Modern design For Any Budget
                </h2>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-xs bg-brand-green text-white px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                    VIEW ALL
                </motion.button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group"
                    >
                        <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3 bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur text-[10px] sm:text-xs px-2 py-1 rounded-full text-gray-600">
                                {product.name}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-brand-green font-bold text-base sm:text-lg">
                                ${product.price.toFixed(2)}
                            </span>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-green/30"
                            >
                                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
