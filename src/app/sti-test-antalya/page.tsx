import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalClinicSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Test Antalya | Private Sexual Health Testing Services",
  description: "Complete STI testing services in Antalya. HIV, HPV, chlamydia, gonorrhea, syphilis and full panel tests. Private, confidential, English-speaking staff.",
  alternates: { canonical: `${siteConfig.url}/sti-test-antalya` },
  openGraph: {
    title: "STI Test Antalya | Private Sexual Health Testing Services",
    description: "Complete STI testing services in Antalya. Private, confidential, English-speaking staff.",
    url: `${siteConfig.url}/sti-test-antalya`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What STI tests are available in Antalya?", a: "We offer a full range including HIV, HPV, chlamydia, gonorrhea, syphilis, herpes HSV-1/2, hepatitis B and C, and comprehensive full panel testing." },
  { q: "How long do STI test results take?", a: "Most results are available within 24-48 hours. Rapid tests for HIV and some other infections can return results the same day." },
  { q: "Is STI testing confidential in Turkey?", a: "Yes. All testing is strictly confidential. Results are never shared with insurers, employers, or other parties without your explicit consent." },
  { q: "Can I walk in for an STI test?", a: "Yes, walk-ins are welcome. We also recommend booking via WhatsApp to minimise waiting time." },
  { q: "Do I need a GP referral?", a: "No referral is required. You can book directly and attend without any prior documentation." },
];

export default function STITestAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "STI Test Antalya", url: `${siteConfig.url}/sti-test-antalya` },
      ])} />
      <SchemaOrg schema={medicalClinicSchema()} />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "STI Testing Antalya", href: "/sti-test-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STI Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private, confidential sexual health testing for tourists, expats, and residents. English-speaking staff. Same-day results available.
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
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our STI Testing Services</h2>
            <p className="text-gray-600 mb-6">
              Our private clinic in Antalya offers the full spectrum of sexual health testing services. Whether you need a single test or a comprehensive panel, our certified laboratory delivers accurate results with full discretion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { name: "HIV Test (4th Gen)", detail: "Same-day rapid result available" },
                { name: "HPV DNA Test", detail: "High & low-risk strain detection" },
                { name: "Chlamydia & Gonorrhea", detail: "PCR-based accurate detection" },
                { name: "Syphilis (VDRL/TPPA)", detail: "Full treponemal testing" },
                { name: "Herpes HSV-1 & HSV-2", detail: "Type-specific IgG/IgM serology" },
                { name: "Hepatitis B & C", detail: "Surface antigen & antibody" },
                { name: "Full STI Panel", detail: "All major infections in one visit" },
                { name: "Urethral Swab", detail: "For urethral discharge or discomfort" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-[#0A2342]">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-[#0A2342] mb-4">Why Get Tested in Antalya?</h2>
            <p className="text-gray-600 mb-4">
              Antalya is Turkey&apos;s leading tourist destination, welcoming millions of international visitors each year. Access to confidential, English-speaking sexual health services is essential for those who want to take care of their health while abroad.
            </p>
            <p className="text-gray-600 mb-4">
              Our clinic operates on a strictly private basis. You will not be seen in a general hospital waiting room. Results are delivered securely and discreetly, often within hours of your test.
            </p>
            <p className="text-gray-600">
              STI testing in Turkey is substantially more affordable than comparable private clinics in the UK, Germany, or the USA—without any compromise on quality or accuracy.
            </p>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection />
      </main>
    </>
  );
}
