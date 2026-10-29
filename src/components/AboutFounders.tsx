"use client";

import Badge from "./Badge";
import { founders,} from "@/lib/data";

export default function AboutFounders() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* KIRI: Badge + Foto Trio */}
          <div className="lg:w-5/12 flex flex-col items-center">
            <Badge text="The Co-Founder" variant="teal" icon="star" />
            
            <div className="mt-8 relative w-full max-w-md">
              {/* Background shape kuning */}
              <div className="absolute inset-0 bg-gjls-yellow rounded-full scale-105 -z-10" />
              {founders.teamPhoto ? (
                <img 
                  src={founders.teamPhoto} 
                  alt="Trio GJLS Co-Founders"
                  className="w-full h-auto object-contain relative z-10"
                />
              ) : (
                <div className="w-full aspect-square bg-gjls-yellow border-4 border-gjls-black rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-gjls-black text-2xl text-center px-8">
                    FOTO TRIO GJLS
                  </span>
                </div>
              )}
            </div>
          </div>

            {/* KANAN: Akronim + Deskripsi + Profil */}
            <div className="lg:w-7/12">
            
            {/* Akronim + Deskripsi Bersebelahan */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                
                {/* Akronim GJLS (Kiri) */}
                <div className="font-display font-bold text-2xl md:text-3xl text-gjls-black space-y-2 shrink-0">
                {founders.acronym.map((item) => (
                    <div key={item.letter} className="flex items-baseline gap-3">
                    <span className="text-gjls-pink text-3xl md:text-4xl">{item.letter}</span>
                    <span className="text-2xl md:text-3xl">{item.name}</span>
                    </div>
                ))}
                </div>

                {/* Deskripsi Perusahaan (Kanan) */}
                <div className="flex-1 border-l-4 border-gjls-black pl-4">
                <p className="font-body text-md text-gray-600 leading-relaxed">
                    {founders.companyDescription}
                </p>
                </div>

            </div>

            {/* Profil Co-Founders */}
            <div className="space-y-4">
              {founders.profiles.map((profile) => (
                <div 
                  key={profile.id}
                  className="border-4 border-gjls-black shadow-brutal bg-gjls-cream rounded-xl p-6 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
                >
                  <span className="inline-block px-4 py-1.5 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-sm shadow-brutal-sm mb-3">
                    {profile.name}
                  </span>
                  <p className="font-body text-sm text-gjls-black leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}