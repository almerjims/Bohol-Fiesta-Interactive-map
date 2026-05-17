import { lazy, Suspense, useEffect, useState } from "react";
import type { Fiesta } from "@/types/fiesta";

const FiestaMapInner = lazy(() =>
  import("./FiestaMapInner").then((m) => ({ default: m.FiestaMapInner }))
);

interface Props {
  fiestas: Fiesta[];
  focused: Fiesta | null;
}

export function FiestaMap(props: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="rounded-3xl overflow-hidden border border-border bg-muted h-[560px] animate-pulse" />
    );
  }
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl overflow-hidden border border-border bg-muted h-[560px] animate-pulse" />
      }
    >
      <FiestaMapInner {...props} />
    </Suspense>
  );
}
