"use client";

import Badge from "./Badge";
import Button from "./Button";
import { aboutHero } from "@/lib/data";

export default function AboutHero() {
  return (
    <section className="py-32 px-6 md:px-24">
      {/* Container utama: max-w-[1280px] sesuai Figma */}
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
          
          {/* Kiri: Teks (mengambil sisa ruang) */}
          <div className="flex-1 min-w-0">
            <Badge text={aboutHero.badge} variant="teal" icon="star" />
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gjls-black mt-6 leading-[1.1]">
              DARI BERTAHAN HIDUP
              <br />
              <span className="inline-block bg-gjls-yellow border-2 border-gjls-black px-4 py-2 rounded-lg shadow-brutal-sm mt-4">
                MENJADI AHLI ABSURD DUNIA
              </span>
            </h1>
            
            <p className="font-body text-base md:text-lg text-gray-600 mt-6 leading-relaxed">
              {aboutHero.description}
            </p>
            
            <div className="mt-8">
              <Button variant="primary">
                {aboutHero.ctaText} ↓
              </Button>
            </div>
          </div>

          {/* Kanan: Foto Trio (FIXED SIZE sesuai Figma: 475×415) */}
          <div className="shrink-0">
            <div className="relative">
              {/* Background shape kuning */}
              <div className="absolute inset-0 bg-gjls-yellow rounded-full scale-110 -z-10" />
              {aboutHero.teamPhoto ? (
                <img 
                  src={aboutHero.teamPhoto} 
                  alt="Trio GJLS"
                  className="w-full h-auto object-contain relative z-10"
                />
              ) : (
                <div className="w-full h-auto bg-gjls-yellow border-4 border-gjls-black rounded-full flex items-center justify-center font-display font-bold text-gjls-black text-2xl">
                  FOTO TRIO
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}