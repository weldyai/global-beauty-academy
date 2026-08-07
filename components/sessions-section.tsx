import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { SeatsCounter } from "@/components/seats-counter";

const content = {
  fr: {
    title: "Sessions en cours — Formation Makeup Artist",
    subtitle: "12 séances, certificat à la clé. Deux formules selon votre disponibilité.",
    priceNow: "4 500 DH",
    priceBefore: "5 500 DH",
    sessions: [
      {
        name: "Cours accéléré",
        days: "Lundi, mardi et jeudi",
        hours: "14h30 – 17h30",
      },
      {
        name: "Cours week-end",
        days: "Samedi et dimanche",
        hours: "10h00 – 13h00",
      },
    ],
    cta: "Réserver ma place",
  },
  ar: {
    title: "الدورات الحالية — تكوين مكياج احترافي",
    subtitle: "12 حصة، شهادة في النهاية. صيغتان حسب توفرك.",
    priceNow: "4500 درهم",
    priceBefore: "5500 درهم",
    sessions: [
      {
        name: "الدورة العادية",
        days: "الاثنين والثلاثاء والخميس",
        hours: "2:30 مساءً – 5:30 مساءً",
      },
      {
        name: "دورة عطلة نهاية الأسبوع",
        days: "السبت والأحد",
        hours: "10:00 صباحًا – 1:00 ظهرًا",
      },
    ],
    cta: "احجزي مكانك",
  },
};

export function SessionsSection({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  return (
    <section id="sessions" className="mx-auto max-w-6xl px-6 py-24">
      <BlurFade>
        <div className="mb-4 flex justify-center">
          <SeatsCounter lang={lang} />
        </div>
        <h2 className="mb-2 text-center font-heading text-3xl font-semibold md:text-4xl">
          {t.title}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">{t.subtitle}</p>
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className="font-heading text-4xl font-bold text-primary">{t.priceNow}</span>
          <span className="text-lg text-muted-foreground line-through">{t.priceBefore}</span>
        </div>
      </BlurFade>

      <div className="grid gap-6 sm:grid-cols-2">
        {t.sessions.map((s, i) => (
          <BlurFade key={s.name} delay={0.1 * i}>
            <div className="rounded-2xl border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
              <h3 className="mb-3 font-heading text-lg font-semibold text-primary">{s.name}</h3>
              <p className="text-sm text-foreground/90">{s.days}</p>
              <p className="text-sm text-muted-foreground">{s.hours}</p>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.2}>
        <div className="mt-12 text-center">
          <a href="https://wa.me/212666808222" className="inline-block">
            <ShimmerButton
              background="linear-gradient(135deg, #d4af37 0%, #ca8a04 100%)"
              className="px-8 py-4 text-base font-semibold text-[#141138]"
            >
              {t.cta}
            </ShimmerButton>
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
