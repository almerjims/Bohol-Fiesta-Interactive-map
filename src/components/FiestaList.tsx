import { useMemo, useState } from "react";
import type { Fiesta, FiestaDateType } from "@/types/fiesta";
import { FiestaCard } from "./FiestaCard";
import { SearchFilterBar, type DateTypeFilter } from "./SearchFilterBar";
import { getFiestaDate } from "@/lib/format";

interface Props {
  fiestas: Fiesta[];
  onView: (f: Fiesta) => void;
}

export function FiestaList({ fiestas, onView }: Props) {
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState<number | "all">("all");
  const [dateType, setDateType] = useState<DateTypeFilter>("all");
  const [sortUpcoming, setSortUpcoming] = useState(true);

  const { dated, movable } = useMemo(() => {
    const today = new Date();
    const q = query.trim().toLowerCase();

    const matches = (f: Fiesta) => {
      const matchQ =
        !q ||
        f.town.toLowerCase().includes(q) ||
        f.festival.toLowerCase().includes(q) ||
        f.patron.toLowerCase().includes(q);
      const matchM = month === "all" || f.month === month;
      const matchT = dateType === "all" || f.dateType === (dateType as FiestaDateType);
      return matchQ && matchM && matchT;
    };

    const all = fiestas.filter(matches);
    const movable = all.filter((f) => f.dateType === "movable");
    let dated = all.filter((f) => f.dateType !== "movable");

    if (sortUpcoming) {
      dated = [...dated].sort((a, b) => {
        const da = getFiestaDate(a).sortDate?.getTime() ?? Infinity;
        const db = getFiestaDate(b).sortDate?.getTime() ?? Infinity;
        const t = today.getTime();
        const aFuture = da >= t;
        const bFuture = db >= t;
        if (aFuture && !bFuture) return -1;
        if (!aFuture && bFuture) return 1;
        return da - db;
      });
    } else {
      dated = [...dated].sort((a, b) => (a.month ?? 99) - (b.month ?? 99));
    }
    return { dated, movable };
  }, [fiestas, query, month, dateType, sortUpcoming]);

  const totalShown = dated.length + movable.length;

  return (
    <div className="space-y-10">
      <SearchFilterBar
        query={query}
        onQuery={setQuery}
        month={month}
        onMonth={setMonth}
        dateType={dateType}
        onDateType={setDateType}
        sortUpcoming={sortUpcoming}
        onSortUpcoming={setSortUpcoming}
      />

      {totalShown === 0 ? (
        <p className="text-center text-muted-foreground py-16">
          No fiestas match your filters.
        </p>
      ) : (
        <>
          {dated.length > 0 && (
            <section className="space-y-5">
              <header className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold">Scheduled Fiestas</h3>
                <span className="text-xs text-muted-foreground">{dated.length} celebrations</span>
              </header>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dated.map((f) => (
                  <FiestaCard key={f.id} fiesta={f} onView={onView} />
                ))}
              </div>
            </section>
          )}

          {movable.length > 0 && (
            <section className="space-y-5">
              <header className="flex items-baseline justify-between gap-3 border-t border-border pt-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Set by the parish
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold">Movable Fiestas</h3>
                </div>
                <span className="text-xs text-muted-foreground">{movable.length} celebrations</span>
              </header>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {movable.map((f) => (
                  <FiestaCard key={f.id} fiesta={f} onView={onView} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
