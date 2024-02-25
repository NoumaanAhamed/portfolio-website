import { StickyScrollRevealDemo } from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <StickyScrollRevealDemo />
      {/* <SkillsSection /> */}
      <InfiniteMovingCardsDemo />
    </main>

  );
}
