import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Test vs Standard STD Test | What's the Difference?",
  description:
    "HPV test vs standard STD test explained. Learn why HPV testing is not included in most standard STI panels and when you need both. Antalya private clinic.",
  alternates: { canonical: `${siteConfig.url}/hpv-test-vs-standard-std-test` },
  openGraph: {
    title: "HPV Test vs Standard STD Test | What's the Difference?",
    description: "HPV testing is separate from standard STD panels. Understand the differences and which tests you need.",
    url: `${siteConfig.url}/hpv-test-vs-standard-std-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Is HPV included in a standard STI panel?",
    a: "No. Standard STI panels typically screen for chlamydia, gonorrhoea, syphilis, and HIV. HPV requires a separate, specific DNA test and is not routinely included in basic panels because it requires different sampling and laboratory methodology.",
  },
  {
    q: "Do I need both a standard STI test and an HPV test?",
    a: "This depends on your risk profile and symptoms. If you have had potential exposure to multiple STIs, a combination approach — standard panel plus HPV genotyping — provides the most comprehensive picture. Our full packages include both.",
  },
  {
    q: "Why is HPV testing separate?",
    a: "HPV is detected by molecular DNA analysis (PCR), which identifies the specific viral genotype. This is technically and procedurally different from the immunological and culture-based methods used for bacterial STIs like chlamydia and gonorrhoea.",
  },
  {
    q: "Can I get HPV and standard STI testing done in one appointment?",
    a: "Yes. Our packages combine HPV genotyping with other tests including HIV, Androflor, and standard STI pathogens in a single appointment.",
  },
];

export default function HPVvsSTDTestPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV Test vs Standard STD Test", url: `${siteConfig.url}/hpv-test-vs-standard-std-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Test vs Standard STD Test</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Many patients assume a standard STI panel includes HPV. It does not. Understanding the difference is essential to knowing whether you are fully screened.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Ask Which Test You Need
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Comparison: HPV Test vs Standard STD Panel</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">Standard STD Panel</th>
                    <th className="p-3 text-center">HPV Genotyping Test</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Detects HPV", "✗ No", "✓ Yes"],
                    ["Detects Chlamydia", "✓ Yes", "✗ No"],
                    ["Detects Gonorrhoea", "✓ Yes", "✗ No"],
                    ["Detects HIV", "✓ Yes", "✗ No"],
                    ["Detects Syphilis", "✓ Yes", "✗ No"],
                    ["Identifies HPV strain", "✗ No", "✓ Yes (genotyping)"],
                    ["Cancer risk assessment", "✗ No", "✓ Yes"],
                    ["Test method", "Swab/blood/culture", "PCR DNA analysis"],
                    ["Price (Antalya)", "Varies", "£300–£600"],
                  ].map(([feature, std, hpv]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{std}</td>
                      <td className="p-3 text-center text-gray-700">{hpv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Why HPV Requires a Separate Test</h2>
            <p className="text-gray-600 mb-4">
              Bacterial STIs like chlamydia and gonorrhoea are detected through culture, immunoassay, or NAAT (nucleic acid amplification test) from urine or swab samples. HPV, as a virus, requires specific DNA-based PCR analysis to identify its presence and genotype. The two processes use different laboratory methodologies and are incompatible in a single panel.
            </p>
            <p className="text-gray-600 mb-4">
              HPV is also not included in standard public health screening programmes for men because there is no currently approved treatment to clear HPV itself — management focuses on monitoring and treating its consequences. However, knowing your HPV status and specific strain remains clinically valuable.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">When Should You Get Both?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Recent unprotected sexual contact with new partners",
                "Visible genital warts or skin changes",
                "Concerned about cancer risk from HPV",
                "Comprehensive pre-relationship screening",
                "Symptoms that might be bacterial or viral in origin",
                "Medical tourism screening package",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-[#2563EB] font-bold">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Comparisons</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV PCR vs Genotyping", href: "/hpv-pcr-vs-hpv-genotyping" },
                { label: "Single vs Double HPV Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "Full Panel vs Basic STD Test", href: "/full-sti-panel-vs-basic-std-test" },
                { label: "STI Packages", href: "/sti-test-packages" },
                { label: "HPV Genotyping Test", href: "/hpv-genotyping-test" },
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
        <CTASection title="Not Sure Which Test You Need?" subtitle="WhatsApp our team and we will advise exactly which tests are appropriate for your situation." />
      </main>
    </>
  );
}
