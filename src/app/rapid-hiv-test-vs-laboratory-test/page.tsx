import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Rapid HIV Test vs Laboratory Test | Which Is Better?",
  description:
    "Rapid HIV test vs laboratory blood test compared. Window periods, accuracy, and which to choose. Guide from Antalya private sexual health clinic.",
  alternates: { canonical: `${siteConfig.url}/rapid-hiv-test-vs-laboratory-test` },
  openGraph: {
    title: "Rapid HIV Test vs Laboratory Test | Which Is Better?",
    description: "Rapid vs laboratory HIV test: accuracy, window periods, and which is right for you.",
    url: `${siteConfig.url}/rapid-hiv-test-vs-laboratory-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Is a rapid HIV test as accurate as a blood test?",
    a: "After their respective window periods, both tests are highly accurate. The key difference is timing: rapid antibody tests require 90 days post-exposure for full reliability, while 4th generation laboratory tests are reliable from 45 days. Within the first 45 days, the laboratory blood test is significantly more sensitive.",
  },
  {
    q: "Which HIV test should I choose?",
    a: "If it has been more than 90 days since potential exposure and you want an immediate result, a rapid test is appropriate. If your potential exposure was within the last 45–90 days, or you want the most comprehensive test, choose the 4th generation laboratory blood test.",
  },
  {
    q: "Can I have both tests?",
    a: "Yes. Some patients choose to have a rapid test for immediate reassurance and a simultaneous laboratory test for confirmation. Discuss this option with our medical team.",
  },
  {
    q: "What does a reactive rapid HIV test mean?",
    a: "A reactive (positive) rapid HIV test result requires confirmation with a laboratory blood test. A rapid test alone is not sufficient for a definitive HIV diagnosis — confirmatory testing is always required.",
  },
];

export default function RapidVsLabHIVPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HIV Test Antalya", url: `${siteConfig.url}/hiv-test-antalya` },
          { name: "Rapid vs Laboratory HIV Test", url: `${siteConfig.url}/rapid-hiv-test-vs-laboratory-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Rapid HIV Test vs Laboratory Test", href: "/rapid-hiv-test-vs-laboratory-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rapid HIV Test vs Laboratory Test</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Both tests are valuable — but they serve different purposes. Understand window periods, accuracy, and which test is right for your situation.
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
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">Rapid Test</th>
                    <th className="p-3 text-center">4th Gen Lab Blood Test</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Detects antibodies", "✓ Yes", "✓ Yes"],
                    ["Detects p24 antigen", "✗ No", "✓ Yes"],
                    ["Window period", "23–90 days", "18–45 days"],
                    ["Result time", "20–30 minutes", "Hours–1 day"],
                    ["Suitable within 45 days", "Limited", "✓ Yes"],
                    ["Confirmatory for diagnosis", "✗ No (reactive needs confirmation)", "✓ Yes"],
                    ["Best for", ">90 days post-exposure", "45+ days post-exposure"],
                    ["Available at our clinic", "✓", "✓"],
                  ].map(([feature, rapid, lab]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{rapid}</td>
                      <td className="p-3 text-center text-gray-700">{lab}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Understanding Window Periods</h2>
            <p className="text-gray-600 mb-4">
              The window period is the time after HIV exposure during which a test may not yet detect the virus, even if infection has occurred. Testing too early can produce a false negative result.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-bold text-amber-800 mb-2">Rapid Test Window Period</h4>
                <p className="text-sm text-amber-700">23–90 days. For definitive results, test at 90 days post-exposure.</p>
              </div>
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">4th Gen Lab Test Window Period</h4>
                <p className="text-sm text-blue-700">18–45 days. For definitive results, test at 45 days post-exposure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related HIV Testing Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HIV Blood Test", href: "/hiv-blood-test" },
                { label: "Rapid HIV Test Antalya", href: "/rapid-hiv-test-antalya" },
                { label: "HIV Antibody vs PCR", href: "/hiv-antibody-vs-pcr-test" },
                { label: "Private HIV Testing", href: "/private-hiv-testing" },
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
        <CTASection title="Book HIV Testing in Antalya" subtitle="Both rapid and laboratory HIV tests available. Private, confidential, English-speaking clinic." />
      </main>
    </>
  );
}
