import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeatureStrip } from "@/components/sections/feature-strip";
import { FlyerSection } from "@/components/sections/flyer-section";
import { OffersSection } from "@/components/sections/offers-section";
import { ValueSection } from "@/components/sections/value-section";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { StoresSection } from "@/components/sections/stores-section";
import { InstitutionalSliderSection } from "@/components/sections/institutional-slider-section";
import { EngagementCardsSection } from "@/components/sections/engagement-cards-section";
import { getActiveManifestoImageFromDisk } from "@/lib/manifesto-server";

export default function HomePage() {
  const activeManifestoImage = getActiveManifestoImageFromDisk();

  return (
    <div className="mi-page-bg min-h-screen text-slate-900">
      <SiteHeader />
      <main className="mi-page-bg">
        <HeroSection manifestoImage={activeManifestoImage} />
        <FeatureStrip />
        <FlyerSection />
        <OffersSection />
        <ValueSection />
        <DepartmentsSection />
        <InstitutionalSliderSection />
        <StoresSection />
        <EngagementCardsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
