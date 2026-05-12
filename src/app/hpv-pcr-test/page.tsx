import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalTestSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "HPV PCR Test Antalya | Molecular HPV Testing Turkey",
  description:
    "HPV PCR testing in Antalya. Highly sensitive molecular detection of HPV DNA. Used for genotyping and strain identification. Private clinic.",
  alternates: { canonical: `${siteConfig.url}/hpv-pcr-test` },
  openGraph: {
    title: "HPV PCR Test Antalya | Molecular HPV Testing Turkey",
    description: "HPV PCR test in Antalya. Molecular DNA detection for high and low-risk HPV strains. Private, confidential.",
    url: `${siteConfig.url}/hpv-pcr-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is an HPV PCR test?",
    a: "PCR (Polymerase Chain Reaction) is the molecular method used to detect HPV DNA in a sample. The test amplifies tiny amounts of HPV genetic material so it can be detected and identified. It is the most sensitive and accurate method for HPV detection available.",
  },
  {
    q: "Is HPV PCR the same as HPV genotyping?",
    a: "PCR is the technology used to perform HPV genotyping. All our HPV genotyping tests use real-time PCR analysis. The terms are often used interchangeably when referring to HPV strain identification testing.",
  },
  {
    q: "How accurate is HPV PCR testing?",
    a: "Real-time PCR HPV testing has sensitivity and specificity exceeding 95–99%. It is the gold standard for HPV detection and is used in clinical and research settings worldwide.",
  },
  {
    q: "What sample is needed for HPV PCR testing?",
    a: "A swab from the genital area, urethra, cervix, anus, or throat depending on the clinical indication. Sample collection is quick and minimally uncomfortable.",
  },
  {
    q: "How long do HPV PCR results take?",
    a: "Results are typically available within 24–48 hours of sample submission to the laboratory.",
  },
];

export default function HPVPCRTestPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV Test Antalya", url: `${siteConfig.url}/hpv-test-antalya` },
          { name: "HPV PCR Test", url: `${siteConfig.url}/hpv-pcr-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={medicalTestSchema({
          name: "HPV PCR Test",
          description: "Real-time PCR molecular test for HPV DNA detection and genotype identification.",
          url: `${siteConfig.url}/hpv-pcr-test`,
          usedToDiagnose: "Human Papillomavirus (HPV) infection",
        })}
      />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "HPV PCR Test Antalya", href: "/hpv-pcr-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV PCR Test in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Gold-standard molecular HPV testing. Real-time PCR analysis for highest sensitivity and accurate strain identification. Private clinic, Antalya.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book HPV PCR Test
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">What Is HPV PCR Testing?</h2>
            <p className="text-gray-600 mb-4">
              PCR (Polymerase Chain Reaction) is the molecular amplification technique used to detect HPV DNA in biological samples. It works by making millions of copies of specific HPV DNA sequences, making even tiny viral loads detectable. All of our HPV genotyping tests use real-time PCR technology.
            </p>
            <p className="text-gray-600 mb-4">
              The test is performed on swab samples from the affected site. HPV DNA is extracted from the sample and run through the PCR process, which simultaneously detects and identifies the HPV genotype present.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">HPV PCR vs Other HPV Tests</h2>
            <p className="text-gray-600 mb-4">
              See our detailed comparison: <Link href="/hpv-pcr-vs-hpv-genotyping" className="text-[#2563EB] hover:underline">HPV PCR vs HPV Genotyping</Link>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Method</th>
                    <th className="p-3 text-center">Detects Presence</th>
                    <th className="p-3 text-center">Identifies Strain</th>
                    <th className="p-3 text-center">Sensitivity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Rapid Antigen Test", "✓", "✗", "Moderate"],
                    ["Standard HPV DNA Test", "✓", "Partial", "High"],
                    ["HPV PCR / Genotyping", "✓", "✓ (full)", "Very High"],
                  ].map(([method, presence, strain, sensitivity]) => (
                    <tr key={method} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{method}</td>
                      <td className="p-3 text-center">{presence}</td>
                      <td className="p-3 text-center">{strain}</td>
                      <td className="p-3 text-center text-gray-600">{sensitivity}</td>
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
                { label: "HPV Genotyping Test", href: "/hpv-genotyping-test" },
                { label: "PCR vs Genotyping", href: "/hpv-pcr-vs-hpv-genotyping" },
                { label: "HPV Test Antalya", href: "/hpv-test-antalya" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "Single vs Double Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "HPV Testing for Men", href: "/hpv-testing-for-men" },
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
        <CTASection title="Book HPV PCR Testing in Antalya" subtitle="Gold-standard molecular HPV testing. Private, confidential, same-day appointments." />
      </main>
    </>
  );
}
