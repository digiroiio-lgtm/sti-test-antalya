import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV PCR vs HPV Genotyping | What Is the Difference?",
  description:
    "HPV PCR test vs HPV genotyping explained. Understand the difference between detecting HPV and identifying which strain is present. Antalya clinic guide.",
  alternates: { canonical: `${siteConfig.url}/hpv-pcr-vs-hpv-genotyping` },
  openGraph: {
    title: "HPV PCR vs HPV Genotyping | What Is the Difference?",
    description: "HPV PCR and HPV genotyping comparison. Which test is right for you?",
    url: `${siteConfig.url}/hpv-pcr-vs-hpv-genotyping`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is the difference between HPV PCR and HPV genotyping?",
    a: "HPV PCR is the underlying laboratory method (Polymerase Chain Reaction) used to detect HPV DNA. HPV genotyping is a type of PCR test that goes further by identifying the specific HPV strain (genotype) present. In practice, all our HPV tests are PCR-based genotyping tests.",
  },
  {
    q: "Is HPV PCR the same as HPV genotyping?",
    a: "They are closely related. A basic HPV PCR test detects whether HPV DNA is present (positive/negative). An HPV genotyping test uses PCR to identify which specific strain is present. Genotyping provides more clinical information.",
  },
  {
    q: "Why does the specific HPV genotype matter?",
    a: "Different HPV genotypes carry different risk levels. HPV 16 and 18 carry the highest cancer risk. Knowing the exact genotype guides clinical decisions about monitoring frequency, urgency of follow-up, and management approach.",
  },
  {
    q: "Which test should I choose?",
    a: "For full clinical information, genotyping is preferred over basic HPV detection. All our standard HPV tests are genotyping tests, identifying the specific strain(s) present alongside high/low risk classification.",
  },
];

export default function HPVPCRvsGenotypingPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV PCR vs HPV Genotyping", url: `${siteConfig.url}/hpv-pcr-vs-hpv-genotyping` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV PCR vs HPV Genotyping</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Both use PCR technology — but they tell you different things. Genotyping identifies <em>which</em> HPV strain you have. Here is exactly what the difference means for you.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book HPV Genotyping
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">PCR vs Genotyping: Side-by-Side Comparison</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">Basic HPV PCR</th>
                    <th className="p-3 text-center">HPV Genotyping</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Detects HPV presence", "✓ Yes", "✓ Yes"],
                    ["Identifies specific strain", "✗ No", "✓ Yes"],
                    ["Distinguishes HPV 16 & 18", "✗ No", "✓ Yes"],
                    ["High vs low risk classification", "Sometimes", "✓ Always"],
                    ["Cancer risk guidance", "Limited", "✓ Full"],
                    ["Management pathway guidance", "Limited", "✓ Full"],
                    ["Technology", "PCR", "PCR (advanced)"],
                    ["Available at our clinic", "✓", "✓"],
                  ].map(([feature, basic, geno]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{basic}</td>
                      <td className="p-3 text-center text-gray-700">{geno}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-4 mt-8">Why Genotyping Is Preferred</h2>
            <p className="text-gray-600 mb-4">
              A basic HPV PCR result of &ldquo;HPV detected&rdquo; leaves significant clinical uncertainty. Without knowing the specific genotype, it is impossible to accurately assess cancer risk, determine the appropriate monitoring interval, or understand whether the strain is likely to clear spontaneously or persist.
            </p>
            <p className="text-gray-600">
              HPV genotyping resolves this ambiguity. Knowing whether you have HPV 16 (highest cancer risk), HPV 6 (wart-causing, low risk), or another strain dramatically changes the clinical interpretation and recommended follow-up.
            </p>

            <div className="mt-8 p-5 bg-blue-50 rounded-xl">
              <p className="font-semibold text-[#0A2342]">Our Recommendation</p>
              <p className="text-gray-700 text-sm mt-1">
                All HPV tests at our Antalya clinic are full genotyping tests. We do not offer basic detection-only HPV tests, as we believe genotyping provides significantly more clinical value for the same testing process.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Genotyping Test", href: "/hpv-genotyping-test" },
                { label: "HPV PCR Test", href: "/hpv-pcr-test" },
                { label: "HPV Test vs STD Test", href: "/hpv-test-vs-standard-std-test" },
                { label: "Single vs Double Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
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
        <CTASection title="Book HPV Genotyping in Antalya" subtitle="Know your exact HPV strain. From £300. Private clinic. Same-day appointments." />
      </main>
    </>
  );
}
