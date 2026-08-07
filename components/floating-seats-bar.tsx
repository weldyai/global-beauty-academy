"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const content = {
  fr: {
    live: "Session en cours",
    left: (n: number) => `${n} place${n > 1 ? "s" : ""} disponible${n > 1 ? "s" : ""}`,
    reserved: "Une place vient d'être réservée",
    promo: "4 500 DH au lieu de 5 500 DH",
    cta: "Réserver",
  },
  ar: {
    live: "الدورة جارية",
    left: (n: number) => `${n} أماكن متبقية`,
    reserved: "تم للتو حجز مكان",
    promo: "4500 درهم بدلاً من 5500 درهم",
    cta: "احجزي",
  },
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0 fill-[#25D366]" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.79 2.4a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.7 8.25-8.25 8.25a8.24 8.24 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.71-8.25 8.29-8.25Zm-4.6 4.6c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.08s.9 2.41 1.02 2.58c.13.17 1.75 2.78 4.31 3.79 2.13.84 2.56.68 3.03.63.46-.04 1.49-.6 1.7-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8 1-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.44-.57-.44Z" />
    </svg>
  );
}

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
      className={`fixed bottom-4 z-50 flex flex-col items-end gap-2 ${lang === "ar" ? "left-4 items-start" : "right-4"}`}
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
        className="relative flex cursor-pointer items-center gap-3 rounded-2xl border border-destructive/40 bg-background/95 py-2.5 pe-3 ps-4 shadow-2xl shadow-destructive/10 backdrop-blur transition-transform hover:scale-105"
      >
        <span className="absolute -inset-px -z-10 animate-pulse rounded-2xl bg-destructive/10 [animation-duration:2s]" />
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-destructive" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-destructive">
              {t.live}
            </span>
            <span className="text-sm font-bold text-foreground">· {t.left(seats)}</span>
          </div>
          <span className="text-[11px] font-medium text-primary">{t.promo}</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
          <WhatsAppIcon />
          {t.cta}
        </span>
      </a>
    </div>
  );
}
