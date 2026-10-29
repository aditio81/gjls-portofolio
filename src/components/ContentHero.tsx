"use client";

import Badge from "./Badge";
import { contentHero } from "@/lib/data";

export default function ContentHero() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Badge text={contentHero.badge} variant="teal" icon="star" />
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gjls-black mt-6 leading-tight">
          {contentHero.title}
          <br />
          <span className="inline-block bg-gjls-yellow border-2 border-gjls-black px-4 py-2 rounded-lg shadow-brutal-sm mt-2">
            {contentHero.titleHighlight}
          </span>
        </h1>
      </div>
    </section>
  );
}