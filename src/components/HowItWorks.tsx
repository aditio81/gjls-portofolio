"use client";

import Badge from "./Badge";
import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  const icons = {
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    card: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    play: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Badge text={howItWorks.badge} variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            {howItWorks.title}
          </h2>
          <p className="font-body text-sm text-gray-600 mt-2 uppercase tracking-wider">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Grid 3 Langkah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.steps.map((step) => (
            <div 
              key={step.id}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gjls-yellow border-2 border-gjls-black rounded-full flex items-center justify-center mb-4">
                {icons[step.icon as keyof typeof icons]}
              </div>

              {/* Number + Title */}
              <h3 className="font-display text-2xl font-bold text-gjls-black mb-3">
                {step.number} {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}