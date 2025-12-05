import Script from "next/script";

interface JsonLdProps {
  locale: string;
}

export function LocalBusinessJsonLd({ locale }: JsonLdProps): React.ReactElement {
  const isSpanish = locale === "es";

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.valelee.com/#business",
    name: "Valelee LLC",
    image: "https://www.valelee.com/img/og.webp",
    logo: "https://www.valelee.com/img/valelee2.png",
    description: isSpanish
      ? "Creamos tiendas online Shopify, páginas web y landing pages rápidas, optimizadas para SEO y conversiones. Soporte en Miami y alcance global."
      : "We create Shopify online stores, websites and fast landing pages, optimized for SEO and conversions. Support in Miami with global reach.",
    url: "https://www.valelee.com",
    telephone: "+1-786-450-9223",
    email: "contacto@valelee.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.7617,
      longitude: -80.1918,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/valeleeofficial",
      "https://www.instagram.com/valeleeofficial",
      "https://www.linkedin.com/company/valelee",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 25.7617,
        longitude: -80.1918,
      },
      geoRadius: "50000",
    },
    serviceType: [
      "Web Development",
      "Shopify Development",
      "E-commerce",
      "Digital Marketing",
      "SEO",
      "SEM",
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.valelee.com/#organization",
    name: "Valelee LLC",
    url: "https://www.valelee.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.valelee.com/img/valelee2.png",
      width: 512,
      height: 512,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-786-450-9223",
      contactType: "sales",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [
      "https://www.facebook.com/valeleeofficial",
      "https://www.instagram.com/valeleeofficial",
      "https://www.linkedin.com/company/valelee",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.valelee.com/#website",
    url: "https://www.valelee.com",
    name: "Valelee LLC",
    description: isSpanish
      ? "Tiendas Online, Shopify y Sitios Web en Miami"
      : "Online Stores, Shopify & Websites in Miami",
    publisher: {
      "@id": "https://www.valelee.com/#organization",
    },
    inLanguage: [locale === "es" ? "es-US" : "en-US"],
  };

  return (
    <>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        strategy="afterInteractive"
      />
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        strategy="afterInteractive"
      />
    </>
  );
}

interface FaqJsonLdProps {
  locale: string;
  faqs: Array<{ question: string; answer: string }>;
}

export function FaqJsonLd({ faqs }: FaqJsonLdProps): React.ReactElement {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      strategy="afterInteractive"
    />
  );
}

interface ServiceJsonLdProps {
  locale: string;
}

export function ServiceJsonLd({ locale }: ServiceJsonLdProps): React.ReactElement {
  const isSpanish = locale === "es";

  const services = [
    {
      name: isSpanish ? "Desarrollo de Tiendas Shopify" : "Shopify Store Development",
      description: isSpanish
        ? "Tiendas Shopify completas: diseño, configuración de pagos, envíos, impuestos y automatizaciones."
        : "Complete Shopify stores: design, payment configuration, shipping, taxes and automations.",
    },
    {
      name: isSpanish ? "Desarrollo Web con Next.js" : "Web Development with Next.js",
      description: isSpanish
        ? "Desarrollo de sitios rápidos, modernos y optimizados para SEO con tecnología Next.js y Tailwind."
        : "Development of fast, modern websites optimized for SEO with Next.js and Tailwind technology.",
    },
    {
      name: isSpanish ? "Marketing Digital y SEO" : "Digital Marketing and SEO",
      description: isSpanish
        ? "Posicionamiento SEO, campañas de Google Ads y publicidad en Meta para atraer tráfico y generar ventas."
        : "SEO positioning, Google Ads campaigns and Meta advertising to attract traffic and generate sales.",
    },
  ];

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development Services",
    provider: {
      "@id": "https://www.valelee.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isSpanish ? "Servicios de Desarrollo Web" : "Web Development Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <Script
      id="service-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      strategy="afterInteractive"
    />
  );
}


