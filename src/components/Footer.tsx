import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="about" className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-sunset)] text-primary-foreground">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">FiestaMap Bohol</p>
            <p className="text-xs text-muted-foreground">A tourism guide to Bohol's town fiestas.</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Map data © OpenStreetMap contributors · Built with ❤ in the Philippines
        </p>
      </div>
    </footer>
  );
}
