"use client";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ContentSchedule from "@/components/ContentSchedule";
import EventsSection from "@/components/EventsSection";
import MerchSection from "@/components/MerchSection";
import QuoteSection from "@/components/QuoteSection";
import PartnershipCTA from "@/components/PartnershipCTA";
import Link from "next/link";
import { whatsNewData } from "@/lib/data";
import StatsBar from "@/components/StatsBar";
import BrandPartners from "@/components/BrandPartners";

export default function Home() {
  const largeItem = whatsNewData.find((item) => item.type === "large");
  const smallItems = whatsNewData.filter((item) => item.type === "small");

  return (
    <main className="min-h-screen bg-gjls-white bg-dot-pattern">
      
      {/* === WRAPPER KONTEN UTAMA (Max Width) === */}
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        
        {/* --- HEADER HERO --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gjls-black leading-tight">SELAMAT DATANG DI</h1>
            <h1 className="bg-gjls-yellow border-3 rounded-2xl px-4 py-4 shadow-brutal-sm font-display text-4xl md:text-5xl font-bold text-gjls-black leading-tight">
              GJLS ENTERTAINMENT
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <Badge text="THE OFFICIAL HUB FOR ORANG BAEK" variant="teal" icon="star" />
            <Badge text="VERIFIED BY BASKARA PUTRA" variant="yellow" icon="check" />
          </div>
        </div>

        {/* --- KARTU BESAR: GJLS BERAPI-API --- */}
        {largeItem && (
          <div className="border-4 border-gjls-black shadow-brutal bg-gjls-cream mb-6 rounded-xl hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              <div className="border-b-4 md:border-b-0 md:border-r-4 border-gjls-black bg-gjls-white flex items-center justify-center overflow-hidden">
                {largeItem.image ? (
                  <img 
                    src={largeItem.image} 
                    alt={largeItem.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center font-display font-bold text-gjls-black">
                    POSTER FILM
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <Badge text={largeItem.category} variant="pink" />
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-gjls-black mt-4 mb-3 leading-tight">
                    {largeItem.title}
                  </h2>
                  <p className="font-body text-base text-gray-600 mb-4">
                    {largeItem.description}
                  </p>

                  {largeItem.synopsis && (
                    <div className="mb-6">
                      <p className="font-body text-xs font-bold text-gjls-black uppercase mb-2">Sinopsis</p>
                      <p className="font-body text-sm text-gray-700 leading-relaxed">
                        {largeItem.synopsis}
                      </p>
                    </div>
                  )}

                  {largeItem.movieDetails && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-dashed border-gjls-black">
                      <div>
                        <p className="font-body text-xs font-bold text-gjls-black uppercase">Sutradara</p>
                        <p className="font-body text-sm text-gray-600">{largeItem.movieDetails.sutradara}</p>
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-gjls-black uppercase">Pemain</p>
                        <p className="font-body text-sm text-gray-600">{largeItem.movieDetails.pemain}</p>
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-gjls-black uppercase">Genre</p>
                        <p className="font-body text-sm text-gray-600">{largeItem.movieDetails.genre}</p>
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-gjls-black uppercase">Durasi</p>
                        <p className="font-body text-sm text-gray-600">{largeItem.movieDetails.durasi}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {largeItem.ctaText && (
                    <Link href={largeItem.ctaLink} target="_blank">
                      <Button variant="tix">
                        {largeItem.ctaText}
                      </Button>
                    </Link>
                  )}
                  {largeItem.trailerLink && (
                    <Link href={largeItem.trailerLink} target="_blank">
                      <Button variant="youtube">
                        TONTON TRAILER
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      {/* --- GRID 2 KOLOM: MERCH & PODCAST --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smallItems.map((item) => (
          <div 
            key={item.id}
            className="border-4 border-gjls-black shadow-brutal bg-gjls-cream rounded-xl overflow-hidden hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
          >
            
            {/* ===== KARTU 1: MERCH DROP (Layout Horizontal) ===== */}
            {item.id === 2 && (
              <div className="flex flex-col md:flex-row h-full">
                {/* KIRI: Foto Besar */}
                <div className="md:w-2/5 bg-gjls-white border-b-4 md:border-b-0 md:border-r-4 border-gjls-black overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full min-h-62.5 object-cover"
                    />
                  ) : (
                    <div className="w-full h-full min-h-62.5 bg-gray-200 flex items-center justify-center font-display font-bold text-gjls-black">
                      IMG
                    </div>
                  )}
                </div>

                {/* KANAN: Teks */}
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="mb-4">
                    <Badge text={item.category} variant="yellow" />
                  </div>

                  <div className="grow mb-4">
                    <h2 className="font-display text-2xl font-bold text-gjls-black mb-2 leading-tight">
                      {item.title}
                    </h2>
                    <p className="font-body text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  {item.ctaText && (
                    <Link href={item.ctaLink}>
                      <Button variant="outline">
                        {item.ctaText}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* ===== KARTU 2: SLEDING TACKLE (Layout Vertikal Lama) ===== */}
            {item.id === 3 && (
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <Badge text={item.category} variant="teal" />
                  <div className="w-21 h-25 flex items-center justify-center font-display font-bold text-gjls-black rounded-lg overflow-hidden shrink-0">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs">IMG</span>
                    )}
                  </div>
                </div>

                <div className="grow mb-6">
                  <h2 className="font-display text-2xl font-bold text-gjls-black mb-2 leading-tight">
                    {item.title}
                  </h2>
                  <p className="font-body text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>

                {item.ctaText && (
                  <Link href={item.ctaLink}>
                    <Button variant="outline">
                      {item.ctaText}
                    </Button>
                  </Link>
                )}
              </div>
            )}

          </div>
        ))}
      </div>

      </div>
      {/* === AKHIR WRAPPER MAX-W-7XL === */}

      {/* === SECTION FULL WIDTH === */}
      <StatsBar />
      <BrandPartners />
      <StatsBar />
      <ContentSchedule />
      <EventsSection />
      <MerchSection />
      <QuoteSection />
      <PartnershipCTA />
      {/* === AKHIR SECTION FULL WIDTH === */}

    </main>
  );
}