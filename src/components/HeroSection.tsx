import hero from "@/assets/hero-bohol.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Bohol Chocolate Hills at sunset"
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-2xl animate-[pop-in_0.6s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium text-white border border-white/20">
            <Sparkles className="h-3.5 w-3.5" />
            Discover the soul of Bohol
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold text-white leading-[1.02]">
            FiestaMap
            <span className="block bg-[var(--gradient-sunset)] bg-clip-text text-transparent">
              Bohol
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
            Explore the vibrant town fiestas across Bohol — patron saints, street dances,
            and centuries-old traditions, all on one interactive map.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#map"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 hover:-translate-y-0.5 transition"
            >
              Explore Map <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#fiestas"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Browse Fiestas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
