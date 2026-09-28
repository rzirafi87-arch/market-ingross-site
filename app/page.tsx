import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FlyerSection } from "@/components/sections/flyer-section";
import { StoresSection } from "@/components/sections/stores-section";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { ValueSection } from "@/components/sections/value-section";
import { NewsSection } from "@/components/sections/news-section";
import { EngagementCardsSection } from "@/components/sections/engagement-cards-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <FlyerSection />
        <StoresSection />
        <DepartmentsSection />
        <ValueSection />
        <NewsSection />
        <EngagementCardsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
