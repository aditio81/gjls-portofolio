"use client";

import { useState, useEffect } from "react";
import { eventsHero } from "@/lib/data";

export default function EventsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State untuk posisi vertikal per slide
  const [positions, setPositions] = useState(
    eventsHero.banners.map((banner) => banner.verticalPosition || 50)
  );

  // Auto-rotate setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventsHero.banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Update posisi untuk slide aktif
  const handlePositionChange = (value: number) => {
    const newPositions = [...positions];
    newPositions[currentSlide] = value;
    setPositions(newPositions);
  };

  return (
    <section className="bg-gjls-white bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        
        {/* Judul & Subtitle di ATAS */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gjls-black text-2xl">★</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gjls-black">
              {eventsHero.title}
            </h1>
            <span className="text-gjls-black text-2xl">★</span>
          </div>
          <p className="font-body text-base text-gray-600 max-w-2xl mx-auto">
            {eventsHero.subtitle}
          </p>
        </div>

      </div>

      {/* Carousel Banner */}
      <div className="relative h-100 md:h-160 overflow-hidden">
        
        {/* Slides */}
        {eventsHero.banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {banner.src ? (
              <img 
                src={banner.src} 
                alt={`GJLS Event ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: `center ${positions[index]}%` }}
              />
            ) : (
              <div className="w-full h-full bg-gjls-cream flex items-center justify-center">
                <span className="font-display font-bold text-gjls-black text-2xl">
                  BANNER {index + 1}
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Dots Indicator - Fixed di Kanan Bawah */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-10">
          {eventsHero.banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border-2 border-gjls-black transition-all ${
                index === currentSlide 
                  ? 'bg-gjls-pink scale-125' 
                  : 'bg-white hover:bg-gjls-cream'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + eventsHero.banners.length) % eventsHero.banners.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-gjls-black rounded-full flex items-center justify-center font-bold text-gjls-black shadow-brutal hover:-translate-x-0.5 hover:shadow-brutal-sm transition-all z-10"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % eventsHero.banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-gjls-black rounded-full flex items-center justify-center font-bold text-gjls-black shadow-brutal hover:translate-x-0.5 hover:shadow-brutal-sm transition-all z-10"
        >
          ›
        </button>

      </div>
    </section>
  );
}