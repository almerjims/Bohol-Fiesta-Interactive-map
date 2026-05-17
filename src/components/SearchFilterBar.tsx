import { Search } from "lucide-react";
import { MONTHS } from "@/lib/format";

interface Props {
  query: string;
  onQuery: (v: string) => void;
  month: number | "all";
  onMonth: (v: number | "all") => void;
  sortUpcoming: boolean;
  onSortUpcoming: (v: boolean) => void;
}

export function SearchFilterBar({
  query, onQuery, month, onMonth, sortUpcoming, onSortUpcoming,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center bg-card border border-border rounded-2xl p-3 shadow-[var(--shadow-card)]">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search by town name…"
          className="w-full rounded-xl bg-background border border-border pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
      </div>
      <select
        value={month}
        onChange={(e) => onMonth(e.target.value === "all" ? "all" : Number(e.target.value))}
        className="rounded-xl bg-background border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <option value="all">All months</option>
        {MONTHS.map((m, i) => (
          <option key={m} value={i + 1}>{m}</option>
        ))}
      </select>
      <button
        onClick={() => onSortUpcoming(!sortUpcoming)}
        className={`rounded-xl px-4 py-2.5 text-sm font-medium border transition ${
          sortUpcoming
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background text-foreground border-border hover:bg-secondary"
        }`}
      >
        Upcoming first
      </button>
    </div>
  );
}
