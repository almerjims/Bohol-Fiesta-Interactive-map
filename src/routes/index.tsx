import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FiestaMap } from "@/components/FiestaMap";
import { FiestaList } from "@/components/FiestaList";
import { Footer } from "@/components/Footer";
import { fiestas } from "@/data/fiestas";
import type { Fiesta } from "@/types/fiesta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FiestaMap Bohol — Explore Bohol's Town Fiestas" },
      {
        name: "description",
        content:
          "Interactive map and guide to the patron saint fiestas of Bohol, Philippines. Discover dates, traditions, and locations across the island.",
      },
      { property: "og:title", content: "FiestaMap Bohol" },
      {
        property: "og:description",
        content: "Discover the vibrant town fiestas of Bohol on an interactive map.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [focused, setFocused] = useState<Fiesta | null>(null);

  const handleView = (f: Fiesta) => {
    setFocused(f);
    const el = document.getElementById("map");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        <section id="map" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Interactive Map
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">
                Fiestas across Bohol
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Tap a marker to discover each town's patron saint, festival date,
              and the story behind the celebration.
            </p>
          </div>
          <FiestaMap fiestas={fiestas} focused={focused} />
        </section>

        <section id="fiestas" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              All Fiestas
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">
              Browse the celebrations
            </h2>
          </div>
          <FiestaList fiestas={fiestas} onView={handleView} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
