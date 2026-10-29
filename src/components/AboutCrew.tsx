"use client";

import { useState } from "react";
import { crewTabs, crewSection } from "@/lib/data";

export default function AboutCrew() {
  const [activeTab, setActiveTab] = useState("creative");
  const activeData = crewTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-24 px-6 md:px-12 bg-gjls-cream border-y-4 border-gjls-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Crew */}
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
          {/* Logo GJLS CREW (Lingkaran Teal) */}
        <div className="w-20 h-20 border-2 border-gjls-black rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white">
        {crewSection.logo ? (
            <img 
            src={crewSection.logo} 
            alt="GJLS Crew Logo"
            className="w-full h-full object-contain"
            />
        ) : (
            <span className="font-display font-bold text-gjls-teal text-xs text-center leading-tight">
            GJLS<br/>CREW
            </span>
        )}
        </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gjls-black mb-2">
              GJLS ENTERTAINMENT CREW
            </h2>
            <span className="inline-block px-4 py-1.5 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              PALUGADA artinya lu mau kalo gua apa juga gua bisa
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 mb-0">
          {crewTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 font-display font-bold text-sm border-2 border-gjls-black transition-all
                ${activeTab === tab.id 
                  ? 'bg-gjls-pink text-white border-b-white' 
                  : 'bg-white text-gjls-black hover:bg-gjls-cream'}
              `}
              style={{ 
                borderRadius: activeTab === tab.id ? '8px 8px 0 0' : '8px 8px 0 0',
                marginBottom: activeTab === tab.id ? '-2px' : '0'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Container Grid Crew (Putih dengan Border) */}
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-b-xl rounded-tr-xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {activeData?.members.map((member, idx) => (
                <div 
                key={idx}
                className="w-full max-w-70 border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-4 flex flex-col items-center text-center hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
                >
                {/* Role Badge di ATAS (Teal) */}
                <span className="inline-block px-4 py-1.5 bg-gjls-teal text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm mb-4">
                  {member.role}
                </span>

                {/* Foto Portrait */}
                <div className="w-full aspect-4/6 bg-gray-100 border-2 border-gjls-black rounded-lg overflow-hidden mb-4">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-gray-400 text-sm">
                      {member.name}
                    </div>
                  )}
                </div>

                {/* Nama Badge di BAWAH (Kuning) */}
                <span className="mt-auto px-4 py-1.5 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
                {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}