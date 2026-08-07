"use client";

import { useEffect, useState } from "react";

const content = {
  fr: {
    live: "Session en cours",
    left: (n: number) => `${n} places encore disponibles`,
    reserved: "Une place vient d'être réservée",
  },
  ar: {
    live: "الدورة جارية حاليًا",
    left: (n: number) => `${n} أماكن متبقية فقط`,
    reserved: "تم للتو حجز مكان",
  },
};

export function SeatsCounter({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  const [seats, setSeats] = useState(3);
  const [justReserved, setJustReserved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeats((s) => (s > 1 ? s - 1 : s));
      setJustReserved(true);
      setTimeout(() => setJustReserved(false), 4000);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-destructive" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-destructive">
          {t.live}
        </span>
        <span className="text-xs text-foreground/70">·</span>
        <span className="text-xs font-semibold text-foreground">{t.left(seats)}</span>
      </div>
      {justReserved && (
        <p className="text-xs text-accent animate-pulse">{t.reserved}</p>
      )}
    </div>
  );
}
