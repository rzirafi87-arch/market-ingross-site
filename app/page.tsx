import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeatureStrip } from "@/components/sections/feature-strip";
import { FlyerSection } from "@/components/sections/flyer-section";
import { OffersSection } from "@/components/sections/offers-section";
import { ValueSection } from "@/components/sections/value-section";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { StoresSection } from "@/components/sections/stores-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CommunitySection } from "@/components/sections/community-section";
import { CareersSection } from "@/components/sections/careers-section";

export default function HomePage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureStrip />
        <FlyerSection />
        <OffersSection />
        <ValueSection />
        <DepartmentsSection />
        <StoresSection />
        <TestimonialsSection />
        <CommunitySection />
        <CareersSection />
      </main>
      <SiteFooter />
    </div>
  );
}
