import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV vs Herpes: What Is the Difference? | Guide",
  description:
    "HPV vs herpes: key differences explained. How each is transmitted, detected, treated, and what testing is available in Antalya, Turkey.",
  alternates: { canonical: `${siteConfig.url}/hpv-vs-herpes` },
  openGraph: {
    title: "HPV vs Herpes: What Is the Difference?",
    description: "HPV and herpes are different viruses. Compare symptoms, testing, treatment, and how to tell them apart.",
    url: `${siteConfig.url}/hpv-vs-herpes`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is the difference between HPV and herpes?",
    a: "HPV (Human Papillomavirus) and herpes (Herpes Simplex Virus, HSV) are two entirely different viruses. HPV can cause genital warts and is associated with several cancers. Herpes causes painful blisters or sores. They have different presentations, testing methods, and management approaches.",
  },
  {
    q: "Can HPV and herpes be confused?",
    a: "Sometimes. Both can cause genital lesions. HPV typically causes wart-like growths (soft, flesh-coloured). Herpes causes painful blisters that ulcerate. However, atypical presentations occur and laboratory testing is the only reliable way to distinguish them.",
  },
  {
    q: "Can you have both HPV and herpes at the same time?",
    a: "Yes. HPV and herpes are separate infections and co-infection is possible. Our Androflor test detects HSV-1 and HSV-2 alongside HPV as part of a comprehensive screen.",
  },
  {
    q: "How are HPV and herpes tested?",
    a: "HPV is detected by PCR-based DNA genotyping from a swab. Herpes (HSV-1/HSV-2) is detected by PCR swab from an active lesion, or by blood antibody testing for past exposure. Our Androflor microbiome panel detects both.",
  },
  {
    q: "Is there treatment for HPV and herpes?",
    a: "There is no cure for either HPV or herpes. HPV management focuses on treating its consequences (warts, cellular changes). Herpes symptoms can be managed with antiviral medication (aciclovir, valaciclovir). Vaccination (Gardasil 9) prevents the most dangerous HPV strains.",
  },
];

export default function HPVvsHerpesPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV vs Herpes", url: `${siteConfig.url}/hpv-vs-herpes` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV vs Herpes: Key Differences</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              HPV and herpes are two distinct viruses with different symptoms, risks, and testing approaches. Understanding the difference is important for accurate diagnosis.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book Testing
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">HPV vs Herpes at a Glance</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">HPV</th>
                    <th className="p-3 text-center">Herpes (HSV)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Virus type", "Human Papillomavirus", "Herpes Simplex Virus 1 & 2"],
                    ["Common symptoms", "Warts (low-risk), often none", "Painful blisters / sores"],
                    ["Often asymptomatic", "Yes", "Often"],
                    ["Cancer risk", "Yes (high-risk strains)", "No"],
                    ["Testing method", "PCR genotyping swab", "PCR swab or blood antibody"],
                    ["Vaccine available", "Yes (Gardasil 9)", "In development"],
                    ["Treatment", "Wart/lesion management", "Antiviral medication"],
                    ["Detected by Androflor", "✓", "✓ (HSV-1 & HSV-2)"],
                  ].map(([feature, hpv, herpes]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{hpv}</td>
                      <td className="p-3 text-center text-gray-700">{herpes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-4 mt-8">When to Test for Both</h2>
            <p className="text-gray-600 mb-4">
              Both HPV and herpes can be present simultaneously. If you have any unexplained genital lesions, persistent irritation, or have had unprotected sexual contact with a new partner, testing for both is advisable.
            </p>
            <p className="text-gray-600">
              Our <Link href="/androflor-test" className="text-[#2563EB] hover:underline">Androflor test</Link> detects HSV-1, HSV-2, and HPV (high-risk) as part of its 30+ pathogen panel. Our <Link href="/hpv-genotyping-test" className="text-[#2563EB] hover:underline">HPV genotyping test</Link> specifically identifies the exact HPV strain with genotype-level detail.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Test Antalya", href: "/hpv-test-antalya" },
                { label: "Herpes Test", href: "/herpes-test" },
                { label: "HPV Genotyping", href: "/hpv-genotyping-test" },
                { label: "Androflor Test", href: "/androflor-test" },
                { label: "STI vs STD", href: "/sti-vs-std" },
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
        <CTASection title="Test for HPV and Herpes in Antalya" subtitle="Private, confidential testing. Androflor detects both in one test. English-speaking clinic." />
      </main>
    </>
  );
}
