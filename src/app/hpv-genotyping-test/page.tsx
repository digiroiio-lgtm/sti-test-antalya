import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalTestSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Genotyping Test Antalya | Identify HPV Strains",
  description:
    "HPV genotyping test in Antalya. Identifies specific high-risk and low-risk HPV strains by DNA analysis. Private clinic. From £300. Includes consultation.",
  alternates: { canonical: `${siteConfig.url}/hpv-genotyping-test` },
  openGraph: {
    title: "HPV Genotyping Test Antalya | Identify HPV Strains",
    description: "HPV genotyping identifies exactly which HPV strains are present. Private testing from £300 in Antalya, Turkey.",
    url: `${siteConfig.url}/hpv-genotyping-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is HPV genotyping?",
    a: "HPV genotyping is a molecular test that identifies the exact type (genotype) of HPV present in a sample. Unlike a simple HPV positive/negative test, genotyping tells you which strain — e.g. HPV 16, HPV 18, HPV 6 — is present, which is important for risk assessment and management.",
  },
  {
    q: "What is the difference between HPV genotyping and a standard HPV test?",
    a: "A standard HPV test typically only confirms presence or absence of HPV, or classifies it as high-risk vs low-risk. Genotyping goes further by identifying the exact strain(s), allowing your doctor to assess cancer risk and management pathway more precisely.",
  },
  {
    q: "Which HPV strains are identified by genotyping?",
    a: "Our genotyping test identifies 14+ HPV types including high-risk strains 16, 18, 31, 33, 45, 52, 58, and low-risk strains 6, 11. HPV 16 and 18 carry the highest cancer risk and are specifically identified in all reports.",
  },
  {
    q: "How is genotyping performed?",
    a: "A swab is taken from the relevant site (genital, urethral, anal, or cervical). The sample undergoes real-time PCR analysis in our laboratory partner. DNA from the sample is amplified and tested against known HPV strain profiles.",
  },
  {
    q: "How long do HPV genotyping results take?",
    a: "Results are typically available within 24–48 hours of sample collection.",
  },
  {
    q: "Can I have both genital and urethral genotyping?",
    a: "Yes. Double sampling (genital + urethral) is available at £600 and significantly increases detection sensitivity for patients with symptoms at multiple sites.",
  },
];

export default function HPVGenotypingTestPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV Test Antalya", url: `${siteConfig.url}/hpv-test-antalya` },
          { name: "HPV Genotyping Test", url: `${siteConfig.url}/hpv-genotyping-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={medicalTestSchema({
          name: "HPV Genotyping Test",
          description: "Molecular PCR test identifying specific HPV genotypes in genital, urethral, anal, or cervical samples.",
          url: `${siteConfig.url}/hpv-genotyping-test`,
          usedToDiagnose: "Human Papillomavirus (HPV) infection",
        })}
      />
      <SchemaOrg
        schema={productSchema({
          name: "HPV Genotyping Test — Antalya",
          description: "Private HPV genotyping in Antalya. Identifies high-risk and low-risk HPV strains by PCR.",
          url: `${siteConfig.url}/hpv-genotyping-test`,
          priceGBP: 300,
        })}
      />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Genotyping Test in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Advanced DNA testing that identifies the exact HPV strain present. Not just positive/negative — know exactly which HPV type you carry. From <strong>£300</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Book HPV Genotyping
              </a>
              <Link
                href="/hpv-test-price"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">What Is HPV Genotyping?</h2>
            <p className="text-gray-600 mb-4">
              Human Papillomavirus (HPV) exists as over 200 distinct strains. Approximately 14 of these are classified as high-risk because they are associated with cervical, penile, anal, and oropharyngeal cancers. Others are low-risk and may cause genital warts but do not progress to malignancy.
            </p>
            <p className="text-gray-600 mb-4">
              HPV genotyping goes beyond simply detecting HPV presence. It identifies the specific strain (genotype), which allows your doctor to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Assess your individual cancer risk (HPV 16/18 carry the highest risk)",
                "Determine whether surveillance, colposcopy, or further investigation is needed",
                "Evaluate the effectiveness of HPV vaccination coverage",
                "Monitor for strain-specific clearance or persistence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#2563EB] font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">HPV Strains Detected</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-700 mb-3">High-Risk Strains (Cancer-Associated)</h3>
                <p className="text-sm text-gray-600 mb-2">
                  HPV 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68
                </p>
                <p className="text-xs text-gray-500">HPV 16 and 18 identified individually in all reports.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-700 mb-3">Low-Risk Strains (Wart-Associated)</h3>
                <p className="text-sm text-gray-600 mb-2">HPV 6, 11 (most common causes of genital warts)</p>
                <p className="text-xs text-gray-500">Do not progress to cancer. Treatment focuses on symptom management.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">Single vs Double HPV Genotyping</h2>
            <p className="text-gray-600 mb-4">
              Depending on symptoms and clinical findings, genotyping may be performed from one or two anatomical sites:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-[#0A2342] mb-2">Single Sampling — £300</h4>
                <p className="text-sm text-gray-600">One swab from the primary symptomatic site. Appropriate for most standard screening scenarios.</p>
              </div>
              <div className="p-5 border-2 border-[#2563EB] rounded-lg">
                <h4 className="font-bold text-[#0A2342] mb-2">Double Sampling — £600</h4>
                <p className="text-sm text-gray-600">Genital + urethral sampling. Increases sensitivity for patients with complex or multi-site symptoms.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Not sure which is appropriate? <Link href="/single-vs-double-hpv-sampling" className="text-[#2563EB] hover:underline">See our guide: Single vs Double HPV Sampling</Link>.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV PCR Test", href: "/hpv-pcr-test" },
                { label: "HPV Testing for Men", href: "/hpv-testing-for-men" },
                { label: "Single vs Double Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "HPV vs Herpes", href: "/hpv-vs-herpes" },
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
        <CTASection title="Book HPV Genotyping in Antalya" subtitle="From £300. Know your exact HPV strain. Private, confidential, English-speaking clinic." />
      </main>
    </>
  );
}
