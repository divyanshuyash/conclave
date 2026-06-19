import { AwardsSection } from "@/components/AwardsSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CommunitySection } from "@/components/CommunitySection";
import { EventInfoStrip } from "@/components/EventInfoStrip";
import { EventJourney } from "@/components/EventJourney";
import { ExperienceCards } from "@/components/ExperienceCards";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MindMapSection } from "@/components/MindMapSection";
import { PricingSection } from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { VenueSection } from "@/components/VenueSection";
import { WhoShouldAttend } from "@/components/WhoShouldAttend";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EventInfoStrip />
        <CountdownTimer />
        <MindMapSection />
        <AwardsSection />
        <EventJourney />
        <WhoShouldAttend />
        <ExperienceCards />
        <CommunitySection />
        <Testimonials />
        <VenueSection />
        <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 pt-4 md:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <PricingSection />
          <FAQSection />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
