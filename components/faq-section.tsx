import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";

const onlineLink = { fr: "/formation-maquillage-en-ligne", ar: "/ar/formation-maquillage-en-ligne" };

const content = {
  fr: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Faut-il un diplôme pour intégrer Global Beauty Academy ?",
        a: "Non, nos formations en maquillage, coiffure et onglerie/nail art sont ouvertes aux débutantes comme aux personnes en reconversion professionnelle, sans prérequis scolaire.",
      },
      {
        q: "Quel est le prix de la formation Makeup Artist ?",
        a: "La formation Makeup Artist coûte 4 500 DH au lieu de 5 500 DH, pour 12 séances avec certificat à la clé. Deux formules : cours accéléré (lundi/mardi/jeudi) ou cours week-end.",
      },
      {
        q: "La formation est-elle certifiante ?",
        a: "Oui, chaque formation débouche sur un certificat reconnu remis à la fin du cursus, attestant de la maîtrise des techniques enseignées.",
      },
      {
        q: "Proposez-vous des cours de maquillage en ligne ?",
        a: "Oui, certains modules sont disponibles en formation à distance pour les élèves de Casablanca, Rabat, Marrakech et partout au Maroc, en complément des sessions pratiques en présentiel.",
      },
      {
        q: "Combien de temps dure la formation ?",
        a: "La formation Makeup Artist se déroule sur 12 séances : en cours accéléré (3 semaines à raison de 3 séances/semaine) ou en cours week-end (6 semaines à raison de 2 séances/semaine).",
      },
      {
        q: "Un accompagnement vers l'emploi est-il proposé après la formation ?",
        a: "Oui, nos diplômées bénéficient d'un accompagnement vers l'insertion professionnelle, que ce soit en institut, en freelance ou en agence événementielle.",
      },
    ],
  },
  ar: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "هل يشترط دبلوم سابق للالتحاق بأكاديمية جلوبال بيوتي؟",
        a: "لا، تكويناتنا في المكياج وتصفيف الشعر وفن الأظافر مفتوحة للمبتدئات وكذلك لمن يرغبن في تغيير المسار المهني، دون شرط دراسي مسبق.",
      },
      {
        q: "كم يكلف تكوين Makeup Artist؟",
        a: "يكلف تكوين Makeup Artist 4500 درهم بدلاً من 5500 درهم، لمدة 12 حصة مع شهادة في النهاية. صيغتان: الدورة العادية (الاثنين/الثلاثاء/الخميس) أو دورة عطلة نهاية الأسبوع.",
      },
      {
        q: "هل التكوين معتمد؟",
        a: "نعم، كل تكوين يُتوَّج بشهادة معترف بها تُسلَّم في نهاية المسار، تثبت إتقان التقنيات المُدرَّسة.",
      },
      {
        q: "هل تقدمون دروس مكياج عن بعد؟",
        a: "نعم، بعض الوحدات متاحة بنظام التكوين عن بعد للطالبات من الدار البيضاء والرباط ومراكش وجميع أنحاء المغرب، تكملةً للحصص التطبيقية الحضورية.",
      },
      {
        q: "كم تدوم مدة التكوين؟",
        a: "يمتد تكوين Makeup Artist على 12 حصة: في الدورة العادية (3 أسابيع بمعدل 3 حصص أسبوعيًا) أو في دورة عطلة نهاية الأسبوع (6 أسابيع بمعدل حصتين أسبوعيًا).",
      },
      {
        q: "هل هناك مواكبة للتوظيف بعد التكوين؟",
        a: "نعم، تستفيد خريجاتنا من مواكبة نحو الإدماج المهني، سواء في معهد تجميل أو كنشاط حر أو في وكالة تنظيم الفعاليات.",
      },
    ],
  },
};

export function FaqSection({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const t = content[lang];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <BlurFade>
        <h2 className="mb-10 text-center font-heading text-3xl font-semibold md:text-4xl">
          {t.title}
        </h2>
      </BlurFade>
      <Accordion type="single" collapsible>
        {t.items.map((item, i) => (
          <BlurFade key={i} delay={0.06 * i}>
            <AccordionItem value={`item-${i}`} className="border-primary/10 py-2">
              <AccordionTrigger className="font-heading text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.a}
                {i === 3 && (
                  <Link
                    href={lang === "ar" ? onlineLink.ar : onlineLink.fr}
                    className="ms-1 cursor-pointer text-accent underline underline-offset-2 hover:text-primary"
                  >
                    {lang === "ar" ? "اكتشفي التفاصيل" : "Découvrir le détail"}
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          </BlurFade>
        ))}
      </Accordion>
    </section>
  );
}

export function faqJsonLd(lang: "fr" | "ar" = "fr") {
  const items = content[lang].items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
