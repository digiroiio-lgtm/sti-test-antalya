import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sti-test-antalya",
    "/std-test-antalya",
    "/sexual-health-clinic-antalya",
    "/hiv-test-antalya",
    "/hpv-test-antalya",
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
    "/about",
    "/our-clinic",
    "/our-doctors",
    "/contact",
    "/blog",
    "/blog/how-much-is-an-sti-test-in-turkey",
    "/blog/where-to-get-sti-tested-in-antalya",
    "/blog/what-is-included-in-a-full-sti-panel",
    "/blog/sti-symptoms-in-men",
    "/blog/hpv-testing-for-men-turkey",
    "/blog/healthcare-in-turkey-for-tourists",
    // Pricing hub
    "/prices",
    "/pricing",
    "/sti-test-prices-antalya",
    "/std-test-cost-turkey",
    "/hiv-test-price-antalya",
    "/hpv-test-price",
    "/androflor-test-price",
    // Package pages
    "/sti-test-packages",
    "/full-sti-screening-package",
    "/hpv-hiv-androflor-package",
    // Extended test pages — HPV
    "/hpv-genotyping-test",
    "/hpv-testing-for-men",
    "/hpv-pcr-test",
    // Extended test pages — Androflor
    "/male-urogenital-flora-test",
    "/advanced-male-microbiome-test",
    // Extended test pages — HIV
    "/hiv-blood-test",
    "/private-hiv-testing",
    "/rapid-hiv-test-antalya",
    // Comparison pages
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

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
