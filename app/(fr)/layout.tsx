import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import { ScrollProgress } from "@/components/scroll-progress";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.globalbeautyacademy.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Global Beauty Academy | Formation Makeup Artist, Coiffure & Onglerie à Casablanca",
    template: "%s | Global Beauty Academy",
  },
  description:
    "Global Beauty Academy (GBA) forme les futures makeup artists, coiffeuses et spécialistes de l'onglerie/nail art à Casablanca. Formation professionnelle certifiante, formatrices expertes, insertion pro garantie.",
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
      "ar-MA": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteUrl,
    siteName: "Global Beauty Academy",
    title: "Global Beauty Academy | Formation Makeup Artist, Coiffure & Onglerie à Casablanca",
    description:
      "Devenez une experte certifiée en maquillage, coiffure ou onglerie. Formations professionnelles à Casablanca, Aîn-Chock.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Global Beauty Academy",
  alternateName: "GBA",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Académie de formation professionnelle en maquillage (makeup artist), coiffure et onglerie/nail art à Casablanca.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue Abou Bakr el Kadiri, 11",
    addressLocality: "Aîn-Chock, Casablanca",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.527599,
    longitude: -7.6493,
  },
  areaServed: ["Casablanca", "Rabat", "Marrakech", "Maroc"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formations Global Beauty Academy",
    itemListElement: [
      { "@type": "Course", name: "Maquillage Professionnel (Makeup Artist)" },
      { "@type": "Course", name: "Coiffure & Styling" },
      { "@type": "Course", name: "Onglerie & Nail Art" },
    ],
  },
  sameAs: ["https://web.facebook.com/gbaacademy/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`dark ${playfair.variable} ${inter.variable} h-full antialiased`}
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
