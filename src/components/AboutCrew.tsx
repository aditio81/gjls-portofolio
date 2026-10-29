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

        {/* === TAB CONTAINER (PILL TERPISAH) === */}
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden mb-6">
          <div className="flex flex-nowrap bg-gjls-cream">
            {crewTabs.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1 px-4 md:px-6 py-3 font-display font-bold text-sm transition-all flex items-center justify-center gap-2
                    ${idx !== crewTabs.length - 1 ? 'border-r-2 border-gjls-black' : ''}
                    ${isActive 
                      ? 'bg-gjls-pink text-white' 
                      : 'bg-white text-gjls-black hover:bg-gjls-cream'}
                  `}
                >
                  {/* === INLINE SVG ICONS === */}
                  <span className="md:hidden flex items-center justify-center">
                    {tab.id === "creative" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* TEMPEL PATH SVG CREATIVE KAMU DI SINI, pastikan fill="currentColor" */}
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {tab.id === "production" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* TEMPEL PATH SVG PRODUCTION KAMU DI SINI, pastikan fill="currentColor" */}
                        <path d="M2 3H22V21H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 7H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {tab.id === "management" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* TEMPEL PATH SVG MANAGEMENT KAMU DI SINI, pastikan fill="currentColor" */}
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.4 15C19.2667 15.3333 18.8 16.2 18.2 16.8C17.6 17.4 16.7333 17.8667 16.4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.6 19.4C14.2667 19.2667 13.4 18.8 12.8 18.2C12.2 17.6 11.7333 16.7333 11.6 16.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.6 9C4.73333 8.66667 5.2 7.8 5.8 7.2C6.4 6.6 7.26667 6.13333 7.6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.4 4.6C9.73333 4.73333 10.6 5.2 11.2 5.8C11.8 6.4 12.2667 7.26667 12.4 7.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>

                  {/* Teks untuk Desktop */}
                  <span className="hidden md:block">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* === GRID CONTAINER === */}
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {activeData?.members.map((member, idx) => (
              <div 
                key={idx}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-4 md:p-6 flex flex-col items-center text-center hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
              >
                <span className="w-full md:w-auto px-4 py-1.5 bg-gjls-teal text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm mb-3">
                  {member.role}
                </span>

                <div className="hidden md:block w-full aspect-4/6 bg-gray-100 border-2 border-gjls-black rounded-lg overflow-hidden mb-3">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-gray-400 text-sm">
                      {member.name}
                    </div>
                  )}
                </div>

                <span className="w-full md:w-auto px-4 py-1.5 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
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