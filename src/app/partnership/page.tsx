"use client";

import PartnershipHero from "@/components/PartnershipHero";
import PartnershipFlexibility from "@/components/PartnershipFlexibility";
import PartnershipMatrix from "@/components/PartnershipMatrix";
import PartnershipForm from "@/components/PartnershipForm";

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      <PartnershipHero />
      <PartnershipFlexibility />
      <PartnershipMatrix />
      <PartnershipForm />
    </main>
  );
}