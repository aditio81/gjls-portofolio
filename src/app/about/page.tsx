"use client";

import AboutHero from "@/components/AboutHero";
import AboutTimeline from "@/components/AboutTimeline";
import AboutFounders from "@/components/AboutFounders";
import AboutCrew from "@/components/AboutCrew";
import PartnershipCTA from "@/components/PartnershipCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      <AboutHero />
      <AboutTimeline />
      <AboutFounders />
      <AboutCrew />
      <PartnershipCTA />
    </main>
  );
}