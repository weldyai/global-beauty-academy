"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const content = {
  fr: {
    live: "Session en cours",
    left: (n: number) => `${n} place${n > 1 ? "s" : ""} disponible${n > 1 ? "s" : ""}`,
    reserved: "Une place vient d'être réservée",
    cta: "Réserver",
  },
  ar: {
    live: "الدورة جارية",
    left: (n: number) => `${n} أماكن متبقية`,
    reserved: "تم للتو حجز مكان",
    cta: "احجزي",
  },
};

export function FloatingSeatsBar({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  const [seats, setSeats] = useState(3);
  const [justReserved, setJustReserved] = useState(false);
  const hasReserved = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (hasReserved.current) return;
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && scrolled / max > 0.35) {
        hasReserved.current = true;
        setSeats((s) => (s > 1 ? s - 1 : s));
        setJustReserved(true);
        setTimeout(() => setJustReserved(false), 5000);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 z-50 flex flex-col items-center gap-2 ${lang === "ar" ? "left-4" : "right-4"}`}
    >
      <AnimatePresence>
        {justReserved && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="rounded-full bg-background/90 px-3 py-1 text-xs text-accent shadow-lg backdrop-blur"
          >
            {t.reserved}
          </motion.p>
        )}
      </AnimatePresence>
      <a
        href="https://wa.me/212666808222"
        className="flex cursor-pointer items-center gap-2 rounded-full border border-destructive/30 bg-background/95 py-2 pe-2 ps-3.5 shadow-xl shadow-black/20 backdrop-blur transition-transform hover:scale-105"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-destructive" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-destructive">
          {t.live}
        </span>
        <span className="text-xs text-foreground/50">·</span>
        <span className="text-xs font-semibold text-foreground">{t.left(seats)}</span>
        <span className="ms-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {t.cta}
        </span>
      </a>
    </div>
  );
}
