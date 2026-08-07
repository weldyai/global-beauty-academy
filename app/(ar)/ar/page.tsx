import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { WhySection } from "@/components/why-section";
import { SessionsSection } from "@/components/sessions-section";
import { FaqSection, faqJsonLd } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";

const programs = [
  {
    title: "المكياج الاحترافي",
    desc: "تقنيات مكياج العرائس والسهرات والتصوير، منتجات احترافية، شهادة معتمدة.",
  },
  {
    title: "تصفيف الشعر والستايلينغ",
    desc: "القص، الصبغ، تسريحات العرائس، صيحات 2026.",
  },
  {
    title: "فن الأظافر (Nail Art)",
    desc: "تركيب الجل/الريزين، فن الأظافر، تقنيات الثبات الطويل، معدات احترافية.",
  },
];

const testimonials = [
  { name: "سارة، الدار البيضاء", text: "التكوين مكّنني من إطلاق نشاطي الحر خلال 3 أشهر." },
  { name: "إيمان، الدار البيضاء", text: "أستاذات محترفات جدا، وسائل تقنية كاملة." },
  { name: "نور، الدار البيضاء", text: "شهادة معترف بها، تم توظيفي قبل نهاية التكوين." },
];

export default function HomeAr() {
  return (
    <>
      <SiteHeader lang="ar" />
      <main className="flex-1">
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
          <div className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.12),transparent_60%)] [animation-duration:5s]" />
          <div className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_80%_70%,rgba(217,169,160,0.1),transparent_55%)] [animation-duration:7s] [animation-delay:1.5s]" />
          <BlurFade delay={0.1}>
            <div className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <AnimatedShinyText className="text-sm font-medium text-accent dark:text-accent">
                أكاديمية رائدة بالدار البيضاء منذ أكثر من 10 سنوات
              </AnimatedShinyText>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-balance md:text-6xl">
              كوني <span className="text-primary">خبيرة معتمدة</span> في المكياج بالدار البيضاء
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              أكاديمية جلوبال بيوتي (GBA) تكوّن خبيرات المكياج (Makeup Artist) وتصفيف
              الشعر وفن الأظافر بعين الشق، الدار البيضاء — تكوين معتمد، وسائل تقنية كاملة،
              مواكبة نحو الإدماج المهني.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <ShimmerButton
                background="linear-gradient(135deg, #d4af37 0%, #ca8a04 100%)"
                className="px-8 py-4 text-base font-semibold text-[#141138]"
              >
                احجزي مكانك
              </ShimmerButton>
              <a
                href="#formations"
                className="cursor-pointer rounded-full border border-primary/30 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                اكتشفي التكوينات
              </a>
            </div>
          </BlurFade>
          <BlurFade delay={0.5}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-10 border-t border-primary/10 pt-10">
              <Stat value={500} suffix="+" label="خريجة مكوّنة" />
              <Stat value={98} suffix="%" label="نسبة الإدماج المهني" />
              <Stat value={10} suffix=" سنوات" label="من الخبرة" />
            </div>
          </BlurFade>
        </section>

        <section id="formations" className="mx-auto max-w-6xl px-6 py-24">
          <BlurFade>
            <h2 className="mb-2 text-center font-heading text-3xl font-semibold md:text-4xl">
              تكويناتنا المعتمدة
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
              تكوينات مكثفة تؤطرها أستاذات خبيرات، وسائل تقنية احترافية، شهادة معترف بها.
            </p>
          </BlurFade>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 * i}>
                <div className="group rounded-2xl border border-primary/10 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <h3 className="mb-3 font-heading text-xl font-semibold text-primary">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <SessionsSection lang="ar" />

        <section id="temoignages" className="bg-card px-6 py-24">
          <BlurFade>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold md:text-4xl">
              آراء خريجاتنا
            </h2>
          </BlurFade>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <BlurFade key={t.name} delay={0.1 * i}>
                <blockquote className="h-full rounded-2xl border border-primary/10 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <p className="mb-4 text-sm italic text-foreground/90">&laquo;{t.text}&raquo;</p>
                  <cite className="text-sm font-semibold not-italic text-accent">{t.name}</cite>
                </blockquote>
              </BlurFade>
            ))}
          </div>
        </section>

        <WhySection lang="ar" />
        <FaqSection lang="ar" />
        <FinalCta lang="ar" />
      </main>
      <SiteFooter lang="ar" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd("ar")) }}
      />
    </>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-3xl font-bold text-primary">
        <NumberTicker value={value} />
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
