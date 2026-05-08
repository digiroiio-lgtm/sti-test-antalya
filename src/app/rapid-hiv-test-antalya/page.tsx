import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Rapid HIV Test Antalya | Same-Day Results Private Clinic Turkey",
  description:
    "Rapid HIV testing in Antalya with results in 20–30 minutes. Point-of-care testing for HIV antibodies. Private, walk-in appointments available.",
  alternates: { canonical: `${siteConfig.url}/rapid-hiv-test-antalya` },
  openGraph: {
    title: "Rapid HIV Test Antalya | Same-Day Results Private Clinic Turkey",
    description: "Rapid HIV test results in 20–30 minutes in Antalya. Walk-in available.",
    url: `${siteConfig.url}/rapid-hiv-test-antalya`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "How fast are rapid HIV test results?",
    a: "Rapid HIV tests provide results within 20–30 minutes of the sample being taken. They are performed in the clinic and do not require laboratory processing.",
  },
  {
    q: "Is a rapid HIV test as accurate as a lab blood test?",
    a: "Rapid antibody tests are highly accurate after their window period (90 days post-exposure). However, 4th generation laboratory blood tests have a shorter window period and can detect infections earlier. For testing within 3 months of exposure, the lab blood test is preferable.",
  },
  {
    q: "What is the window period for a rapid HIV test?",
    a: "Most rapid tests detect HIV antibodies only. The window period is approximately 23–90 days. For the most reliable result, testing at or after 90 days post-exposure is recommended for rapid antibody tests.",
  },
  {
    q: "Can I walk in for a rapid HIV test?",
    a: "Walk-ins are accepted when availability allows. We recommend booking via WhatsApp to guarantee immediate availability and minimise any waiting.",
  },
];

export default function RapidHIVTestAntalyaPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HIV Test Antalya", url: `${siteConfig.url}/hiv-test-antalya` },
          { name: "Rapid HIV Test Antalya", url: `${siteConfig.url}/rapid-hiv-test-antalya` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rapid HIV Test in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Results in 20–30 minutes. Point-of-care HIV antibody testing. No laboratory wait. Walk-in appointments available at our private Antalya clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Book Rapid HIV Test
              </a>
              <Link
                href="/rapid-hiv-test-vs-laboratory-test"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                Rapid vs Lab Test
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">How Rapid HIV Testing Works</h2>
            <p className="text-gray-600 mb-4">
              Rapid HIV tests are point-of-care tests performed in the clinic using a finger-prick blood sample or oral fluid. The test detects HIV antibodies and provides a result within 20–30 minutes.
            </p>
            <p className="text-gray-600 mb-6">
              For patients who have passed the 90-day window period, rapid tests provide highly accurate, near-instant results without the need for laboratory processing.
            </p>
            <p className="text-gray-600">
              For testing within the first 90 days after potential exposure, our 4th generation <Link href="/hiv-blood-test" className="text-[#2563EB] hover:underline">HIV blood test</Link> is recommended due to its shorter window period and ability to detect both antigen and antibodies.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HIV Blood Test", href: "/hiv-blood-test" },
                { label: "Private HIV Testing", href: "/private-hiv-testing" },
                { label: "HIV Test Antalya", href: "/hiv-test-antalya" },
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
        <CTASection title="Get Rapid HIV Testing in Antalya" subtitle="Results in 20–30 minutes. Walk-in available. Private and confidential." />
      </main>
    </>
  );
}
