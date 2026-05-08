import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Test Prices Antalya Turkey | Full Cost Guide",
  description:
    "Complete STI testing cost guide for Antalya, Turkey. HIV from £240, HPV from £300, Androflor £360. Compare prices and understand what is included.",
  alternates: { canonical: `${siteConfig.url}/sti-test-prices-antalya` },
  openGraph: {
    title: "STI Test Prices Antalya Turkey | Full Cost Guide 2024",
    description: "All STI testing prices in Antalya, Turkey. Transparent pricing, no hidden fees.",
    url: `${siteConfig.url}/sti-test-prices-antalya`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "How much does STI testing cost in Antalya?",
    a: "STI testing in Antalya ranges from £240 for HIV blood tests to £360 for Androflor microbiome analysis and £300–£600 for HPV genotyping. Full STI packages including multiple tests start from £900.",
  },
  {
    q: "Are STI test prices in Antalya cheaper than in the UK?",
    a: "Yes, significantly. Private STI testing in Turkey is typically 40–60% cheaper than equivalent private clinic prices in the UK, while using the same quality laboratory equipment and testing standards.",
  },
  {
    q: "What is included in STI test prices in Antalya?",
    a: "All prices at our Antalya clinic include sample collection, laboratory PCR analysis, result reporting, and a pre-test consultation. Package prices additionally include follow-up consultations.",
  },
  {
    q: "Can tourists get STI tested in Antalya?",
    a: "Yes. Our clinic specialises in serving international patients, tourists, and expats. No Turkish residency or health card is required. English-speaking staff are available.",
  },
];

export default function STITestPricesAntalyaPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STI Test Prices Antalya", url: `${siteConfig.url}/sti-test-prices-antalya` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STI Test Prices in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Complete price guide for private sexual health testing in Antalya, Turkey. Transparent pricing with no hidden fees.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Get a Price Quote
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">STI Testing Price List — Antalya 2024</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Test / Service</th>
                    <th className="p-3 text-center">Price (GBP)</th>
                    <th className="p-3 text-left">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["HPV Genotyping (single site)", "£300", "Consultation, PCR lab, report"],
                    ["Double HPV Sampling", "£600", "2 swab sites, consultation, lab, report"],
                    ["HIV Blood Tests", "£240", "4th gen lab test, consultation, report"],
                    ["Androflor Test", "£360", "30+ pathogen PCR, consultation, report"],
                    ["Standard STI Package", "£900", "HPV + HIV + Androflor + 2 consultations"],
                    ["Double HPV Package", "£1,200", "Dual HPV + HIV + Androflor + 2 consultations"],
                  ].map(([test, price, includes]) => (
                    <tr key={test} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{test}</td>
                      <td className="p-3 text-center font-bold text-[#2563EB]">{price}</td>
                      <td className="p-3 text-gray-600 text-xs">{includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Detailed Price Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
                { label: "Androflor Price", href: "/androflor-test-price" },
                { label: "All Prices", href: "/prices" },
                { label: "STI Packages", href: "/sti-test-packages" },
                { label: "STD Test Cost Turkey", href: "/std-test-cost-turkey" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block p-3 bg-[#F9FAFB] rounded-lg text-[#2563EB] text-sm font-medium hover:bg-blue-50 transition-colors border border-gray-100"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your STI Test in Antalya" subtitle="Transparent pricing. No hidden fees. WhatsApp for an instant quote." />
      </main>
    </>
  );
}
