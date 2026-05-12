import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Male Urogenital Flora Test Antalya | Microbiome Analysis",
  description:
    "Male urogenital flora testing in Antalya. PCR-based analysis of the male urogenital microbiome. Detects bacterial, fungal, and STI pathogens. Private clinic.",
  alternates: { canonical: `${siteConfig.url}/male-urogenital-flora-test` },
  openGraph: {
    title: "Male Urogenital Flora Test Antalya | Microbiome Analysis",
    description: "Comprehensive male urogenital flora testing in Antalya. PCR analysis of 30+ microorganisms.",
    url: `${siteConfig.url}/male-urogenital-flora-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is a male urogenital flora test?",
    a: "A male urogenital flora test analyses the full microbial ecosystem of the male urogenital tract. Using PCR technology, it identifies bacteria, fungi, and other microorganisms — both pathogens and commensal organisms — providing a comprehensive picture of urogenital microbiome health.",
  },
  {
    q: "Is this the same as the Androflor test?",
    a: "Yes. The Androflor test is the leading branded male urogenital flora test. It uses real-time PCR to screen for 30+ microorganisms simultaneously in a single sample.",
  },
  {
    q: "Why is urogenital flora analysis important?",
    a: "Standard STI tests focus on a small number of pathogens. Many chronic urogenital symptoms — irritation, discharge, recurrent infections — are caused by organisms not covered by standard panels, including mycoplasma species, ureaplasma, anaerobic bacteria, or fungal dysbiosis. Flora analysis captures the full picture.",
  },
  {
    q: "How is the test performed?",
    a: "A first-catch urine sample or urethral swab is taken. The sample undergoes real-time PCR analysis for 30+ microorganisms simultaneously. Results are typically available within 24–48 hours.",
  },
];

export default function MaleUrogenitalFlorTestPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Androflor Test", url: `${siteConfig.url}/androflor-test` },
          { name: "Male Urogenital Flora Test", url: `${siteConfig.url}/male-urogenital-flora-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Male Urogenital Flora Test", href: "/male-urogenital-flora-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Male Urogenital Flora Test in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Advanced PCR-based analysis of the male urogenital microbiome. Identifies 30+ microorganisms including pathogens often missed by standard STI tests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Book Now
              </a>
              <Link
                href="/androflor-test-price"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                View Price — £360
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">What Is Urogenital Flora?</h2>
            <p className="text-gray-600 mb-4">
              The urogenital tract harbours a complex community of microorganisms — bacteria, fungi, and viruses — that exist in dynamic balance. When this balance is disrupted (dysbiosis), symptoms can develop even in the absence of classically defined STIs.
            </p>
            <p className="text-gray-600 mb-6">
              Male urogenital flora analysis, performed using the Androflor PCR platform, maps this entire ecosystem comprehensively and identifies any pathological organisms present.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">Standard STI Test Covers</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {["Chlamydia", "Gonorrhoea", "Syphilis", "HIV", "Herpes (sometimes)"].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="text-gray-400">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">Androflor Flora Test Also Covers</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {[
                    "Mycoplasma genitalium & hominis",
                    "Ureaplasma parvum & urealyticum",
                    "Trichomonas vaginalis",
                    "Candida species",
                    "Gardnerella vaginalis",
                    "Enterococcus faecalis",
                    "Enterobacteriaceae",
                    "Anaerobic bacteria",
                    "20+ additional organisms",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="text-green-600">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Androflor Test", href: "/androflor-test" },
                { label: "Androflor Test Price", href: "/androflor-test-price" },
                { label: "Advanced Microbiome Test", href: "/advanced-male-microbiome-test" },
                { label: "Androflor vs Culture Test", href: "/androflor-vs-standard-culture-test" },
                { label: "Full STI Panel", href: "/full-sti-panel" },
                { label: "STI Packages", href: "/sti-test-packages" },
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
        <CTASection title="Book Male Flora Testing in Antalya" subtitle="Advanced PCR-based urogenital microbiome analysis. £360, includes consultation." />
      </main>
    </>
  );
}
