import Image from "next/image";
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

const upsells = [
  {
    title: "تصفيف الشعر والستايلينغ",
    desc: "القص، الصبغ، تسريحات العرائس، صيحات 2026. تكملة لتكوين المكياج.",
  },
  {
    title: "فن الأظافر (Nail Art)",
    desc: "تركيب الجل/الريزين، فن الأظافر، تقنيات الثبات الطويل. تكملة لتكوين المكياج.",
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
          <Image
            src="/generated/hero.png"
            alt="مكوّنة مكياج احترافية أثناء العمل بأكاديمية جلوبال بيوتي"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_20%] opacity-55 md:object-center md:opacity-30"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/15 via-background/65 to-background md:from-background/40 md:via-background/80" />
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
              كوني <span className="text-primary">Makeup Artist معتمدة</span> بالدار البيضاء
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              أكاديمية جلوبال بيوتي (GBA) تكوّن خبيرات المكياج الاحترافي بعين الشق، الدار
              البيضاء — تكوين معتمد، وسائل تقنية كاملة، مواكبة نحو الإدماج المهني. تصفيف
              الشعر وفن الأظافر كخيارات إضافية.
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
              تكوين Makeup Artist
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
              البرنامج الأكثر طلبًا، تؤطره أستاذات خبيرات، وسائل تقنية احترافية، شهادة معترف بها.
            </p>
          </BlurFade>
          <BlurFade>
            <div className="grid items-center gap-0 overflow-hidden rounded-3xl border border-primary/20 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 md:grid-cols-2">
              <div className="relative h-48 w-full sm:h-64 md:order-2 md:h-full md:min-h-[320px]">
                <Image
                  src="/generated/products.png"
                  alt="عدة مكياج احترافية تُستخدم في التكوين"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10 md:order-1 md:p-14">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  4500 درهم <span className="text-primary/60 line-through">5500 درهم</span>
                </span>
                <h3 className="mb-4 font-heading text-3xl font-semibold text-primary">
                  المكياج الاحترافي — Makeup Artist
                </h3>
                <p className="max-w-2xl text-muted-foreground">
                  تقنيات مكياج العرائس والسهرات والتصوير، منتجات احترافية، تكوين في الجانب
                  المهني لإطلاق النشاط الحر. 12 حصة، شهادة في النهاية.
                </p>
                <a
                  href="#sessions"
                  className="mt-6 inline-block cursor-pointer rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  الدورات والأسعار
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mb-6 mt-16 text-center text-sm uppercase tracking-widest text-muted-foreground">
              كتكملة، بعد إتقان المكياج
            </p>
          </BlurFade>
          <div className="grid gap-6 sm:grid-cols-2">
            {upsells.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 * i}>
                <div className="rounded-2xl border border-primary/10 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-accent">
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
