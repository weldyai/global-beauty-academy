import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FinalCta } from "@/components/final-cta";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const siteUrl = "https://www.globalbeautyacademy.ma";
const pageUrl = `${siteUrl}/ar/formation-maquillage-en-ligne`;

export const metadata: Metadata = {
  title: "تكوين مكياج عن بعد بالمغرب — معتمد وبالوتيرة التي تناسبك",
  description:
    "تكوين احترافي في المكياج عن بعد، متاح من الدار البيضاء والرباط ومراكش وجميع أنحاء المغرب. دروس فيديو، حصص مباشرة مع أستاذة، وشهادة في النهاية.",
  alternates: {
    canonical: "/ar/formation-maquillage-en-ligne",
    languages: {
      "fr-MA": "/formation-maquillage-en-ligne",
      "ar-MA": "/ar/formation-maquillage-en-ligne",
    },
  },
  openGraph: {
    locale: "ar_MA",
    url: pageUrl,
    title: "تكوين مكياج عن بعد بالمغرب | أكاديمية جلوبال بيوتي",
    description: "كوني خبيرة مكياج من منزلك، أينما كنت بالمغرب — تكوين عن بعد معتمد بإشراف أستاذات خبيرات.",
  },
};

const modules = [
  { title: "أساسيات المكياج الاحترافي", desc: "تحضير البشرة، التصحيح، توحيد الألوان." },
  { title: "مكياج العرائس والسهرات", desc: "تقنيات الثبات الطويل، النحت، إبراز جمال النظرة." },
  { title: "مكياج التصوير والمجلات", desc: "تكييف المكياج مع الإضاءة والعدسة." },
  { title: "الجانب المهني والتسويق", desc: "تحديد الأسعار، بناء البورتفوليو، إطلاق النشاط الحر." },
];

const format = [
  { title: "100% عن بعد", desc: "دروس فيديو متاحة مدى الحياة، بالوتيرة التي تناسبك، من أي مدينة بالمغرب." },
  { title: "حصص مباشرة", desc: "تصحيح وملاحظات مباشرة مع أستاذة، في مجموعات صغيرة." },
  { title: "حقيبة تكوينية", desc: "دعم دراسي PDF، بطاقات تقنية، ولائحة المعدات الموصى بها." },
  { title: "شهادة في النهاية", desc: "شهادة أكاديمية جلوبال بيوتي تُسلَّم بعد اجتياز البرنامج." },
];

const faqs = [
  {
    q: "هل التكوين عن بعد معترف به مثل الحضوري؟",
    a: "نعم، الشهادة المُسلَّمة هي نفسها: تثبت إتقان تقنيات البرنامج، سواء تابعتِ الصيغة عن بعد أو الحضورية.",
  },
  {
    q: "هل أحتاج معدات خاصة لمتابعة التكوين؟",
    a: "تُرسل لك لائحة معدات أساسية (باليت، فرش، منتجات) عند الانطلاق. المعدات الاحترافية الكاملة اختيارية ويمكن إضافتها لاحقًا.",
  },
  {
    q: "هل يمكنني متابعة التكوين إذا كنت بالرباط أو مراكش أو مدينة أخرى؟",
    a: "نعم، صُمم التكوين عن بعد ليكون متاحًا من أي مدينة بالمغرب، دون الحاجة للتنقل لمتابعة الدروس المسجلة والحصص المباشرة.",
  },
  {
    q: "كم من الوقت لدي لإنهاء التكوين؟",
    a: "تصلين إلى الدروس مدى الحياة وتتقدمين بوتيرتك الخاصة. الحصص المباشرة تتبع جدولاً ثابتاً يُعلن عند التسجيل.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "تكوين مكياج عن بعد",
  description:
    "تكوين احترافي في المكياج 100% عن بعد مع دروس فيديو وحصص مباشرة وشهادة في النهاية، مفتوح لطالبات كل المغرب.",
  provider: {
    "@type": "EducationalOrganization",
    name: "أكاديمية جلوبال بيوتي",
    sameAs: siteUrl,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT20H",
  },
  areaServed: ["الدار البيضاء", "الرباط", "مراكش", "المغرب"],
};

export default function FormationEnLigneAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <SiteHeader lang="ar" />
      <main className="flex-1">
        <section className="relative flex flex-col items-center overflow-hidden px-6 pt-40 pb-24 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.12),transparent_60%)]" />
          <BlurFade delay={0.1}>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-balance md:text-5xl">
              تكوين مكياج <span className="text-primary">عن بعد</span> بالمغرب
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              تقدم أكاديمية جلوبال بيوتي تكوينًا احترافيًا في المكياج عن بعد، متاحًا من الدار
              البيضاء والرباط ومراكش وجميع أنحاء المغرب. دروس فيديو بوتيرتك الخاصة، حصص مباشرة
              مع أستاذة، وشهادة في النهاية — دون الحاجة للتنقل.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <a href="https://wa.me/212666808222" className="mt-10 inline-block">
              <ShimmerButton
                background="linear-gradient(135deg, #d4af37 0%, #ca8a04 100%)"
                className="px-8 py-4 text-base font-semibold text-[#141138]"
              >
                أسجل في التكوين عن بعد
              </ShimmerButton>
            </a>
          </BlurFade>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <BlurFade>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold md:text-4xl">
              كيف يسير التكوين
            </h2>
          </BlurFade>
          <div className="grid gap-6 sm:grid-cols-2">
            {format.map((f, i) => (
              <BlurFade key={f.title} delay={0.08 * i}>
                <div className="rounded-2xl border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-primary">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <section className="bg-card px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <BlurFade>
              <h2 className="mb-14 text-center font-heading text-3xl font-semibold md:text-4xl">
                برنامج التكوين
              </h2>
            </BlurFade>
            <div className="grid gap-6 md:grid-cols-2">
              {modules.map((m, i) => (
                <BlurFade key={m.title} delay={0.08 * i}>
                  <div className="flex gap-4 rounded-2xl border border-primary/10 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25">
                    <span className="font-heading text-2xl font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-1 font-heading text-lg font-semibold">{m.title}</h3>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24">
          <BlurFade>
            <h2 className="mb-10 text-center font-heading text-3xl font-semibold md:text-4xl">
              أسئلة حول التكوين عن بعد
            </h2>
          </BlurFade>
          <Accordion type="single" collapsible>
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-2">
                <AccordionTrigger className="font-heading text-base font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <FinalCta lang="ar" />
      </main>
      <SiteFooter lang="ar" />
    </>
  );
}
