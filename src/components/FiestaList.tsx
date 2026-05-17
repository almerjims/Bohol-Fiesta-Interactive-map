import { useMemo, useState } from "react";
import type { Fiesta } from "@/types/fiesta";
import { FiestaCard } from "./FiestaCard";
import { SearchFilterBar } from "./SearchFilterBar";

interface Props {
  fiestas: Fiesta[];
  onView: (f: Fiesta) => void;
}

export function FiestaList({ fiestas, onView }: Props) {
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState<number | "all">("all");
  const [sortUpcoming, setSortUpcoming] = useState(true);

  const filtered = useMemo(() => {
    const today = new Date();
    let list = fiestas.filter((f) => {
      const q = query.trim().toLowerCase();
      const matchQ = !q || f.town.toLowerCase().includes(q) || f.festival.toLowerCase().includes(q);
      const matchM = month === "all" || f.month === month;
      return matchQ && matchM;
    });

    if (sortUpcoming) {
      list = [...list].sort((a, b) => {
        const da = new Date(a.date).getTime();
        const db = new Date(b.date).getTime();
        const aFuture = da >= today.getTime();
        const bFuture = db >= today.getTime();
        if (aFuture && !bFuture) return -1;
        if (!aFuture && bFuture) return 1;
        return da - db;
      });
    } else {
      list = [...list].sort((a, b) => a.month - b.month);
    }
    return list;
  }, [fiestas, query, month, sortUpcoming]);

  return (
    <div className="space-y-8">
      <SearchFilterBar
        query={query}
        onQuery={setQuery}
        month={month}
        onMonth={setMonth}
        sortUpcoming={sortUpcoming}
        onSortUpcoming={setSortUpcoming}
      />
      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-16">
          No fiestas match your filters.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <FiestaCard key={f.id} fiesta={f} onView={onView} />
          ))}
        </div>
      )}
    </div>
  );
}
