import { Search } from "lucide-react";
import { MONTHS } from "@/lib/format";

export type DateTypeFilter = "all" | "fixed" | "first-saturday" | "last-saturday" | "movable";

interface Props {
  query: string;
  onQuery: (v: string) => void;
  month: number | "all";
  onMonth: (v: number | "all") => void;
  dateType: DateTypeFilter;
  onDateType: (v: DateTypeFilter) => void;
  sortUpcoming: boolean;
  onSortUpcoming: (v: boolean) => void;
}

const DATE_TYPES: { value: DateTypeFilter; label: string }[] = [
  { value: "all", label: "All dates" },
  { value: "fixed", label: "Fixed date" },
  { value: "first-saturday", label: "First Saturday" },
  { value: "last-saturday", label: "Last Saturday" },
  { value: "movable", label: "Movable" },
];

export function SearchFilterBar({
  query, onQuery, month, onMonth, dateType, onDateType, sortUpcoming, onSortUpcoming,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:items-center bg-card border border-border rounded-2xl p-3 shadow-[var(--shadow-card)]">
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search by town, festival, or patron saint…"
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
      <select
        value={dateType}
        onChange={(e) => onDateType(e.target.value as DateTypeFilter)}
        className="rounded-xl bg-background border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {DATE_TYPES.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
      <button
        onClick={() => onSortUpcoming(!sortUpcoming)}
        className={`rounded-xl px-4 py-2.5 text-sm font-medium border transition whitespace-nowrap ${
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
