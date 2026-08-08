import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../../globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingSeatsBar } from "@/components/floating-seats-bar";

const cairo = Cairo({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
});

const cairoBody = Cairo({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.globalbeautyacademy.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "تكوين Makeup Artist بالدار البيضاء | أكاديمية جلوبال بيوتي",
  description:
    "تكوين مكياج احترافي معتمد بالدار البيضاء (سيدي معروف) — 4500 درهم، 12 حصة، أستاذات خبيرات، مواكبة نحو الإدماج المهني. دورة عادية أو عطلة نهاية الأسبوع. تصفيف الشعر وفن الأظافر كخيارات إضافية.",
  alternates: {
    canonical: "/ar",
    languages: {
      "fr-MA": "/",
      "ar-MA": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_MA",
    url: `${siteUrl}/ar`,
    siteName: "Global Beauty Academy",
    title: "تكوين Makeup Artist بالدار البيضاء | أكاديمية جلوبال بيوتي",
    description: "كوني Makeup Artist معتمدة بالدار البيضاء — 4500 درهم، 12 حصة.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 576,
        alt: "أكاديمية جلوبال بيوتي — تكوين Makeup Artist بالدار البيضاء",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تكوين Makeup Artist بالدار البيضاء | أكاديمية جلوبال بيوتي",
    description: "كوني Makeup Artist معتمدة بالدار البيضاء — 4500 درهم، 12 حصة.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "أكاديمية جلوبال بيوتي",
  alternateName: "GBA",
  url: `${siteUrl}/ar`,
  logo: `${siteUrl}/logo.png`,
  description: "أكاديمية تكوين احترافي في المكياج (Makeup Artist) وتصفيف الشعر وفن الأظافر بالدار البيضاء.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "شارع أبو بكر القادري، بانوراما أوفيس، عمارة 3، مكتب 6",
    addressLocality: "سيدي معروف، الدار البيضاء",
    postalCode: "20200",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5270154,
    longitude: -7.6495321,
  },
  areaServed: ["الدار البيضاء", "الرباط", "مراكش", "المغرب"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "تكوينات أكاديمية جلوبال بيوتي",
    itemListElement: [
      {
        "@type": "Course",
        name: "المكياج الاحترافي (Makeup Artist)",
        description: "التكوين الرئيسي، 12 حصة، دورة عادية أو عطلة نهاية الأسبوع.",
        offers: {
          "@type": "Offer",
          price: "4500",
          priceCurrency: "MAD",
          availability: "https://schema.org/LimitedAvailability",
        },
      },
      { "@type": "Course", name: "تصفيف الشعر والستايلينغ" },
      { "@type": "Course", name: "فن الأظافر (Nail Art)" },
    ],
  },
  sameAs: [
    "https://web.facebook.com/gbaacademy/",
    "https://www.instagram.com/gbamaroc/",
    "https://www.tiktok.com/@global.beauty.academy",
  ],
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`dark ${cairo.variable} ${cairoBody.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <FloatingSeatsBar lang="ar" />
        {children}
      </body>
    </html>
  );
}
