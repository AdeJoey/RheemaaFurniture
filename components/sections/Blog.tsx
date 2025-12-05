"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const blogs = [
    {
        id: 1,
        title: "How to choose the right furniture for your home",
        date: "Oct 24, 2023",
        category: "Tips & Tricks",
        image: "/assets/uploaded_image_0_1764896399166.jpg",
    },
    {
        id: 2,
        title: "The best interior design trends of 2024",
        date: "Nov 12, 2023",
        category: "Trends",
        image: "/assets/uploaded_image_1_1764896399166.jpg",
    },
    {
        id: 3,
        title: "Why comfort is key when selecting a sofa",
        date: "Dec 05, 2023",
        category: "Guides",
        image: "/assets/uploaded_image_2_1764896399166.jpg",
    },
];

export function Blog() {
    return (
        <section id="blog" className="container mx-auto px-4 py-20">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-brand-green font-bold tracking-wider uppercase text-sm">
                        Our Blog
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
                        Latest News & Articles
                    </h2>
                </div>
                <Button variant="outline" className="hidden md:flex rounded-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                    View All Posts
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="group cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-brand-dark uppercase">
                                {blog.category}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-green transition-colors line-clamp-2">
                            {blog.title}
                        </h3>

                        <div className="flex items-center gap-2 text-brand-dark font-medium group-hover:gap-3 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 md:hidden flex justify-center">
                <Button variant="outline" className="rounded-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                    View All Posts
                </Button>
            </div>
        </section>
    );
}
