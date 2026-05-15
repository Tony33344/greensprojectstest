import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
}
