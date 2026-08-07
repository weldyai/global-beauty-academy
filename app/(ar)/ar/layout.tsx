import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../../globals.css";
import { ScrollProgress } from "@/components/scroll-progress";

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
  title: "أكاديمية جلوبال بيوتي | تكوين معتمد في المكياج وتصفيف الشعر وفن الأظافر بالدار البيضاء",
  description:
    "أكاديمية جلوبال بيوتي (GBA) تكوّن خبيرات المكياج (Makeup Artist) وتصفيف الشعر وفن الأظافر بالدار البيضاء. تكوين احترافي معتمد، أستاذات خبيرات، إدماج مهني مضمون.",
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
    title: "أكاديمية جلوبال بيوتي | تكوين معتمد بالدار البيضاء",
    description: "كوني خبيرة معتمدة في المكياج، تصفيف الشعر أو فن الأظافر بالدار البيضاء.",
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
    streetAddress: "شارع أبو بكر القادري، 11",
    addressLocality: "عين الشق، الدار البيضاء",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.527599,
    longitude: -7.6493,
  },
  areaServed: ["الدار البيضاء", "الرباط", "مراكش", "المغرب"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "تكوينات أكاديمية جلوبال بيوتي",
    itemListElement: [
      { "@type": "Course", name: "المكياج الاحترافي (Makeup Artist)" },
      { "@type": "Course", name: "تصفيف الشعر والستايلينغ" },
      { "@type": "Course", name: "فن الأظافر (Nail Art)" },
    ],
  },
  sameAs: ["https://web.facebook.com/gbaacademy/"],
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
        {children}
      </body>
    </html>
  );
}
