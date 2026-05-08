import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Full STI Panel vs Basic STD Test | What's the Difference?",
  description:
    "Full STI panel vs basic STD test compared. Understand what each covers, when you need a comprehensive screen, and the costs in Antalya, Turkey.",
  alternates: { canonical: `${siteConfig.url}/full-sti-panel-vs-basic-std-test` },
  openGraph: {
    title: "Full STI Panel vs Basic STD Test | What's the Difference?",
    description: "Full STI panel vs basic STD test: what each covers, when to choose, and prices in Antalya.",
    url: `${siteConfig.url}/full-sti-panel-vs-basic-std-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is the difference between a full STI panel and a basic STD test?",
    a: "A basic STD test typically screens for 3–5 common infections (usually chlamydia, gonorrhoea, syphilis, and HIV). A full STI panel adds herpes, hepatitis B/C, trichomonas, and in our case the advanced Androflor microbiome analysis and HPV genotyping — giving a much more comprehensive picture.",
  },
  {
    q: "When should I choose a full STI panel over a basic test?",
    a: "A full panel is advisable after high-risk sexual exposure, if you have symptoms that are not explained by a basic test, as a thorough pre-relationship screen, or as part of annual health monitoring for sexually active individuals.",
  },
  {
    q: "Does a full STI panel include HPV?",
    a: "Standard full panels do not typically include HPV because HPV testing requires separate PCR-based DNA analysis. Our packages specifically combine HPV genotyping with comprehensive STI screening, filling this gap.",
  },
  {
    q: "How much more does a full panel cost than a basic test?",
    a: "A basic STD test in Antalya covering the main bacterial and viral infections might cost £150–£250. A full package including HPV, HIV, and Androflor costs £900–£1,200. The additional cost reflects the additional tests, consultations, and laboratory complexity.",
  },
];

export default function FullSTIPanelVsBasicPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Full STI Panel vs Basic STD Test", url: `${siteConfig.url}/full-sti-panel-vs-basic-std-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Full STI Panel vs Basic STD Test</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Not all STI tests are equal. A basic STD test and a full STI panel cover very different ground. This guide explains exactly what each includes.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Ask Which Test You Need
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">What Each Test Covers</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Infection</th>
                    <th className="p-3 text-center">Basic STD Test</th>
                    <th className="p-3 text-center">Our Full Package</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Chlamydia", "✓", "✓ (via Androflor)"],
                    ["Gonorrhoea", "✓", "✓ (via Androflor)"],
                    ["Syphilis", "✓", "On request"],
                    ["HIV", "✓", "✓ (4th gen)"],
                    ["HPV (genotyped)", "✗", "✓"],
                    ["Herpes HSV-1/2", "Sometimes", "✓ (via Androflor)"],
                    ["Mycoplasma genitalium", "✗", "✓ (via Androflor)"],
                    ["Ureaplasma species", "✗", "✓ (via Androflor)"],
                    ["Candida / fungi", "✗", "✓ (via Androflor)"],
                    ["Anaerobic bacteria", "✗", "✓ (via Androflor)"],
                    ["Hepatitis B/C", "Sometimes", "On request"],
                    ["Consultations included", "Varies", "✓ Both initial & follow-up"],
                  ].map(([item, basic, full]) => (
                    <tr key={item} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{item}</td>
                      <td className="p-3 text-center text-gray-700">{basic}</td>
                      <td className="p-3 text-center text-gray-700">{full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Full STI Panel", href: "/full-sti-panel" },
                { label: "STI Packages", href: "/sti-test-packages" },
                { label: "Best STI Package", href: "/best-sti-test-package" },
                { label: "HPV vs STD Test", href: "/hpv-test-vs-standard-std-test" },
                { label: "All Prices", href: "/prices" },
                { label: "STI vs STD", href: "/sti-vs-std" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block p-3 bg-white rounded-lg text-[#2563EB] text-sm font-medium hover:bg-blue-50 transition-colors border border-gray-100"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Comprehensive STI Screening" subtitle="Full STI packages from £900. HPV + HIV + Androflor. Private clinic in Antalya." />
      </main>
    </>
  );
}
