import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "STD Test Antalya | Private STD Testing Clinic Turkey",
  description: "Private STD testing in Antalya, Turkey. Confidential results, English-speaking staff. Full STD panels, rapid tests, same-day appointments.",
  alternates: { canonical: `${siteConfig.url}/std-test-antalya` },
  openGraph: { title: "STD Test Antalya | Private STD Testing Clinic Turkey", description: "Private STD testing in Antalya. Confidential, English-speaking staff.", url: `${siteConfig.url}/std-test-antalya`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What is the difference between STD and STI?", a: "STI (Sexually Transmitted Infection) and STD (Sexually Transmitted Disease) are often used interchangeably. STI is the more modern medical term, referring to infections that may or may not show symptoms, while STD specifically refers to infections that have progressed to cause disease." },
  { q: "What STDs can you test for in Antalya?", a: "We test for all common STDs including HIV, syphilis, gonorrhea, chlamydia, herpes (HSV-1/2), HPV, hepatitis B and C, and more." },
  { q: "How private is STD testing in Turkey?", a: "STD testing at our private clinic is fully confidential. Your results are not shared with any third parties without your explicit written consent." },
  { q: "How much does an STD test cost in Antalya?", a: "Individual tests start from very affordable prices. A full STD panel is significantly cheaper than comparable tests in the UK, US, or Western Europe. Contact us via WhatsApp for current pricing." },
];

export default function STDTestAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "STD Test Antalya", url: `${siteConfig.url}/std-test-antalya` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "STD Test Antalya", href: "/std-test-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STD Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Private, confidential STD testing. Same-day results. English-speaking staff.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Comprehensive STD Testing in Antalya</h2>
            <p className="text-gray-600 mb-4">Our private clinic provides complete STD and STI testing services in Antalya. We use certified laboratory testing to detect all common sexually transmitted infections with high accuracy and full confidentiality.</p>
            <p className="text-gray-600 mb-4">Whether you are a tourist, expat, or long-term resident in the Antalya area, our English-speaking medical team is here to support your sexual health without judgment or stigma.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Affordable STD Testing in Turkey</h3>
            <p className="text-gray-600">Turkey offers significantly lower costs for private medical testing compared to Western Europe and the USA. A full STD panel test that might cost £300+ in the UK can be obtained at our clinic for a fraction of that price, without any compromise on accuracy or quality.</p>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection />
      </main>
    </>
  );
}
