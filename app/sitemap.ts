import type { MetadataRoute } from "next";

const siteUrl = "https://www.globalbeautyacademy.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      alternates: { languages: { "fr-MA": siteUrl, "ar-MA": `${siteUrl}/ar` } },
    },
    {
      url: `${siteUrl}/ar`,
      lastModified: new Date(),
      alternates: { languages: { "fr-MA": siteUrl, "ar-MA": `${siteUrl}/ar` } },
    },
    {
      url: `${siteUrl}/formation-maquillage-en-ligne`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "fr-MA": `${siteUrl}/formation-maquillage-en-ligne`,
          "ar-MA": `${siteUrl}/ar/formation-maquillage-en-ligne`,
        },
      },
    },
    {
      url: `${siteUrl}/ar/formation-maquillage-en-ligne`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "fr-MA": `${siteUrl}/formation-maquillage-en-ligne`,
          "ar-MA": `${siteUrl}/ar/formation-maquillage-en-ligne`,
        },
      },
    },
  ];
}
