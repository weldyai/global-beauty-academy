"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "#formations", fr: "Formations", ar: "التكوينات" },
  { href: "#sessions", fr: "Tarifs", ar: "الأسعار" },
  { href: "#pourquoi", fr: "Pourquoi GBA", ar: "لماذا GBA" },
  { href: "#temoignages", fr: "Témoignages", ar: "آراء الخريجات" },
  { href: "#faq", fr: "FAQ", ar: "الأسئلة الشائعة" },
  { href: "#contact", fr: "Contact", ar: "اتصلي بنا" },
];

const onlineLink = { fr: "/formation-maquillage-en-ligne", ar: "/ar/formation-maquillage-en-ligne" };

function LanguageSwitch({ lang }: { lang: "fr" | "ar" }) {
  const isAr = lang === "ar";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const frPath = isAr ? pathname.replace(/^\/ar/, "") || "/" : pathname;
  const arPath = isAr ? pathname : `/ar${pathname === "/" ? "" : pathname}`;

  function setLangCookie(value: "fr" | "ar") {
    document.cookie = `gba-lang=${value}; max-age=${60 * 60 * 24 * 365}; path=/`;
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={isAr ? "تغيير اللغة" : "Changer de langue"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/20 text-foreground transition-colors hover:text-primary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
        </svg>
      </button>
      {open && (
        <div
          className={`absolute top-12 z-50 flex min-w-28 flex-col overflow-hidden rounded-2xl border border-primary/15 bg-background/95 py-1 shadow-2xl backdrop-blur-md ${isAr ? "left-0" : "right-0"}`}
        >
          <Link
            href={frPath}
            onClick={() => {
              setLangCookie("fr");
              setOpen(false);
            }}
            className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${!isAr ? "text-primary" : "text-foreground/80"}`}
          >
            Français
          </Link>
          <Link
            href={arPath}
            onClick={() => {
              setLangCookie("ar");
              setOpen(false);
            }}
            className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${isAr ? "text-primary" : "text-foreground/80"}`}
          >
            العربية
          </Link>
        </div>
      )}
    </div>
  );
}

export function SiteHeader({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const isAr = lang === "ar";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-6xl">
      <div className="flex items-center justify-between rounded-full border border-primary/15 bg-background/80 px-6 py-3 backdrop-blur-md">
        <Link href={isAr ? "/ar" : "/"} className="flex min-w-0 items-center gap-2 sm:gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo-trim.png" alt="Global Beauty Academy" width={99} height={37} className="h-7 w-auto shrink-0 sm:h-8" priority />
          <span className="truncate font-heading text-sm font-semibold tracking-wide text-foreground sm:text-base">
            {isAr ? "أكاديمية جلوبال بيوتي" : "Global Beauty Academy"}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={isAr ? `/ar${item.href}` : `/${item.href}`}
              className="cursor-pointer text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {isAr ? item.ar : item.fr}
            </a>
          ))}
          <Link
            href={isAr ? onlineLink.ar : onlineLink.fr}
            className="cursor-pointer text-sm font-medium text-primary/90 transition-colors hover:text-primary"
          >
            {isAr ? "تكوين عن بعد" : "Formation en ligne"}
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href="https://wa.me/212666808222"
            className="hidden cursor-pointer rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent sm:inline-block"
          >
            {isAr ? "احجزي مكانك" : "Réserver ma place"}
          </a>
          <LanguageSwitch lang={lang} />
          <button
            type="button"
            aria-label={open ? (isAr ? "إغلاق القائمة" : "Fermer le menu") : (isAr ? "فتح القائمة" : "Ouvrir le menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/20 text-foreground md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-primary/15 bg-background/95 p-4 backdrop-blur-md md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={isAr ? `/ar${item.href}` : `/${item.href}`}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {isAr ? item.ar : item.fr}
            </a>
          ))}
          <Link
            href={isAr ? onlineLink.ar : onlineLink.fr}
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-primary/90 transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {isAr ? "تكوين عن بعد" : "Formation en ligne"}
          </Link>
          <a
            href="https://wa.me/212666808222"
            className="mt-2 cursor-pointer rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            {isAr ? "احجزي مكانك" : "Réserver ma place"}
          </a>
        </div>
      )}
    </header>
  );
}
