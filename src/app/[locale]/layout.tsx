import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { LocalBusinessJsonLd, ServiceJsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const isSpanish = locale === "es";

  const keywords = isSpanish
    ? [
        "tiendas online Miami",
        "desarrollo web Miami",
        "Shopify Miami",
        "crear tienda online",
        "páginas web profesionales",
        "marketing digital Miami",
        "SEO Miami",
        "diseño web",
        "ecommerce",
        "landing pages",
        "desarrollo Shopify",
        "tiendas Shopify",
        "agencia digital Miami",
        "Next.js developer",
        "creación de sitios web",
      ]
    : [
        "online stores Miami",
        "web development Miami",
        "Shopify Miami",
        "create online store",
        "professional websites",
        "digital marketing Miami",
        "SEO Miami",
        "web design",
        "ecommerce",
        "landing pages",
        "Shopify development",
        "Shopify stores",
        "digital agency Miami",
        "Next.js developer",
        "website creation",
      ];

  return {
    metadataBase: new URL("https://www.valelee.com"),
    title: {
      default: t("title"),
      template: `%s | Valelee LLC`,
    },
    description: t("description"),
    keywords: keywords,
    authors: [{ name: "Valelee LLC", url: "https://www.valelee.com" }],
    creator: "Valelee LLC",
    publisher: "Valelee LLC",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: isSpanish ? "es_US" : "en_US",
      alternateLocale: isSpanish ? "en_US" : "es_US",
      url: `https://www.valelee.com/${locale}`,
      siteName: "Valelee LLC",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/img/og.webp",
          width: 1200,
          height: 630,
          alt: isSpanish
            ? "Valelee LLC - Tiendas Online y Desarrollo Web en Miami"
            : "Valelee LLC - Online Stores and Web Development in Miami",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/img/og.webp"],
      creator: "@valeleeofficial",
      site: "@valeleeofficial",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/favicon-180x180.png", sizes: "180x180" }],
    },
    manifest: "/manifest.json",
    alternates: {
      canonical: `https://www.valelee.com/${locale}`,
      languages: {
        es: "https://www.valelee.com/es",
        en: "https://www.valelee.com/en",
        "x-default": "https://www.valelee.com/es",
      },
    },
    verification: {
      // Añade estos cuando tengas las verificaciones
      // google: "tu-codigo-de-verificacion-google",
      // yandex: "tu-codigo-yandex",
      // bing: "tu-codigo-bing",
    },
    category: "technology",
  };
}

export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps): Promise<React.ReactElement> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <LocalBusinessJsonLd locale={locale} />
        <ServiceJsonLd locale={locale} />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWidget />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

