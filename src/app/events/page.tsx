"use client";

import EventsHero from "@/components/EventsHero";
import PortfolioSection from "@/components/PortfolioSection";
import PartnershipCTA from "@/components/PartnershipCTA";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      <EventsHero />
      <PortfolioSection />
      <PartnershipCTA />
    </main>
  );
}