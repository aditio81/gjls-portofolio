"use client";

import DigitalCatalog from "@/components/DigitalCatalog";
import DigitalPass from "@/components/DigitalPass";
import HowItWorks from "@/components/HowItWorks";
import PartnershipCTA from "@/components/PartnershipCTA";

export default function DigitalPage() {
  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      <DigitalCatalog />
      <DigitalPass />
      <HowItWorks />
      <PartnershipCTA />
    </main>
  );
}