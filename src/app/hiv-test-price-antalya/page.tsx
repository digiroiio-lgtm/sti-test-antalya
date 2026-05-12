import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HIV Test Price Antalya | HIV Blood Test Cost Turkey £240",
  description:
    "HIV blood tests in Antalya from £240. Includes laboratory screening, confidential results, and English-speaking support. Private clinic. No referral needed.",
  alternates: { canonical: `${siteConfig.url}/hiv-test-price-antalya` },
  openGraph: {
    title: "HIV Test Price Antalya | HIV Blood Test Cost Turkey £240",
    description: "Private HIV testing in Antalya from £240. Confidential, fast laboratory results.",
    url: `${siteConfig.url}/hiv-test-price-antalya`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "How much does an HIV test cost in Antalya?",
    a: "HIV blood testing is £240 at our Antalya clinic. This is an all-inclusive price covering laboratory analysis, confidential result reporting, and pre-test consultation with English-speaking staff.",
  },
  {
    q: "What type of HIV test is included at this price?",
    a: "The £240 HIV blood test covers comprehensive laboratory blood screening including 4th generation antigen/antibody combination testing. This is the most sensitive and widely recommended HIV test type.",
  },
  {
    q: "Is HIV testing cheaper in Turkey than in the UK?",
    a: "Yes. Private HIV blood testing in the UK typically costs £350–£500. Our Antalya clinic provides the same quality testing for £240, representing a saving of 30–50%.",
  },
  {
    q: "Does the price include consultation?",
    a: "Yes. The HIV test price of £240 includes a pre-test consultation and result communication with our English-speaking medical team.",
  },
  {
    q: "Are rapid HIV tests available at a different price?",
    a: "Rapid point-of-care HIV antibody tests are available. Pricing varies by test type. Contact us via WhatsApp for a full breakdown.",
  },
];

export default function HIVTestPricePage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Prices", url: `${siteConfig.url}/prices` },
          { name: "HIV Test Price", url: `${siteConfig.url}/hiv-test-price-antalya` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={productSchema({
          name: "HIV Blood Test — Antalya Private Clinic",
          description:
            "Private HIV blood testing in Antalya. 4th generation laboratory screening, confidential results, English-speaking staff.",
          url: `${siteConfig.url}/hiv-test-price-antalya`,
          priceGBP: 240,
        })}
      />

      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Prices", href: "/prices" },
          { name: "HIV Test Price", href: "/hiv-test-price-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HIV Test Price in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private HIV blood testing from <strong>£240</strong>. Comprehensive laboratory screening. Confidential. English-speaking staff.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book HIV Test
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-12">HIV Blood Test Pricing</h2>
            <div className="bg-white rounded-xl border-2 border-[#2563EB] p-10 shadow-md">
              <h3 className="text-2xl font-bold text-[#0A2342] mb-2">HIV Blood Tests</h3>
              <p className="text-6xl font-bold text-[#2563EB] mb-6">£240</p>
              <ul className="space-y-3 text-gray-600 text-sm mb-8 text-left max-w-sm mx-auto">
                {[
                  "4th generation antigen/antibody test",
                  "Confidential processing",
                  "Laboratory analysis",
                  "Fast digital result reporting",
                  "Pre-test consultation included",
                  "English-speaking support",
                  "Anonymous testing available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#16A34A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                💬 Book Now
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">HIV Test Price Comparison: Antalya vs UK</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Test Type</th>
                    <th className="p-3 text-center">Antalya</th>
                    <th className="p-3 text-center">UK Private</th>
                    <th className="p-3 text-center">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["4th Gen Combination Test", "£240", "£350–£500", "30–52%"],
                    ["Rapid HIV Antibody Test", "From £180", "£250–£350", "Up to 48%"],
                    ["HIV RNA PCR Test", "On request", "£300–£450", "Significant"],
                    ["HIV + Full STI Package", "£900", "£1,500+", "Up to 40%"],
                  ].map(([test, antalya, uk, saving]) => (
                    <tr key={test} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{test}</td>
                      <td className="p-3 text-center font-bold text-[#2563EB]">{antalya}</td>
                      <td className="p-3 text-center text-gray-600">{uk}</td>
                      <td className="p-3 text-center text-green-600 font-semibold">{saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">* UK prices are approximate market estimates. Actual prices may vary.</p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related HIV Testing Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HIV Test Antalya", href: "/hiv-test-antalya" },
                { label: "HIV Blood Test", href: "/hiv-blood-test" },
                { label: "Rapid HIV Test", href: "/rapid-hiv-test-antalya" },
                { label: "Private HIV Testing", href: "/private-hiv-testing" },
                { label: "Rapid vs Lab HIV Test", href: "/rapid-hiv-test-vs-laboratory-test" },
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
        <CTASection title="Book Your Private HIV Test" subtitle="£240 all-inclusive. Confidential. Same-day appointments available in Antalya." />
      </main>
    </>
  );
}
