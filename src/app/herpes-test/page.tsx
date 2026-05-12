import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Herpes Test Antalya | Private HSV-1 & HSV-2 Testing Turkey",
  description: "Private herpes testing in Antalya. Type-specific HSV-1 and HSV-2 IgG/IgM blood tests and swab testing. Confidential results. English-speaking clinic.",
  alternates: { canonical: `${siteConfig.url}/herpes-test` },
  openGraph: { title: "Herpes Test Antalya | Private HSV-1 & HSV-2 Testing Turkey", description: "Private herpes testing in Antalya. Type-specific HSV-1 and HSV-2 testing.", url: `${siteConfig.url}/herpes-test`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What is the difference between HSV-1 and HSV-2?", a: "HSV-1 (herpes simplex virus 1) classically causes oral herpes (cold sores) but can also cause genital herpes. HSV-2 primarily causes genital herpes. Type-specific testing distinguishes between the two." },
  { q: "How is herpes tested?", a: "Herpes can be tested by blood test (IgG/IgM serology, type-specific) to detect antibodies, or by swab/PCR from an active lesion during an outbreak. Blood testing detects past infection even without current symptoms." },
  { q: "Is herpes curable?", a: "Herpes is not curable, but it is manageable. Antiviral medications (such as aciclovir or valaciclovir) reduce outbreak frequency and severity, and lower the risk of transmission." },
  { q: "Can I test for herpes without symptoms?", a: "Yes. Type-specific IgG blood tests can detect HSV-1 and HSV-2 antibodies even if you have never had visible symptoms. Testing is possible at any time after a 12-16 week window period." },
];

export default function HerpesTestPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Herpes Test", url: `${siteConfig.url}/herpes-test` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Herpes Test Antalya", href: "/herpes-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Herpes Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Type-specific HSV-1 and HSV-2 testing. Blood and swab options. Confidential results. English-speaking private clinic.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Herpes Testing at Our Antalya Clinic</h2>
            <p className="text-gray-600 mb-4">Herpes simplex virus (HSV) is extremely common — estimates suggest 67% of people under 50 have HSV-1 and 11% have HSV-2 globally. Many people carry the virus without symptoms and are unaware of their status.</p>
            <p className="text-gray-600 mb-4">We offer type-specific IgG serology testing which distinguishes between HSV-1 and HSV-2 with high accuracy. For active outbreaks, PCR swab testing from a lesion provides the fastest and most accurate result.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Available Herpes Tests</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ HSV-1 IgG (type-specific blood test)</li>
              <li>✓ HSV-2 IgG (type-specific blood test)</li>
              <li>✓ HSV-1/2 IgM (early infection marker)</li>
              <li>✓ HSV PCR swab (from active lesion)</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your Herpes Test Today" subtitle="Discreet, compassionate care. Type-specific results." />
      </main>
    </>
  );
}
