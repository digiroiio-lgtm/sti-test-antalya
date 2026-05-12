import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Test Price Antalya | HPV Genotyping Cost Turkey £300",
  description:
    "HPV genotyping test in Antalya from £300. Double HPV sampling (genital + urethral) £600. Private, confidential. Includes consultation.",
  alternates: { canonical: `${siteConfig.url}/hpv-test-price` },
  openGraph: {
    title: "HPV Test Price Antalya | HPV Genotyping Cost Turkey £300",
    description: "HPV genotyping test from £300 in Antalya. Private clinic. Same-day consultation available.",
    url: `${siteConfig.url}/hpv-test-price`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "How much does an HPV test cost in Antalya?",
    a: "HPV genotyping testing is £300 for single-site sampling. Double sampling (both genital and urethral sites) is £600. These prices include laboratory analysis, result reporting, and pre-test consultation.",
  },
  {
    q: "What is the difference between the £300 and £600 HPV test?",
    a: "The £300 test covers one sampling site — either genital or urethral. The £600 double sampling option covers both sites simultaneously, which is recommended for patients with symptoms in multiple areas, complex presentations, or high-risk exposure history.",
  },
  {
    q: "Does the price include a doctor consultation?",
    a: "Yes. The HPV test price includes a brief pre-test consultation with our English-speaking medical staff who will advise on which sampling option is most appropriate for you.",
  },
  {
    q: "Why do I need double HPV sampling?",
    a: "HPV can be present at different sites. If symptoms are present at both the glans/genital area and the urethral opening, testing from both sites maximises diagnostic sensitivity. Your doctor will assess this at consultation.",
  },
  {
    q: "Is HPV testing cheaper in Turkey than the UK?",
    a: "Yes. HPV genotyping typically costs £500–£700 in UK private clinics. Our Antalya pricing of £300–£600 represents a saving of up to 57% without any reduction in test quality.",
  },
  {
    q: "How long do HPV test results take?",
    a: "HPV genotyping results are typically available within 24–48 hours of sample collection. Results are delivered securely, digitally.",
  },
];

export default function HPVTestPricePage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Prices", url: `${siteConfig.url}/prices` },
          { name: "HPV Test Price", url: `${siteConfig.url}/hpv-test-price` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={productSchema({
          name: "HPV Genotyping Test — Antalya",
          description:
            "Private HPV genotyping test in Antalya. Identifies high-risk and low-risk HPV strains. Includes consultation and laboratory analysis.",
          url: `${siteConfig.url}/hpv-test-price`,
          priceGBP: 300,
        })}
      />

      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Prices", href: "/prices" },
          { name: "HPV Test Price", href: "/hpv-test-price" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Test Price in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private HPV genotyping from <strong>£300</strong>. Double sampling available at <strong>£600</strong>. Includes consultation and laboratory analysis.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book HPV Test
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-12">HPV Testing Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">HPV Genotyping Test</h3>
                <p className="text-5xl font-bold text-[#2563EB] mb-4">£300</p>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                  {[
                    "Single-site sampling",
                    "High-risk & low-risk strain detection",
                    "PCR-based laboratory analysis",
                    "Pre-test consultation included",
                    "Results within 24–48 hours",
                    "Confidential result report",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">Ideal for: Standard screening, no active symptoms at multiple sites</p>
              </div>

              <div className="bg-white rounded-xl border-2 border-[#2563EB] p-8 relative shadow-md">
                <span className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs font-bold px-2 py-1 rounded">
                  Recommended
                </span>
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Double HPV Sampling</h3>
                <p className="text-5xl font-bold text-[#2563EB] mb-4">£600</p>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                  {[
                    "Genital swab + urethral swab",
                    "Dual-site maximum sensitivity",
                    "High-risk & low-risk strains",
                    "PCR laboratory analysis",
                    "Pre-test consultation included",
                    "Results within 24–48 hours",
                    "Confidential result report",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">Ideal for: Persistent symptoms, complex cases, high-risk exposure</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">When Is Double Sampling Recommended?</h2>
            <p className="text-gray-600 mb-6">
              Depending on your symptoms and clinical findings, your doctor may recommend testing from two separate anatomical sites. Double sampling increases diagnostic sensitivity and is particularly important in the following situations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Symptoms present at both genital and urethral areas",
                "Persistent or recurring HPV symptoms",
                "Complex clinical presentation",
                "History of high-risk sexual exposure",
                "Previous positive HPV result at one site",
                "Wanting maximum diagnostic confidence",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-[#2563EB] font-bold mt-0.5">→</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Your doctor will assess your clinical situation during the pre-test consultation and advise whether single or double sampling is appropriate for you.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Genotyping Test", href: "/hpv-genotyping-test" },
                { label: "HPV PCR Test", href: "/hpv-pcr-test" },
                { label: "HPV Testing for Men", href: "/hpv-testing-for-men" },
                { label: "Single vs Double HPV Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "HPV vs Herpes", href: "/hpv-vs-herpes" },
                { label: "STI Test Packages", href: "/sti-test-packages" },
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
        <CTASection title="Book Your HPV Test in Antalya" subtitle="Private genotyping from £300. Consultation included. Same-day appointments available." />
      </main>
    </>
  );
}
