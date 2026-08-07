import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "#formations", fr: "Formations", ar: "التكوينات" },
  { href: "#sessions", fr: "Tarifs", ar: "الأسعار" },
  { href: "#pourquoi", fr: "Pourquoi GBA", ar: "لماذا GBA" },
  { href: "#temoignages", fr: "Témoignages", ar: "آراء الخريجات" },
  { href: "#faq", fr: "FAQ", ar: "الأسئلة الشائعة" },
  { href: "#contact", fr: "Contact", ar: "اتصلي بنا" },
];

const onlineLink = { fr: "/formation-maquillage-en-ligne", ar: "/ar/formation-maquillage-en-ligne" };

export function SiteHeader({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const isAr = lang === "ar";
  return (
    <header className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-primary/15 bg-background/80 px-6 py-3 backdrop-blur-md">
      <Link href={isAr ? "/ar" : "/"} className="flex items-center gap-2.5">
        <Image src="/logo-trim.png" alt="Global Beauty Academy" width={99} height={37} className="h-8 w-auto" priority />
        <span className="hidden font-heading text-base font-semibold tracking-wide text-foreground sm:inline">
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
      <a
        href="https://wa.me/212666808222"
        className="cursor-pointer rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
      >
        {isAr ? "احجزي مكانك" : "Réserver ma place"}
      </a>
    </header>
  );
}
