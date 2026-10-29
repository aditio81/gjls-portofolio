"use client";

import Badge from "./Badge";
import Button from "./Button";
import Link from "next/link";
import { collaborations } from "@/lib/data";

export default function CollaborationsSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <Badge text="TAMU SPESIAL & KOLABORASI" variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            KAMI DI PANGGUNG ORANG LAIN
          </h2>
        </div>

        {/* List */}
        <div className="bg-white border-4 border-gjls-black shadow-brutal rounded-xl overflow-hidden">
          {collaborations.map((collab, index) => (
            <div 
              key={collab.id}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-4 ${
                index !== collaborations.length - 1 ? 'border-b-2 border-gjls-black' : ''
              }`}
            >
              {/* Left: Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 bg-gjls-yellow border-2 border-gjls-black rounded-full flex items-center justify-center shrink-0">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gjls-black">{collab.title}</h3>
                  <p className="font-body text-sm text-gray-600">{collab.description}</p>
                </div>
              </div>

              {/* Right: Buttons */}
              <div className="flex gap-3">
                <Link href={collab.subscribeLink}>
                  <Button variant="outline">LANGGANAN</Button>
                </Link>
                <Link href={collab.infoLink} target="_blank">
                  <Button variant="primary">CEK INFO ACARA ↗</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}