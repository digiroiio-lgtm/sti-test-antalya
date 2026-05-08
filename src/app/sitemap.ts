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
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
