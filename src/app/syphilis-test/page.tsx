import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Syphilis Test Antalya | Private Syphilis Testing Turkey",
  description: "Private syphilis testing in Antalya. VDRL and TPPA treponemal testing. Confidential results. English-speaking private clinic.",
  alternates: { canonical: `${siteConfig.url}/syphilis-test` },
  openGraph: { title: "Syphilis Test Antalya | Private Syphilis Testing Turkey", description: "Private syphilis testing in Antalya. VDRL and TPPA treponemal testing.", url: `${siteConfig.url}/syphilis-test`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What tests are used for syphilis?", a: "We use both VDRL (non-treponemal) and TPPA (treponemal) tests for comprehensive syphilis detection. This combination provides the most accurate diagnosis across all stages of syphilis." },
  { q: "What are the stages of syphilis?", a: "Syphilis progresses through primary (painless sore/chancre), secondary (rash, flu-like symptoms), latent (no symptoms), and tertiary stages. Early detection and treatment prevents progression." },
  { q: "Is syphilis curable?", a: "Yes. Syphilis is fully curable with antibiotics, most commonly penicillin injection. Treatment is most effective in early stages." },
  { q: "How soon after exposure can syphilis be detected?", a: "Syphilis antibodies typically become detectable 3-6 weeks after infection. Testing at 6 weeks gives a reliable result; testing at 3 months is conclusive." },
];

export default function SyphilisTestPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Syphilis Test", url: `${siteConfig.url}/syphilis-test` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Syphilis Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Comprehensive VDRL and TPPA syphilis testing. Private, confidential, same-day results available.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Understanding Syphilis Testing</h2>
            <p className="text-gray-600 mb-4">Syphilis is caused by the bacterium Treponema pallidum and is transmitted through sexual contact. Cases of syphilis have been rising globally in recent years, making regular testing important.</p>
            <p className="text-gray-600 mb-4">Our testing combines both non-treponemal (VDRL) and treponemal (TPPA) tests for the most accurate diagnosis. This dual testing approach eliminates false negatives and differentiates active from treated infections.</p>
            <p className="text-gray-600">Syphilis is fully curable when caught early. Our doctors can prescribe treatment at the same appointment if a positive result is confirmed.</p>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Syphilis Test Today" subtitle="Accurate dual treponemal testing. Confidential results." />
      </main>
    </>
  );
}
