import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "STD Test Cost Turkey | Private STI Testing Prices 2024",
  description:
    "STD testing costs in Turkey explained. Compare STI test prices across HIV, HPV, Androflor, and full packages. Private clinic in Antalya. From £240.",
  alternates: { canonical: `${siteConfig.url}/std-test-cost-turkey` },
  openGraph: {
    title: "STD Test Cost Turkey | Private STI Testing Prices 2024",
    description: "Full guide to STD and STI test costs in Turkey. Private Antalya clinic. Transparent pricing.",
    url: `${siteConfig.url}/std-test-cost-turkey`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "How much does an STD test cost in Turkey?",
    a: "STD testing costs in Turkey range from approximately £240 for a private HIV blood test to £360 for an Androflor comprehensive microbiome analysis, £300–£600 for HPV genotyping, and £900–£1,200 for comprehensive STI packages.",
  },
  {
    q: "Is STD testing in Turkey good quality?",
    a: "Yes. Private clinics in Turkey use the same PCR laboratory methods and ISO-certified testing as clinics in Western Europe. Test quality is not compromised — only costs differ due to lower operational expenses.",
  },
  {
    q: "Do I need a Turkish doctor's referral for STD testing?",
    a: "No. Private clinics in Turkey do not require a referral. You can book directly by WhatsApp or phone.",
  },
  {
    q: "What currencies are accepted for STD testing in Turkey?",
    a: "GBP, EUR, USD, and Turkish Lira are all accepted at our Antalya clinic.",
  },
];

export default function STDTestCostTurkeyPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STD Test Cost Turkey", url: `${siteConfig.url}/std-test-cost-turkey` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "STD Test Cost Turkey", href: "/std-test-cost-turkey" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STD Test Cost in Turkey</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private STD testing in Turkey is 40–60% less than UK or EU private clinics. Transparent pricing, no hidden fees. English-speaking staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Get a Quote
              </a>
              <Link
                href="/prices"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                Full Price List
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Why Is STD Testing Cheaper in Turkey?</h2>
            <p className="text-gray-600 mb-4">
              Turkey&apos;s private healthcare sector offers world-class testing at significantly lower costs than Western Europe. This is not due to lower quality — it reflects lower staffing costs, real estate, and administrative overhead, combined with a highly competitive private medical market.
            </p>
            <p className="text-gray-600 mb-4">
              The PCR laboratory methods used in Turkey are identical to those in the UK, Germany, or France. Many Turkish laboratories are ISO-certified and process international patients regularly.
            </p>
            <p className="text-gray-600">
              For medical tourists and expats in Antalya, this creates significant value: the same HIV, HPV, or Androflor test that costs £500–£900 in London is available for £240–£360 in Antalya.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Explore All Pricing</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "All STI Prices", href: "/prices" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
                { label: "Androflor Price", href: "/androflor-test-price" },
                { label: "Packages", href: "/sti-test-packages" },
                { label: "STI Prices Antalya", href: "/sti-test-prices-antalya" },
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
        <CTASection title="Get STD Tested in Turkey" subtitle="Affordable private testing in Antalya. Same-day results. English-speaking staff." />
      </main>
    </>
  );
}
