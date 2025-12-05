"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { label: "Furniture and Home Equipment", value: 975, suffix: "+" },
    { label: "Fresh Interior design Theme", value: 320, suffix: "+" },
    { label: "Happy Client More Of This", value: 462, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-4xl lg:text-5xl font-bold text-white">
            {count}
            {suffix}
        </span>
    );
}

export function Stats() {
    return (
        <section className="container mx-auto px-4 -mt-20 relative z-20">
            <div className="bg-brand-green rounded-3xl p-8 lg:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center text-center md:items-start md:text-left"
                    >
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="text-sm lg:text-base text-white/80 mt-2 max-w-[150px]">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
