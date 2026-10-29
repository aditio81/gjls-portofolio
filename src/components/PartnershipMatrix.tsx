"use client";

import Badge from "./Badge";
import { availabilityMatrix, partnershipStats } from "@/lib/data";

export default function PartnershipMatrix() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <Badge text="SLOT & AVAILABILITY MATRIX" variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            CARA BRAND MENUMPANG DI KONTEN KAMI
          </h2>
        </div>

        {/* Tabel Matrix */}
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden mb-12 overflow-x-auto">
          <table className="w-full min-w-200">
            <thead>
              <tr className="bg-gjls-cream border-b-4 border-gjls-black">
                {availabilityMatrix.headers.map((header, idx) => (
                  <th 
                    key={idx}
                    className="px-4 py-3 font-display font-bold text-xs text-gjls-black uppercase text-center border-r-2 border-gjls-black last:border-r-0"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {availabilityMatrix.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b-2 border-gjls-black last:border-b-0">
                  {/* Nama Program IP */}
                  <td className="px-4 py-3 font-display font-bold text-sm text-gjls-black border-r-2 border-gjls-black">
                    {row.ip}
                  </td>
                  {/* Slots */}
                  {row.slots.map((slot, slotIdx) => (
                    <td 
                      key={slotIdx}
                      className="px-4 py-3 text-center border-r-2 border-gjls-black last:border-r-0"
                    >
                      {slot === "check" ? (
                        <div className="w-6 h-6 bg-gjls-teal border-2 border-gjls-black rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      ) : slot === "open" ? (
                        <span className="inline-block px-2 py-1 bg-gjls-yellow border-2 border-gjls-black rounded font-display font-bold text-[10px]">
                          SLOT TERBUKA
                        </span>
                      ) : (
                        <span className="text-gray-300 text-lg">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {partnershipStats.map((stat, idx) => (
            <div 
              key={idx}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gjls-pink mb-2">
                {stat.value}
              </p>
              <p className="font-body text-xs text-gjls-black font-bold uppercase leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}