import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

const content = {
  fr: {
    title: "Prête à lancer votre carrière dans la beauté ?",
    subtitle: "Places limitées par session — réservez votre entretien d'admission dès aujourd'hui.",
    cta: "Réserver ma place",
  },
  ar: {
    title: "مستعدة لإطلاق مسارك المهني في التجميل؟",
    subtitle: "الأماكن محدودة في كل دفعة — احجزي موعد المقابلة اليوم.",
    cta: "احجزي مكانك",
  },
};

export function FinalCta({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  return (
    <section className="border-t border-primary/10 px-6 py-24 text-center">
      <BlurFade>
        <h2 className="mx-auto max-w-xl font-heading text-3xl font-semibold md:text-4xl">
          {t.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t.subtitle}</p>
        <a href="https://wa.me/212666808222" className="mt-8 inline-block">
          <ShimmerButton
            background="linear-gradient(135deg, #d4af37 0%, #ca8a04 100%)"
            className="px-8 py-4 text-base font-semibold text-[#141138]"
          >
            {t.cta}
          </ShimmerButton>
        </a>
      </BlurFade>
    </section>
  );
}
