import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Priority tiers:
//  0.9 — core money / service pages
//  0.8 — secondary service & location pages
//  0.7 — blog posts & informational pages
//  0.6 — comparison & thin-content pages

const tier9 = [
  "",
  "/sti-test-antalya",
  "/hiv-test-antalya",
  "/hpv-test-antalya",
  "/prices",
  "/sti-test-packages",
  "/contact",
  "/about",
];

const tier8 = [
  "/std-test-antalya",
  "/sexual-health-clinic-antalya",
  "/private-sti-testing",
  "/same-day-sti-results",
  "/full-sti-panel",
  "/anonymous-sti-testing",
  "/chlamydia-test",
  "/gonorrhea-test",
  "/syphilis-test",
  "/herpes-test",
  "/urethral-swab-test",
  "/androflor-test",
  "/hpv-men",
  "/hpv-women",
  "/sti-testing-turkey",
  "/medical-tourism-antalya",
  "/tourists-guide-sti-testing-turkey",
  "/our-clinic",
  "/our-doctors",
  "/blog",
  // Pricing hub
  "/pricing",
  "/sti-test-prices-antalya",
  "/std-test-cost-turkey",
  "/hiv-test-price-antalya",
  "/hpv-test-price",
  "/androflor-test-price",
  // Packages
  "/full-sti-screening-package",
  "/hpv-hiv-androflor-package",
  // Extended test pages
  "/hpv-genotyping-test",
  "/hpv-testing-for-men",
  "/hpv-pcr-test",
  "/male-urogenital-flora-test",
  "/advanced-male-microbiome-test",
  "/hiv-blood-test",
  "/private-hiv-testing",
  "/rapid-hiv-test-antalya",
];

const tier7 = [
  "/blog/how-much-is-an-sti-test-in-turkey",
  "/blog/where-to-get-sti-tested-in-antalya",
  "/blog/what-is-included-in-a-full-sti-panel",
  "/blog/sti-symptoms-in-men",
  "/blog/hpv-testing-for-men-turkey",
  "/blog/healthcare-in-turkey-for-tourists",
];

const tier6 = [
  "/hpv-test-vs-standard-std-test",
  "/hpv-pcr-vs-hpv-genotyping",
  "/single-vs-double-hpv-sampling",
  "/rapid-hiv-test-vs-laboratory-test",
  "/hiv-antibody-vs-pcr-test",
  "/standard-vs-double-hpv-package",
  "/best-sti-test-package",
  "/full-sti-panel-vs-basic-std-test",
  "/sti-vs-std",
  "/hpv-vs-herpes",
  "/androflor-vs-standard-culture-test",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const toEntries = (routes: string[], priority: number) =>
    routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    }));

  return [
    ...toEntries(tier9, 0.9),
    ...toEntries(tier8, 0.8),
    ...toEntries(tier7, 0.7),
    ...toEntries(tier6, 0.6),
  ];
}
