"use client";

import Badge from "./Badge";
import { activeContentIPs } from "@/lib/data";

export default function ContentSchedule() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <Badge text="JADWAL TAYANG RUTIN" variant="teal" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4 leading-tight">
              KONTEN SERU YANG
              <br />
              MENEMANI DIRIMU
            </h2>
          </div>
          <a 
            href="/content"
            className="px-6 py-3 bg-gjls-pink text-white font-display font-bold border-2 border-gjls-black shadow-brutal rounded-full hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
          >
            LIHAT SEMUA KONTEN →
          </a>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeContentIPs.map((ip) => (
            <div
              key={ip.id}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
            >
            {/* Thumbnail */}
            <div className="w-full md:w-40 h-40 bg-white border-2 border-gjls-white rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
            {ip.thumbnail ? (
                <img 
                src={ip.thumbnail} 
                alt={ip.name}
                className="w-full h-full object-contain"
                />
            ) : (
                <span className="font-display font-bold text-gjls-black text-lg">
                {ip.name.split(' ')[0]}
                </span>
            )}
            </div>

              {/* Info */}
              <div className="grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-gjls-black mb-2">
                    {ip.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600 mb-4">
                    {ip.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-body text-sm font-bold text-gjls-black">
                  <span className="text-gjls-pink">📅</span>
                  {ip.schedule}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}