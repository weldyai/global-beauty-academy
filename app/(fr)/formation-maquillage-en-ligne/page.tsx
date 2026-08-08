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
const pageUrl = `${siteUrl}/formation-maquillage-en-ligne`;

export const metadata: Metadata = {
  title: "Formation Maquillage en Ligne au Maroc — Certifiante, à Votre Rythme",
  description:
    "Formation de maquillage professionnel en ligne, accessible depuis Casablanca, Rabat, Marrakech et partout au Maroc. Modules vidéo, sessions live avec formatrice, certificat à la clé.",
  alternates: {
    canonical: "/formation-maquillage-en-ligne",
    languages: {
      "fr-MA": "/formation-maquillage-en-ligne",
      "ar-MA": "/ar/formation-maquillage-en-ligne",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: pageUrl,
    siteName: "Global Beauty Academy",
    title: "Formation Maquillage en Ligne au Maroc | Global Beauty Academy",
    description:
      "Devenez maquilleuse professionnelle depuis chez vous, où que vous soyez au Maroc — formation en ligne certifiante encadrée par des formatrices expertes.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 576,
        alt: "Global Beauty Academy — Formation Maquillage en Ligne au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation Maquillage en Ligne au Maroc | Global Beauty Academy",
    description:
      "Devenez maquilleuse professionnelle depuis chez vous, où que vous soyez au Maroc — formation en ligne certifiante encadrée par des formatrices expertes.",
    images: ["/og-image.png"],
  },
};

const modules = [
  { title: "Bases du maquillage professionnel", desc: "Préparation de peau, correction, harmonisation des couleurs." },
  { title: "Maquillage mariée & soirée", desc: "Techniques longue tenue, contouring, regard sophistiqué." },
  { title: "Maquillage éditorial & photo", desc: "Adapter le maquillage à la lumière et à l'objectif." },
  { title: "Business & posture professionnelle", desc: "Fixer ses tarifs, constituer son book, démarrer en freelance." },
];

const format = [
  { title: "100% en ligne", desc: "Cours vidéo accessibles à vie, à votre rythme, depuis n'importe quelle ville du Maroc." },
  { title: "Sessions live", desc: "Corrections et feedback en direct avec une formatrice, en petit groupe." },
  { title: "Kit pédagogique", desc: "Support de cours PDF, fiches techniques et liste de matériel recommandé." },
  { title: "Certificat à la fin", desc: "Certificat Global Beauty Academy remis après validation du programme." },
];

const faqs = [
  {
    q: "La formation en ligne est-elle reconnue comme la formation en présentiel ?",
    a: "Oui, le certificat délivré est le même : il atteste de la maîtrise des techniques du programme, que vous ayez suivi le format en ligne ou en présentiel.",
  },
  {
    q: "Ai-je besoin de matériel spécifique pour suivre la formation ?",
    a: "Une liste de matériel de base (palette, pinceaux, produits) vous est communiquée au démarrage. Le matériel professionnel complet est optionnel et peut être ajouté en complément.",
  },
  {
    q: "Puis-je suivre la formation si je suis à Rabat, Marrakech ou ailleurs au Maroc ?",
    a: "Oui, la formation en ligne a été conçue pour être accessible depuis n'importe quelle ville du Maroc, sans déplacement nécessaire pour les modules vidéo et les sessions live.",
  },
  {
    q: "Combien de temps ai-je pour terminer la formation ?",
    a: "Vous accédez aux modules vidéo à vie et progressez à votre rythme. Les sessions live suivent un calendrier fixe communiqué à l'inscription.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation Maquillage en Ligne",
  description:
    "Formation de maquillage professionnel 100% en ligne avec modules vidéo, sessions live et certificat à la clé, ouverte aux élèves de tout le Maroc.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Global Beauty Academy",
    sameAs: siteUrl,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT20H",
  },
  areaServed: ["Casablanca", "Rabat", "Marrakech", "Maroc"],
};

export default function FormationEnLigne() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <SiteHeader lang="fr" />
      <main className="flex-1">
        <section className="relative flex flex-col items-center overflow-hidden px-6 pt-40 pb-24 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.12),transparent_60%)]" />
          <BlurFade delay={0.1}>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-balance md:text-5xl">
              Formation Maquillage <span className="text-primary">en Ligne</span> au Maroc
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Global Beauty Academy propose une formation de maquillage professionnel en ligne,
              accessible depuis Casablanca, Rabat, Marrakech et partout au Maroc. Modules vidéo à
              votre rythme, sessions live avec formatrice, certificat à la clé — sans déplacement.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <a href="https://wa.me/212666808222" className="mt-10 inline-block">
              <ShimmerButton
                background="linear-gradient(135deg, #d4af37 0%, #ca8a04 100%)"
                className="px-8 py-4 text-base font-semibold text-[#141138]"
              >
                Je m&apos;inscris à la formation en ligne
              </ShimmerButton>
            </a>
          </BlurFade>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <BlurFade>
            <h2 className="mb-14 text-center font-heading text-3xl font-semibold md:text-4xl">
              Comment se déroule la formation
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
                Programme de la formation
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
              Questions sur la formation en ligne
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

        <FinalCta lang="fr" />
      </main>
      <SiteFooter lang="fr" />
    </>
  );
}
