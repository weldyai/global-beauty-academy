import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

const content = {
  fr: {
    title: "Pourquoi choisir Global Beauty Academy",
    subtitle:
      "Une formation reconnue, un plateau technique professionnel et des marques partenaires utilisées par les plus grandes maisons de beauté.",
    points: [
      { title: "Formation certifiante", desc: "Certificat reconnu, remis à chaque diplômée en fin de cursus." },
      { title: "Formatrices expertes", desc: "Professionnelles en activité, plateau technique complet." },
      { title: "Insertion professionnelle", desc: "Accompagnement vers l'emploi ou le lancement en freelance." },
      { title: "Petits effectifs", desc: "Suivi personnalisé, pratique intensive sur modèles." },
    ],
    partnersLabel: "Marques utilisées en formation",
  },
  ar: {
    title: "لماذا تختارين أكاديمية جلوبال بيوتي",
    subtitle:
      "تكوين معترف به، وسائل تقنية احترافية، وماركات شريكة تستخدمها كبرى دور التجميل.",
    points: [
      { title: "تكوين معتمد", desc: "شهادة معترف بها تُسلَّم لكل خريجة في نهاية التكوين." },
      { title: "أستاذات خبيرات", desc: "محترفات في الميدان، وسائل تقنية كاملة." },
      { title: "إدماج مهني", desc: "مواكبة نحو التوظيف أو إطلاق نشاط حر." },
      { title: "أفواج مصغرة", desc: "تتبع شخصي، تمرين مكثف على موديلات حقيقية." },
    ],
    partnersLabel: "الماركات المستخدمة في التكوين",
  },
};

const partners = ["MAC", "Make Up For Ever", "Kryolan", "NARS", "L'Oréal Pro", "Sigma Beauty"];

export function WhySection({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  return (
    <section id="pourquoi" className="mx-auto max-w-6xl px-6 py-24">
      <BlurFade>
        <h2 className="mb-2 text-center font-heading text-3xl font-semibold md:text-4xl">
          {t.title}
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">{t.subtitle}</p>
      </BlurFade>
      <div className="grid gap-6 sm:grid-cols-2">
        {t.points.map((p, i) => (
          <BlurFade key={p.title} delay={0.08 * i}>
            <div className="rounded-2xl border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
              <h3
                className={`mb-2 font-heading text-lg font-semibold ${i % 2 === 0 ? "text-primary" : "text-accent"}`}
              >
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={0.2}>
        <div className="mt-16 border-t border-accent/20 pt-10 text-center">
          <p className="mb-6 text-sm uppercase tracking-widest text-accent/80">
            {t.partnersLabel}
          </p>
          <Marquee pauseOnHover className="[--duration:26s]">
            {partners.map((p) => (
              <span key={p} className="mx-6 font-heading text-lg font-semibold text-foreground/60">
                {p}
              </span>
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}
