import { MapPin } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-sunset)] text-primary-foreground shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
            <MapPin className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            FiestaMap <span className="text-primary">Bohol</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#map" className="hover:text-foreground transition-colors">Map</a>
          <a href="#fiestas" className="hover:text-foreground transition-colors">Fiestas</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <a
          href="#map"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 transition"
        >
          Explore
        </a>
      </div>
    </header>
  );
}
