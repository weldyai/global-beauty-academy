"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const content = {
  fr: {
    live: "Session en cours",
    left: (n: number) => `${n} place${n > 1 ? "s" : ""} disponible${n > 1 ? "s" : ""}`,
    reserved: "Une place vient d'être réservée",
    promo: "4 500 DH au lieu de 5 500 DH",
  },
  ar: {
    live: "الدورة جارية",
    left: (n: number) => `${n} أماكن متبقية`,
    reserved: "تم للتو حجز مكان",
    promo: "4500 درهم بدلاً من 5500 درهم",
  },
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.118 1.528 5.849L.073 23.927l6.235-1.435A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.656-.497-5.19-1.367l-.372-.216-3.7.852.878-3.592-.24-.384A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function FloatingSeatsBar({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  const isAr = lang === "ar";
  const [seats, setSeats] = useState(3);
  const [justReserved, setJustReserved] = useState(false);
  const [hidden, setHidden] = useState(false);
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

  useEffect(() => {
    const target = document.getElementById("sessions");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "-10% 0px -10% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const side = isAr ? "left" : "right";

  return (
    <>
      <AnimatePresence>
        {!hidden && (
          <motion.a
            href="https://wa.me/212666808222"
            initial={{ opacity: 0, x: isAr ? -12 : 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAr ? -12 : 12, pointerEvents: "none" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed z-50 w-[min(220px,calc(100vw-112px))] rounded-2xl border border-primary/25 bg-background/90 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-lg"
            style={{
              [side]: `calc(96px + env(safe-area-inset-${side}))`,
              bottom: "calc(24px + env(safe-area-inset-bottom))",
            } as React.CSSProperties}
          >
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-destructive" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-destructive">
                {t.live}
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground">{t.left(seats)}</p>
            <p className="text-xs font-medium text-primary">{t.promo}</p>
            <AnimatePresence>
              {justReserved && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-[11px] text-accent"
                >
                  {t.reserved}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.a>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/212666808222"
        aria-label="WhatsApp"
        className="wa-float fixed z-50 flex size-14 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
        style={{
          [side]: `max(20px, env(safe-area-inset-${side}))`,
          bottom: "calc(24px + env(safe-area-inset-bottom))",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
        } as React.CSSProperties}
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
