import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Androflor Test Price Antalya | Microbiome Test Cost £360",
  description:
    "Androflor advanced male urogenital microbiome test in Antalya £360. Detects 30+ pathogens. PCR-based analysis. Private, confidential. Includes consultation.",
  alternates: { canonical: `${siteConfig.url}/androflor-test-price` },
  openGraph: {
    title: "Androflor Test Price Antalya | Microbiome Test Cost £360",
    description: "Androflor PCR microbiome analysis in Antalya from £360. The most comprehensive male urogenital test available.",
    url: `${siteConfig.url}/androflor-test-price`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "How much does the Androflor test cost in Turkey?",
    a: "The Androflor test at our Antalya clinic is £360. This all-inclusive price covers sample collection, PCR laboratory analysis of 30+ microorganisms, full result reporting, and pre-test consultation.",
  },
  {
    q: "What makes the Androflor test worth £360?",
    a: "The Androflor test simultaneously analyses 30+ microorganisms using advanced real-time PCR technology. It covers everything a standard STI panel covers plus rare pathogens, mycoplasma species, anaerobic bacteria, and fungal organisms that standard tests miss — effectively replacing multiple individual tests with one comprehensive analysis.",
  },
  {
    q: "Is Androflor cheaper in Turkey than in Western Europe?",
    a: "Yes. Where available in Western Europe, equivalent comprehensive male urogenital microbiome analysis can cost £600–£900. Turkey's lower laboratory and operational costs allow us to offer the same testing for £360.",
  },
  {
    q: "Is Androflor included in the STI packages?",
    a: "Yes. The Androflor test is included in both the Standard STI Package (£900) and the Double HPV Package (£1,200), alongside HPV genotyping and HIV blood tests.",
  },
  {
    q: "Can I just book the Androflor test on its own?",
    a: "Yes. You can book the Androflor test as a standalone test for £360, or as part of a comprehensive STI package for better value.",
  },
];

export default function AndroflorTestPricePage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Prices", url: `${siteConfig.url}/prices` },
          { name: "Androflor Test Price", url: `${siteConfig.url}/androflor-test-price` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={productSchema({
          name: "Androflor Advanced Male Urogenital Microbiome Test — Antalya",
          description:
            "Comprehensive PCR-based male urogenital microbiome analysis. Detects 30+ pathogens including STIs, mycoplasma, ureaplasma, fungi, and anaerobic bacteria.",
          url: `${siteConfig.url}/androflor-test-price`,
          priceGBP: 360,
        })}
      />

      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Prices", href: "/prices" },
          { name: "Androflor Test Price", href: "/androflor-test-price" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Androflor Test Price in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book Androflor Test
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-white rounded-xl border-2 border-[#2563EB] p-10 shadow-md">
              <h2 className="text-2xl font-bold text-[#0A2342] mb-2">Androflor Test</h2>
              <p className="text-6xl font-bold text-[#2563EB] mb-2">£360</p>
              <p className="text-gray-500 text-sm mb-6">Advanced microbiological screening — male urogenital flora</p>
              <ul className="space-y-3 text-gray-600 text-sm mb-8 text-left max-w-sm mx-auto">
                {[
                  "30+ pathogens detected in one test",
                  "Real-time PCR technology",
                  "Includes STI pathogens + rare organisms",
                  "Mycoplasma & Ureaplasma species",
                  "Fungal organism detection",
                  "Pre-test consultation included",
                  "Confidential digital results",
                  "English-speaking medical team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#16A34A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                💬 Book Now
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Who Is the Androflor Test For?</h2>
            <p className="text-gray-600 mb-6">
              The Androflor test is particularly valuable for men experiencing symptoms that standard STI tests fail to explain. It is designed for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Chronic urogenital irritation or discomfort",
                "Persistent symptoms with negative standard tests",
                "Recurrent urogenital infections",
                "Unexplained male factor infertility",
                "Comprehensive pre-relationship screening",
                "Complex or atypical presentations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-[#2563EB] font-bold">→</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Androflor Test", href: "/androflor-test" },
                { label: "Male Urogenital Flora Test", href: "/male-urogenital-flora-test" },
                { label: "Androflor vs Culture Test", href: "/androflor-vs-standard-culture-test" },
                { label: "STI Packages", href: "/sti-test-packages" },
                { label: "All Prices", href: "/prices" },
                { label: "Full STI Panel", href: "/full-sti-panel" },
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
        <CTASection title="Book Your Androflor Test in Antalya" subtitle="£360 all-inclusive. The most comprehensive male urogenital microbiome analysis available." />
      </main>
    </>
  );
}
