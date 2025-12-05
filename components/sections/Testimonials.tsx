"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Interior Designer",
        content:
            "Rheema Furniture transformed my living space. The quality is unmatched and the design is exactly what I was looking for.",
        avatar: "/assets/uploaded_image_0_1764896399166.jpg",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Architect",
        content:
            "I recommend Rheema to all my clients. Their modern collection fits perfectly with contemporary home designs.",
        avatar: "/assets/uploaded_image_1_1764896399166.jpg",
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Homeowner",
        content:
            "Great customer service and fast delivery. The sofa is so comfortable, my family loves it!",
        avatar: "/assets/uploaded_image_2_1764896399166.jpg",
    },
];

export function Testimonials() {
    return (
        <section id="testimonial" className="bg-brand-light py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-green font-bold tracking-wider uppercase text-sm">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
