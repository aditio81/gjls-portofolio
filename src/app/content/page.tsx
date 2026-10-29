"use client";

import ContentHero from "@/components/ContentHero";
import FeaturedPodcast from "@/components/FeaturedPodcast";
import FormatInventory from "@/components/FormatInventory";
import PremiumWorksSection from "@/components/PremiumWorksSection"; // ← TAMBAH INI
import ContentArchive from "@/components/ContentArchive";
import PartnershipCTA from "@/components/PartnershipCTA";

export default function ContentPage() {
  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      <ContentHero />
      <FeaturedPodcast />
      <FormatInventory />
      <PremiumWorksSection /> {/* ← LETAKKAN DI SINI */}
      <ContentArchive />
      <PartnershipCTA />
    </main>
  );
}