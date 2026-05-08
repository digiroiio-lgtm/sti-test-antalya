import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Test Packages Antalya | Full Screening Packages from £900",
  description:
    "Private STI testing packages in Antalya. Standard Package £900 (HPV + HIV + Androflor) or Double HPV Package £1,200. Includes consultations. English-speaking clinic.",
  alternates: { canonical: `${siteConfig.url}/sti-test-packages` },
  openGraph: {
    title: "STI Test Packages Antalya | Full Screening Packages from £900",
    description: "STI testing packages from £900. HPV genotyping, HIV blood tests, and Androflor microbiome analysis. Private clinic Antalya.",
    url: `${siteConfig.url}/sti-test-packages`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is included in the Standard STI Package?",
    a: "The Standard STI Package (£900) includes one HPV genotyping test (single-site), an Androflor advanced microbiome analysis, HIV blood tests, an initial consultation, and a follow-up consultation to discuss your results.",
  },
  {
    q: "What is included in the Double HPV Package?",
    a: "The Double HPV Package (£1,200) includes double HPV sampling (both genital and urethral swabs), Androflor microbiome analysis, HIV blood tests, an initial consultation, and a follow-up consultation.",
  },
  {
    q: "Which package is right for me?",
    a: "If you have symptoms at only one site or are doing routine preventive screening, the Standard Package is appropriate. If you have symptoms at multiple locations, a history of persistent HPV, or want maximum diagnostic sensitivity, the Double HPV Package is recommended.",
  },
  {
    q: "How much do I save with a package vs individual tests?",
    a: "Individual tests would total £900 (HPV £300 + HIV £240 + Androflor £360) for the standard combination, plus additional consultation fees. The package consolidates this with two consultations included at no extra charge.",
  },
  {
    q: "Can I customise a package?",
    a: "Yes. If you need a different combination of tests — for example HIV and Androflor without HPV — contact us via WhatsApp and we will create a tailored quote.",
  },
  {
    q: "How do I book a package?",
    a: "WhatsApp is the fastest and easiest booking method. We typically confirm same-day or next-day appointments.",
  },
];

export default function STITestPackagesPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STI Test Packages", url: `${siteConfig.url}/sti-test-packages` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={productSchema({
          name: "Standard STI Package — HPV + HIV + Androflor Antalya",
          description:
            "Comprehensive private STI screening: HPV genotyping, HIV blood tests, Androflor microbiome analysis. Includes two consultations.",
          url: `${siteConfig.url}/sti-test-packages`,
          priceGBP: 900,
        })}
      />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STI Testing Packages in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Comprehensive private screening packages combining HPV, HIV, and Androflor testing. Consultations included. Private clinic in Antalya.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book a Package
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-4">Choose Your Package</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Both packages include initial and follow-up consultations. No hidden fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Package */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Standard Package</h3>
                <p className="text-5xl font-bold text-[#2563EB] mb-6">£900</p>
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Includes</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[
                      "HPV Genotyping Test (single site)",
                      "Androflor Advanced Microbiome Analysis",
                      "HIV Blood Tests (4th generation)",
                      "Initial consultation",
                      "Follow-up results consultation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Best For</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {[
                      "Routine preventive screening",
                      "Single-site symptom assessment",
                      "Standard sexual health evaluation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gray-400">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0A2342] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  Book Consultation
                </a>
              </div>

              {/* Double HPV Package */}
              <div className="bg-white rounded-2xl border-2 border-[#2563EB] p-8 relative shadow-lg">
                <span className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Comprehensive
                </span>
                <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Double HPV Package</h3>
                <p className="text-5xl font-bold text-[#2563EB] mb-6">£1,200</p>
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Includes</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[
                      "HPV Genotyping — Genital swab",
                      "HPV Genotyping — Urethral swab",
                      "Androflor Advanced Microbiome Analysis",
                      "HIV Blood Tests (4th generation)",
                      "Initial consultation",
                      "Follow-up results consultation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Best For</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {[
                      "Complex or persistent HPV symptoms",
                      "Symptoms at multiple sites",
                      "Higher diagnostic sensitivity",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gray-400">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#16A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">What Is Included in Both Packages?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔬",
                  title: "HPV Genotyping",
                  desc: "Identifies specific HPV strains present, distinguishing high-risk (cancer-associated) from low-risk strains.",
                  href: "/hpv-genotyping-test",
                },
                {
                  icon: "🧬",
                  title: "Androflor Analysis",
                  desc: "PCR-based screening for 30+ urogenital microorganisms including rare and atypical pathogens.",
                  href: "/androflor-test",
                },
                {
                  icon: "🩸",
                  title: "HIV Blood Tests",
                  desc: "4th generation laboratory HIV screening detecting both antibodies and p24 antigen.",
                  href: "/hiv-blood-test",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-[#F9FAFB] rounded-xl border border-gray-100">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#0A2342] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  <Link href={item.href} className="text-[#2563EB] text-sm font-semibold hover:underline">
                    Learn more →
                  </Link>
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
                { label: "All Prices", href: "/prices" },
                { label: "Compare Packages", href: "/standard-vs-double-hpv-package" },
                { label: "Best STI Package", href: "/best-sti-test-package" },
                { label: "Full STI Panel", href: "/full-sti-panel" },
                { label: "HPV vs Basic STI Test", href: "/hpv-test-vs-standard-std-test" },
                { label: "Full Panel vs Basic", href: "/full-sti-panel-vs-basic-std-test" },
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
        <CTASection title="Book Your STI Package Today" subtitle="WhatsApp us to confirm your package and book a same-day appointment in Antalya." />
      </main>
    </>
  );
}
