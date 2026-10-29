"use client";

import Badge from "./Badge";
import { milestones } from "@/lib/data";

export default function AboutTimeline() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gjls-cream border-y-4 border-gjls-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge text="MILESTONE" variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            PERJALANAN DARI KUYUP KE LAYAR LEBAR
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Garis Vertikal Tengah */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gjls-black -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={milestone.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Nomor di Tengah */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-gjls-pink border-2 border-gjls-black rounded-full  items-center justify-center font-display font-bold text-white shadow-brutal-sm z-10 hidden md:flex">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Kartu - Posisi Bergantian */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
                      <span className={`inline-block px-3 py-1 ${milestone.color} text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm mb-3`}>
                        {milestone.year} {milestone.badge}
                      </span>
                      <h3 className="font-display text-xl font-bold text-gjls-black mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-sm text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}