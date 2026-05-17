import type { Fiesta } from "@/types/fiesta";
import { getFiestaDate } from "@/lib/format";
import { Calendar, MapPin, Church } from "lucide-react";

interface Props {
  fiesta: Fiesta;
  onView: (f: Fiesta) => void;
}

export function FiestaCard({ fiesta, onView }: Props) {
  const { label } = getFiestaDate(fiesta);
  return (
    <article className="group flex flex-col rounded-3xl bg-card border border-border overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={fiesta.image}
          alt={fiesta.festival}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur px-3 py-1 text-xs font-medium text-foreground shadow-sm">
          <MapPin className="h-3 w-3 text-primary" /> {fiesta.town}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-snug">
          {fiesta.festival}
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            {label}
          </p>
          <p className="flex items-center gap-2">
            <Church className="h-3.5 w-3.5 text-primary" />
            {fiesta.patron}
          </p>
        </div>
        <p className="mt-3 text-sm text-foreground/75 line-clamp-3 leading-relaxed">
          {fiesta.description}
        </p>
        <button
          onClick={() => onView(fiesta)}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2.5 text-sm font-semibold transition-colors"
        >
          View on Map
        </button>
      </div>
    </article>
  );
}
