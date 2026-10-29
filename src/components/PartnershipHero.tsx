"use client";

import Badge from "./Badge";
import Link from "next/link";
import { partnershipHero } from "@/lib/data";

export default function PartnershipHero() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Kiri: Teks */}
          <div className="flex-1">
            <Badge text={partnershipHero.badge} variant="teal" icon="star" />
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gjls-black mt-6 leading-tight">
              {partnershipHero.title}
            </h1>
            
            <p className="font-body text-base text-gray-600 mt-6 max-w-xl leading-relaxed">
              {partnershipHero.description}
            </p>
            
            <div className="mt-8">
              <Link href={partnershipHero.ctaLink}>
                <button className="px-6 py-4 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
                  {partnershipHero.ctaText} →
                </button>
              </Link>
            </div>
          </div>

            {/* Kanan: Foto Baskara */}
            <div className="flex-1 flex justify-center">
            {/* Foto dengan Background Kuning + Badge */}
            <div className="relative">
                {/* Badge Kanan Atas (Sekarang menempel ke foto) */}
                <div className="absolute -top-4 -right-4 z-20">
                <span className="px-4 py-2 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
                    KETUA UMUM KAMI
                </span>
                </div>

                {/* Background Kuning */}
                <div className="absolute inset-0 bg-gjls-yellow rounded-full scale-110 -z-10" />
                
                {partnershipHero.photo ? (
                <img 
                    src={partnershipHero.photo} 
                    alt="Baskara Putra"
                    className="w-full max-w-md relative z-10"
                />
                ) : (
                <div className="w-80 h-80 bg-gjls-yellow border-4 border-gjls-black rounded-full flex items-center justify-center font-display font-bold text-gjls-black text-2xl">
                    FOTO BASKARA
                </div>
                )}
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}