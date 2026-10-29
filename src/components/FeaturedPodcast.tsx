"use client";

import { featuredPodcast } from "@/lib/data";

export default function FeaturedPodcast() {
  return (
    <section className="px-6 md:px-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden p-6 md:p-8">
          
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* KIRI: Thumbnail + Quote + CTA (lebih kecil) */}
            <div className="lg:w-5/12 flex flex-col gap-4">
              
              {/* Thumbnail dengan Border Sendiri */}
              <div className="border-4 border-gjls-black rounded-lg overflow-hidden">
                {featuredPodcast.thumbnail ? (
                  <img 
                    src={featuredPodcast.thumbnail} 
                    alt={featuredPodcast.title}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gjls-cream flex items-center justify-center font-display font-bold text-gjls-black">
                    PODCAST THUMBNAIL
                  </div>
                )}
              </div>

              {/* Quote Box dengan Border Sendiri */}
              <div className="border-4 border-gjls-black rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 bg-gjls-pink border-2 border-gjls-black rounded-md flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">"</span>
                  </div>
                  <p className="font-display text-lg md:text-xl font-bold text-gjls-black leading-tight">
                    "{featuredPodcast.quote.text}"
                  </p>
                </div>
                
                {/* Garis Putus-putus */}
                <div className="border-t-2 border-dashed border-gjls-black my-3" />
                
                <div className="flex justify-between items-center">
                  <p className="font-body text-[10px] text-gray-600 uppercase tracking-wider">
                    {featuredPodcast.quote.author}
                  </p>
                  <span className="px-3 py-1 bg-gjls-yellow border-2 border-gjls-black rounded-md font-display font-bold text-xs">
                    {featuredPodcast.quote.year}
                  </span>
                </div>
              </div>

              {/* CTA Button Full Width */}
              <a 
                href={featuredPodcast.ctaLink}
                className="block px-6 py-4 bg-gjls-pink text-white font-display font-bold text-sm border-4 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all text-center"
              >
                {featuredPodcast.ctaText} ↗
              </a>
            </div>

            {/* KANAN: Info + Stats (lebih besar) */}
            <div className="lg:w-7/12 flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPodcast.badges.map((badge, idx) => (
                  <span 
                    key={idx}
                    className={`px-4 py-1.5 border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm ${
                      idx === 0 ? 'bg-gjls-yellow text-gjls-black' : 'bg-gjls-pink text-white'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mb-4">
                {featuredPodcast.title}
              </h2>

              {/* Description */}
              <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                {featuredPodcast.description}
              </p>

              {/* Stats Grid 2x2 */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {featuredPodcast.stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className={`border-2 border-gjls-black rounded-lg p-4 ${
                      idx === 3 ? 'bg-gjls-yellow' : 'bg-white'
                    }`}
                  >
                    <p className="font-body text-[10px] font-bold text-gjls-black uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className={`font-display text-2xl font-bold ${
                      idx === 1 ? 'text-gjls-yellow' : 
                      idx === 2 ? 'text-gjls-pink' : 
                      'text-gjls-black'
                    }`}>
                      {stat.value} {stat.icon}
                    </p>
                    <p className="font-body text-[10px] text-gray-600 uppercase mt-1">
                      {stat.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}