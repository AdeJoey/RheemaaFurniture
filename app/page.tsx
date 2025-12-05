import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <ProductShowcase />
      <WhyChooseUs />
      <CTABanner />
    </div>
  );
}
