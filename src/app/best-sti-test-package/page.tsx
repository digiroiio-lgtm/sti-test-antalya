import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Best STI Test Package in Antalya | Which Package to Choose?",
  description:
    "Find the best STI testing package for your needs in Antalya. Compare Standard (£900) and Double HPV (£1,200) packages. Expert guidance. Private clinic Turkey.",
  alternates: { canonical: `${siteConfig.url}/best-sti-test-package` },
  openGraph: {
    title: "Best STI Test Package in Antalya | Which Package to Choose?",
    description: "Compare the best STI test packages in Antalya, Turkey. From £900. Expert consultation included.",
    url: `${siteConfig.url}/best-sti-test-package`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is the best STI test package in Antalya?",
    a: "For most patients, the Standard Package (£900) — combining HPV genotyping, Androflor microbiome analysis, and HIV blood tests — provides comprehensive coverage. For patients with complex or multi-site symptoms, the Double HPV Package (£1,200) with dual HPV sampling is the most thorough option.",
  },
  {
    q: "Does the best STI package include HIV?",
    a: "Yes. Both our packages (£900 and £1,200) include HIV blood tests alongside HPV and Androflor testing.",
  },
  {
    q: "Is a package better value than individual tests?",
    a: "Packages are designed to provide comprehensive value. Individual test prices total the same as the package, but packages additionally include both initial and follow-up consultations at no extra charge.",
  },
  {
    q: "Can I get a customised STI package?",
    a: "Yes. If you need different combinations of tests — for example HPV + HIV without Androflor — we can build a tailored package. Contact us via WhatsApp for a personalised quote.",
  },
];

export default function BestSTITestPackagePage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STI Packages", url: `${siteConfig.url}/sti-test-packages` },
          { name: "Best STI Test Package", url: `${siteConfig.url}/best-sti-test-package` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Best STI Test Package", href: "/best-sti-test-package" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best STI Test Package in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Our two packages cover HPV, HIV, and advanced microbiome analysis. Both include consultations. Find out which is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Get Expert Advice
              </a>
              <Link
                href="/sti-test-packages"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-12">The Two Best Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Standard Package</h3>
                <p className="text-5xl font-bold text-[#2563EB] mb-6">£900</p>
                <p className="text-sm text-gray-600 mb-4">Best for: Routine comprehensive screening</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  {[
                    "HPV Genotyping (single site)",
                    "Androflor Advanced Microbiome",
                    "HIV Blood Tests",
                    "Initial consultation",
                    "Follow-up consultation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sti-test-packages"
                  className="block w-full text-center bg-[#0A2342] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#2563EB] p-8 relative shadow-lg">
                <span className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Maximum Coverage
                </span>
                <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Double HPV Package</h3>
                <p className="text-5xl font-bold text-[#2563EB] mb-6">£1,200</p>
                <p className="text-sm text-gray-600 mb-4">Best for: Complex symptoms, highest sensitivity</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  {[
                    "Dual HPV sampling (genital + urethral)",
                    "Androflor Advanced Microbiome",
                    "HIV Blood Tests",
                    "Initial consultation",
                    "Follow-up consultation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#16A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  💬 Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "All STI Packages", href: "/sti-test-packages" },
                { label: "Compare Packages", href: "/standard-vs-double-hpv-package" },
                { label: "Full STI Panel vs Basic", href: "/full-sti-panel-vs-basic-std-test" },
                { label: "All Prices", href: "/prices" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
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
        <CTASection title="Book the Right Package for You" subtitle="WhatsApp our team for personalised advice on which package fits your situation." />
      </main>
    </>
  );
}
