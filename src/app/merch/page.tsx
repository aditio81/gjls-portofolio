"use client";

import MerchCatalog from "@/components/MerchCatalog";
import PartnershipCTA from "@/components/PartnershipCTA";

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      <MerchCatalog />
      <PartnershipCTA />
    </main>
  );
}