import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalTestSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HIV Blood Test Antalya | Laboratory HIV Screening £240",
  description:
    "HIV blood tests in Antalya from £240. 4th generation laboratory HIV screening. Anonymous, confidential, fast results. English-speaking private clinic.",
  alternates: { canonical: `${siteConfig.url}/hiv-blood-test` },
  openGraph: {
    title: "HIV Blood Test Antalya | Laboratory HIV Screening £240",
    description: "HIV blood testing in Antalya from £240. Comprehensive 4th generation laboratory screening.",
    url: `${siteConfig.url}/hiv-blood-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is an HIV blood test?",
    a: "An HIV blood test is a laboratory analysis of a blood sample to detect markers of HIV infection. The most common type is the 4th generation combination test, which detects both HIV p24 antigen (present early in infection) and HIV-1/2 antibodies (present after the immune response develops).",
  },
  {
    q: "Is a blood test more accurate than a rapid HIV test?",
    a: "4th generation laboratory blood tests have a slightly shorter window period than rapid antibody-only tests, making them better for detecting recent infections. Both are highly accurate after their respective window periods have passed.",
  },
  {
    q: "How long does an HIV blood test take?",
    a: "The blood draw takes a few minutes. Laboratory processing for the 4th generation test typically takes several hours to one day. Results are usually ready the same day or within 24 hours.",
  },
  {
    q: "What is the window period for the HIV blood test?",
    a: "The 4th generation combination test has a window period of approximately 18–45 days after potential exposure. For a conclusive result, testing at 45 days or later is recommended.",
  },
  {
    q: "Can I get anonymous HIV blood testing in Antalya?",
    a: "Yes. Anonymous HIV testing is available. No ID linking your result to your identity is required unless you specifically request a named certificate.",
  },
];

export default function HIVBloodTestPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HIV Test Antalya", url: `${siteConfig.url}/hiv-test-antalya` },
          { name: "HIV Blood Test", url: `${siteConfig.url}/hiv-blood-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={medicalTestSchema({
          name: "HIV Blood Test — 4th Generation Combination",
          description: "Laboratory blood test detecting HIV p24 antigen and HIV-1/2 antibodies. 4th generation combination methodology.",
          url: `${siteConfig.url}/hiv-blood-test`,
          usedToDiagnose: "HIV infection (HIV-1 and HIV-2)",
        })}
      />
      <SchemaOrg
        schema={productSchema({
          name: "HIV Blood Tests — Antalya Private Clinic",
          description: "Private HIV blood testing in Antalya. 4th generation laboratory screening, confidential results.",
          url: `${siteConfig.url}/hiv-blood-test`,
          priceGBP: 240,
        })}
      />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HIV Blood Test in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Comprehensive laboratory HIV blood screening from <strong>£240</strong>. 4th generation testing. Anonymous option available. Fast, confidential results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Book HIV Blood Test
              </a>
              <Link
                href="/hiv-test-price-antalya"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                Pricing — £240
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">4th Generation HIV Blood Testing Explained</h2>
            <p className="text-gray-600 mb-4">
              The 4th generation combination HIV test is the most advanced and widely recommended HIV screening method. It detects two distinct markers simultaneously:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 bg-[#F9FAFB] rounded-lg">
                <h3 className="font-bold text-[#0A2342] mb-2">HIV p24 Antigen</h3>
                <p className="text-gray-600 text-sm">A protein produced directly by the HIV virus. Detectable from approximately 14–18 days after infection — earlier than antibody tests alone.</p>
              </div>
              <div className="p-5 bg-[#F9FAFB] rounded-lg">
                <h3 className="font-bold text-[#0A2342] mb-2">HIV-1/2 Antibodies</h3>
                <p className="text-gray-600 text-sm">Antibodies your immune system produces in response to HIV. Detectable from approximately 23–45 days after infection.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">HIV Blood Test vs Rapid Test</h2>
            <p className="text-gray-600 mb-4">
              See our detailed comparison: <Link href="/rapid-hiv-test-vs-laboratory-test" className="text-[#2563EB] hover:underline">Rapid HIV Test vs Laboratory Test</Link>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">Blood Lab Test</th>
                    <th className="p-3 text-center">Rapid Test</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Technology", "4th gen (Ag + Ab)", "Antibody only"],
                    ["Window Period", "18–45 days", "23–90 days"],
                    ["Result Time", "Hours–1 day", "20–30 min"],
                    ["Sensitivity", "Very high", "High"],
                    ["Best For", "Comprehensive screening", "Quick confirmation after window"],
                  ].map(([feature, lab, rapid]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{lab}</td>
                      <td className="p-3 text-center text-gray-700">{rapid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related HIV Testing Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HIV Test Antalya", href: "/hiv-test-antalya" },
                { label: "Rapid HIV Test", href: "/rapid-hiv-test-antalya" },
                { label: "Private HIV Testing", href: "/private-hiv-testing" },
                { label: "Rapid vs Lab HIV Test", href: "/rapid-hiv-test-vs-laboratory-test" },
                { label: "HIV Antibody vs PCR", href: "/hiv-antibody-vs-pcr-test" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
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
        <CTASection title="Book HIV Blood Testing in Antalya" subtitle="£240 all-inclusive. Anonymous option available. Same-day appointments." />
      </main>
    </>
  );
}
