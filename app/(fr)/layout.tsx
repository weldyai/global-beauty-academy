import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingSeatsBar } from "@/components/floating-seats-bar";

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
    default: "Formation Makeup Artist Casablanca | Global Beauty Academy",
    template: "%s | Global Beauty Academy",
  },
  description:
    "Formation Makeup Artist certifiante à Casablanca (Aîn-Chock) — 4 500 DH, 12 séances, formatrices expertes, insertion pro accompagnée. Cours accéléré ou week-end. Coiffure et onglerie/nail art en option.",
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
    title: "Formation Makeup Artist Casablanca | Global Beauty Academy",
    description:
      "Devenez Makeup Artist certifiée à Casablanca — 4 500 DH, 12 séances, cours accéléré ou week-end.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 576,
        alt: "Global Beauty Academy — Formation Makeup Artist à Casablanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation Makeup Artist Casablanca | Global Beauty Academy",
    description:
      "Devenez Makeup Artist certifiée à Casablanca — 4 500 DH, 12 séances, cours accéléré ou week-end.",
    images: ["/og-image.png"],
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
      {
        "@type": "Course",
        name: "Maquillage Professionnel (Makeup Artist)",
        description: "Formation phare, 12 séances, cours accéléré ou week-end.",
        offers: {
          "@type": "Offer",
          price: "4500",
          priceCurrency: "MAD",
          availability: "https://schema.org/LimitedAvailability",
        },
      },
      { "@type": "Course", name: "Coiffure & Styling" },
      { "@type": "Course", name: "Onglerie & Nail Art" },
    ],
  },
  sameAs: [
    "https://web.facebook.com/gbaacademy/",
    "https://www.instagram.com/gbamaroc/",
    "https://www.tiktok.com/@global.beauty.academy",
  ],
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
        <FloatingSeatsBar lang="fr" />
        {children}
      </body>
    </html>
  );
}
