import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalClinicSchema, medicalTestSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HIV Test Antalya | Private Rapid HIV Testing Same Day Results",
  description: "Private HIV testing in Antalya with same-day results. Anonymous 4th generation HIV tests. English-speaking staff. No referral needed.",
  alternates: { canonical: `${siteConfig.url}/hiv-test-antalya` },
  openGraph: {
    title: "HIV Test Antalya | Private Rapid HIV Testing Same Day Results",
    description: "Private HIV testing in Antalya with same-day results. Anonymous 4th generation HIV tests.",
    url: `${siteConfig.url}/hiv-test-antalya`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "How accurate is HIV testing at your clinic?", a: "We use 4th generation combination tests that detect both HIV p24 antigen and HIV antibodies. These tests have greater than 99.9% sensitivity and specificity when performed after the window period." },
  { q: "What is the window period for HIV testing?", a: "The 4th generation HIV test has a window period of approximately 18-45 days after potential exposure. For a conclusive result, testing at 45 days or beyond is recommended." },
  { q: "Is HIV testing anonymous?", a: "Yes. We offer anonymous HIV testing. No ID linking your result to your identity is required unless you specifically request a named certificate." },
  { q: "How long do HIV test results take?", a: "Rapid HIV tests provide results within 20-30 minutes. Standard 4th generation lab tests typically return results the same day or within 24 hours." },
  { q: "Can I get PEP or PrEP consultation at your clinic?", a: "Yes. Our doctors can discuss HIV prevention options including PEP (post-exposure prophylaxis) and PrEP (pre-exposure prophylaxis) during your consultation." },
];

export default function HIVTestAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "HIV Test Antalya", url: `${siteConfig.url}/hiv-test-antalya` },
      ])} />
      <SchemaOrg schema={medicalClinicSchema()} />
      <SchemaOrg schema={medicalTestSchema({
        name: "HIV Blood Test — 4th Generation",
        description: "Private HIV blood testing in Antalya using 4th generation combination tests detecting HIV-1/2 antibodies and p24 antigen.",
        url: `${siteConfig.url}/hiv-test-antalya`,
        usedToDiagnose: "HIV-1, HIV-2",
      })} />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "HIV Test Antalya", href: "/hiv-test-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HIV Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private, anonymous HIV testing with same-day results. 4th generation tests. English-speaking doctors available.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book via WhatsApp
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Private HIV Testing in Antalya</h2>
            <p className="text-gray-600 mb-6">
              Our clinic offers confidential HIV testing using the most advanced 4th generation combination tests available. These tests detect both HIV antigen (p24) and HIV antibodies, providing the earliest possible detection of HIV infection.
            </p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4">Types of HIV Tests Available</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-[#0A2342]">4th Generation Combination Test</h4>
                <p className="text-gray-600 text-sm mt-1">Detects HIV-1/2 antibodies and HIV-1 p24 antigen. Window period: 18-45 days. Most accurate available.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-[#0A2342]">Rapid HIV Antibody Test</h4>
                <p className="text-gray-600 text-sm mt-1">Results in 20-30 minutes. Suitable for testing after 90 days post-exposure. Highly accurate after full window period.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-[#0A2342]">HIV RNA PCR Test</h4>
                <p className="text-gray-600 text-sm mt-1">Detects HIV virus directly. Earliest possible detection, from 10-14 days post-exposure. Available on request.</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4">When Should You Get Tested?</h3>
            <p className="text-gray-600 mb-4">
              Testing should be considered after any potential HIV exposure, including unprotected sexual contact, sharing needles, or occupational exposure. For the most accurate result using a 4th generation test, we recommend waiting at least 45 days after potential exposure.
            </p>
            <p className="text-gray-600">
              If you are concerned about a very recent exposure (within 72 hours), contact us immediately to discuss PEP (post-exposure prophylaxis) which may prevent HIV infection if started promptly.
            </p>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection title="Get Your HIV Test Today" subtitle="Anonymous, confidential, same-day results available." />
      </main>
    </>
  );
}
