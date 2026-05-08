import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Standard vs Double HPV Package | Which Package Is Right for You?",
  description:
    "Compare the Standard STI Package (£900) with the Double HPV Package (£1,200). What each includes, who they are for, and how to choose. Antalya clinic guide.",
  alternates: { canonical: `${siteConfig.url}/standard-vs-double-hpv-package` },
  openGraph: {
    title: "Standard vs Double HPV Package | Which Package Is Right for You?",
    description: "£900 Standard vs £1,200 Double HPV Package compared. Inclusions, best-fit patients, and which to choose.",
    url: `${siteConfig.url}/standard-vs-double-hpv-package`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is the main difference between the Standard and Double HPV packages?",
    a: "The main difference is HPV sampling. The Standard Package includes single-site HPV genotyping (one swab location). The Double HPV Package includes two HPV sampling sites — both genital and urethral — for higher diagnostic sensitivity. Both packages include Androflor and HIV tests.",
  },
  {
    q: "Is the Double HPV Package worth the extra £300?",
    a: "For patients with symptoms at multiple sites, persistent HPV concerns, or complex presentations, double sampling provides significantly better diagnostic value. For straightforward screening without multi-site symptoms, the Standard Package is often sufficient.",
  },
  {
    q: "Do both packages include consultations?",
    a: "Yes. Both packages include an initial consultation and a follow-up results consultation at no additional charge.",
  },
  {
    q: "Can I upgrade from Standard to Double Package after arriving?",
    a: "Yes. If the doctor assesses during consultation that double sampling is appropriate, you can upgrade. We will confirm the price difference clearly before proceeding.",
  },
];

export default function StandardVsDoubleHPVPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STI Packages", url: `${siteConfig.url}/sti-test-packages` },
          { name: "Standard vs Double HPV Package", url: `${siteConfig.url}/standard-vs-double-hpv-package` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Standard Package vs Double HPV Package</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Both packages are comprehensive. The key difference is the number of HPV sampling sites. Here is everything you need to know to choose.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Get Personalised Advice
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-12">Package Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Included</th>
                    <th className="p-3 text-center">Standard — £900</th>
                    <th className="p-3 text-center">Double HPV — £1,200</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["HPV Genotyping (single site)", "✓", "—"],
                    ["HPV Genotyping — genital swab", "—", "✓"],
                    ["HPV Genotyping — urethral swab", "—", "✓"],
                    ["Androflor Microbiome Analysis", "✓", "✓"],
                    ["HIV Blood Tests (4th gen)", "✓", "✓"],
                    ["Initial consultation", "✓", "✓"],
                    ["Follow-up results consultation", "✓", "✓"],
                    ["Confidential result report", "✓", "✓"],
                    ["English-speaking support", "✓", "✓"],
                  ].map(([item, standard, double_]) => (
                    <tr key={item} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{item}</td>
                      <td className="p-3 text-center">{standard}</td>
                      <td className="p-3 text-center">{double_}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0A2342] mb-4">Choose Standard if...</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    "Symptoms at one defined site",
                    "Routine or preventive screening",
                    "No urethral symptoms",
                    "First-time comprehensive screen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-[#2563EB] shadow-sm">
                <h3 className="text-xl font-bold text-[#0A2342] mb-4">Choose Double HPV if...</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    "Symptoms at multiple sites",
                    "Persistent HPV concerns",
                    "History of HPV or recurrence",
                    "High-risk exposure history",
                    "Maximum diagnostic confidence desired",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                { label: "Best STI Package", href: "/best-sti-test-package" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "Single vs Double Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "Full STI Panel", href: "/full-sti-panel" },
                { label: "All Prices", href: "/prices" },
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
        <CTASection title="Book Your STI Package in Antalya" subtitle="Standard from £900 or Double HPV Package £1,200. Consultations included. WhatsApp to book." />
      </main>
    </>
  );
}
