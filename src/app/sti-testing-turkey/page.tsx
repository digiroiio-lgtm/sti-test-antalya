import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Testing in Turkey | Private Sexual Health Testing Turkey",
  description: "Private STI testing across Turkey. Our Antalya clinic serves international visitors with confidential, same-day sexual health testing. English-speaking doctors.",
  alternates: { canonical: `${siteConfig.url}/sti-testing-turkey` },
  openGraph: { title: "STI Testing in Turkey | Private Sexual Health Testing Turkey", description: "Private STI testing for international visitors in Turkey. Same-day results.", url: `${siteConfig.url}/sti-testing-turkey`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Can I get an STI test as a tourist in Turkey?", a: "Yes. Our clinic in Antalya regularly tests international tourists and expats. All tests are performed privately with English-speaking staff, and results are provided in English." },
  { q: "Is STI testing affordable in Turkey?", a: "Yes. STI testing in Turkey is significantly more affordable than in the UK, Germany, or the USA, often costing 40-70% less for equivalent private tests, without sacrificing quality or accuracy." },
  { q: "How long do STI results take in Turkey?", a: "Most blood tests and PCR tests produce results within 24-48 hours. Many tests, including HIV, syphilis, and hepatitis, provide results on the same day." },
  { q: "Is my information confidential when tested in Turkey?", a: "Yes. Our clinic operates under strict medical confidentiality. No information is shared with your travel insurance, home country healthcare system, or any third party without your explicit consent." },
];

export default function STITestingTurkeyPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "STI Testing Turkey", url: `${siteConfig.url}/sti-testing-turkey` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STI Testing in Turkey</h1>
            <p className="text-xl text-blue-200 mb-8">Private, affordable sexual health testing for tourists and residents. Same-day results available. English-speaking staff.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Why Choose Turkey for STI Testing?</h2>
            <p className="text-gray-600 mb-4">Turkey offers world-class private healthcare at a fraction of the cost of Western Europe. Our Antalya clinic provides the same laboratory standards and testing protocols you would expect from a leading European private clinic.</p>
            <p className="text-gray-600 mb-4">Many visitors choose to combine their holiday in Antalya with a confidential health check, taking advantage of the privacy, affordability, and speed that Turkish private healthcare offers.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">What We Offer</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Full STI panel (10+ infections)</li>
              <li>✓ HIV, hepatitis B &amp; C testing</li>
              <li>✓ HPV DNA testing</li>
              <li>✓ Same-day results for most tests</li>
              <li>✓ English-language consultation and reports</li>
              <li>✓ Completely confidential</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book STI Test in Turkey" subtitle="Private, affordable, accurate sexual health testing in Antalya, Turkey." />
      </main>
    </>
  );
}
