import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.valelee.com";
  const lastModified = new Date();

  const locales = ["es", "en"];

  const staticPages = ["", "/terminos", "/privacidad", "/legal"];

  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each locale and page
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.5,
      });
    });
  });

  // Add root URL that redirects to default locale
  routes.push({
    url: baseUrl,
    lastModified,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  return routes;
}

