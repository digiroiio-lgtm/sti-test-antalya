import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HIV Antibody vs HIV PCR Test | Understanding the Difference",
  description:
    "HIV antibody test vs HIV PCR (RNA) test explained. When each is appropriate, window periods, and which provides the earliest detection. Antalya clinic guide.",
  alternates: { canonical: `${siteConfig.url}/hiv-antibody-vs-pcr-test` },
  openGraph: {
    title: "HIV Antibody vs HIV PCR Test | Understanding the Difference",
    description: "HIV antibody vs PCR test: accuracy, window periods, and clinical use cases compared.",
    url: `${siteConfig.url}/hiv-antibody-vs-pcr-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is an HIV antibody test?",
    a: "An HIV antibody test detects antibodies produced by the immune system in response to HIV infection. Antibodies typically appear 23–45 days after infection and persist indefinitely. This is the most common type of HIV test.",
  },
  {
    q: "What is an HIV PCR test?",
    a: "An HIV PCR (RNA) test detects the HIV virus itself — specifically its genetic material (RNA). It can identify HIV as early as 10–14 days after infection, before antibodies have developed. It is the earliest-detecting HIV test available.",
  },
  {
    q: "Which HIV test detects infection earliest?",
    a: "HIV RNA PCR is the earliest-detecting test, from approximately 10–14 days. 4th generation combination tests (antigen + antibody) detect from 18–45 days. Antibody-only tests detect from 23–90 days.",
  },
  {
    q: "When is HIV PCR testing used?",
    a: "HIV PCR testing is used when very early detection is required — for example, when someone has had a very recent high-risk exposure and needs to know their status as soon as possible, or when early acute HIV infection is suspected.",
  },
  {
    q: "Does the 4th generation test include both?",
    a: "The 4th generation combination test detects HIV p24 antigen (a viral protein, not RNA) alongside antibodies. This is not the same as PCR RNA testing but covers a shorter window period than antibody-only tests while being simpler and more widely available than PCR.",
  },
];

export default function HIVAntibodyVsPCRPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HIV Test Antalya", url: `${siteConfig.url}/hiv-test-antalya` },
          { name: "HIV Antibody vs PCR", url: `${siteConfig.url}/hiv-antibody-vs-pcr-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HIV Antibody vs HIV PCR Test</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Two fundamentally different approaches to HIV detection. Understanding the distinction helps you choose the right test for your situation.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Ask Which Test Is Right
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Comparison: Antibody vs PCR vs 4th Gen</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">Antibody Only</th>
                    <th className="p-3 text-center">4th Gen (Ag+Ab)</th>
                    <th className="p-3 text-center">HIV PCR (RNA)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["What it detects", "Antibodies", "Antigen + Antibodies", "HIV RNA (virus)"],
                    ["Earliest detection", "23–45 days", "18–45 days", "10–14 days"],
                    ["Definitive at", "90 days", "45 days", "10–14 days"],
                    ["Standard use", "Routine screening", "Comprehensive screening", "Early/acute detection"],
                    ["Complexity", "Simple", "Moderate", "Advanced"],
                    ["Available at clinic", "✓", "✓", "On request"],
                  ].map(([feature, ab, gen4, pcr]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{ab}</td>
                      <td className="p-3 text-center text-gray-700">{gen4}</td>
                      <td className="p-3 text-center text-gray-700">{pcr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-4 mt-8">Our Standard Recommendation</h2>
            <p className="text-gray-600 mb-4">
              For most patients, the 4th generation combination blood test is the optimal choice. It provides a shorter window period than antibody-only tests while being widely available, well-validated, and practical for routine clinical use.
            </p>
            <p className="text-gray-600">
              If you have had a very recent potential exposure (within the last 2 weeks) and require the earliest possible answer, contact us to discuss HIV PCR RNA testing options.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HIV Blood Test", href: "/hiv-blood-test" },
                { label: "Rapid HIV Test", href: "/rapid-hiv-test-antalya" },
                { label: "Rapid vs Lab HIV Test", href: "/rapid-hiv-test-vs-laboratory-test" },
                { label: "HIV Test Antalya", href: "/hiv-test-antalya" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
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
        <CTASection title="Book HIV Testing in Antalya" subtitle="4th generation laboratory testing. Private, confidential, English-speaking clinic." />
      </main>
    </>
  );
}
