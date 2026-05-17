import type { Fiesta } from "@/types/fiesta";

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** nth weekday of a month. weekday: 0=Sun..6=Sat. n: 1-based. */
function nthWeekdayOfMonth(year: number, month0: number, weekday: number, n: number): Date {
  const first = new Date(year, month0, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, month0, 1 + offset + (n - 1) * 7);
}

function lastWeekdayOfMonth(year: number, month0: number, weekday: number): Date {
  const last = new Date(year, month0 + 1, 0);
  const offset = (last.getDay() - weekday + 7) % 7;
  return new Date(year, month0, last.getDate() - offset);
}

/** Returns display label + sortable date (null = unknown/movable). */
export function getFiestaDate(f: Fiesta, year = new Date().getFullYear()): {
  label: string;
  shortLabel: string;
  sortDate: Date | null;
} {
  if (f.dateType === "movable" || f.month === null) {
    return { label: "Movable date", shortLabel: "Movable", sortDate: null };
  }
  const monthName = MONTHS[f.month - 1];
  if (f.dateType === "fixed" && f.day) {
    const d = new Date(year, f.month - 1, f.day);
    const label = d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    return { label, shortLabel: label, sortDate: d };
  }
  if (f.dateType === "first-saturday") {
    const d = nthWeekdayOfMonth(year, f.month - 1, 6, 1);
    return {
      label: `First Saturday of ${monthName} (${d.toLocaleDateString("en-US", { month: "short", day: "numeric" })})`,
      shortLabel: `First Sat of ${monthName}`,
      sortDate: d,
    };
  }
  if (f.dateType === "last-saturday") {
    const d = lastWeekdayOfMonth(year, f.month - 1, 6);
    return {
      label: `Last Saturday of ${monthName} (${d.toLocaleDateString("en-US", { month: "short", day: "numeric" })})`,
      shortLabel: `Last Sat of ${monthName}`,
      sortDate: d,
    };
  }
  return { label: monthName, shortLabel: monthName, sortDate: new Date(year, f.month - 1, 1) };
}
