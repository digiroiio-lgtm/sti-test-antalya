import { siteConfig } from "./config";

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday"],
    opens: "10:00",
    closes: "15:00",
  },
];

const contactPoint = {
  "@type": "ContactPoint",
  telephone: siteConfig.phone,
  contactType: "customer service",
  availableLanguage: ["English", "Turkish"],
  contactOption: "TollFree",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: 36.8969,
  longitude: 30.7133,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressCountry: "TR",
    },
    geo,
    openingHoursSpecification: openingHours,
    contactPoint,
    description: siteConfig.description,
  };
}

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressCountry: "TR",
    },
    geo,
    openingHoursSpecification: openingHours,
    contactPoint,
    priceRange: "£240–£1,200",
    medicalSpecialty: "Sexual Health",
    description: siteConfig.description,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(
  title: string,
  url: string,
  datePublished: string,
  description: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    description,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  priceGBP: number | string;
  availability?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: opts.priceGBP,
      availability: opts.availability ?? "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      url: opts.url,
    },
  };
}

export function medicalTestSchema(opts: {
  name: string;
  description: string;
  url: string;
  usedToDiagnose?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    usedToDiagnose: opts.usedToDiagnose,
    performer: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antalya",
        addressCountry: "TR",
      },
    },
  };
}
