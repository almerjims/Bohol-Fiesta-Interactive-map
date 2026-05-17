import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { Fiesta } from "@/types/fiesta";
import { formatFiestaDate } from "@/lib/format";

// Fix default icon path issues and use custom divIcon
const fiestaIcon = L.divIcon({
  className: "fiesta-marker",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  popupAnchor: [0, -10],
});

function FlyTo({ target }: { target: { lat: number; lng: number } | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], 13, { duration: 1.2 });
  }, [target, map]);
  return null;
}

interface Props {
  fiestas: Fiesta[];
  focused: Fiesta | null;
}

export function FiestaMap({ fiestas, focused }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="rounded-3xl overflow-hidden border border-border bg-muted h-[560px] animate-pulse" />
    );
  }
  return (
    <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] bg-card">
      <MapContainer
        center={[9.85, 124.15]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "560px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyTo target={focused ? { lat: focused.latitude, lng: focused.longitude } : null} />
        {fiestas.map((f) => (
          <Marker key={f.id} position={[f.latitude, f.longitude]} icon={fiestaIcon}>
            <Popup>
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-primary">
                  {f.town}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground leading-tight">
                  {f.festival}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {formatFiestaDate(f.date)} · {f.patron}
                </p>
                <p className="mt-3 text-xs text-foreground/80 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
