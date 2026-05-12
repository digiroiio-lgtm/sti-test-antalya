import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Anonymous STI Testing Antalya | Confidential Testing",
  description: "Get tested for STIs anonymously in Antalya. No ID required for anonymous testing. Confidential, private clinic. English-speaking staff.",
  alternates: { canonical: `${siteConfig.url}/anonymous-sti-testing` },
  openGraph: { title: "Anonymous STI Testing Antalya | Confidential Testing", description: "Get tested for STIs anonymously in Antalya. No ID required for anonymous testing. Confidential, private clinic. English-speaking staff.", url: `${siteConfig.url}/anonymous-sti-testing`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Is anonymous STI testing legal in Turkey?", a: "Yes. Anonymous STI testing is legal and available at private clinics in Turkey. No ID is required for anonymous testing." },
  { q: "Can I get a named certificate if I need one?", a: "Yes. If you need a named result certificate (e.g. for a visa or medical record), we can provide a confidential named report upon request." },
  { q: "How do I book a test?", a: "Book via WhatsApp for the fastest response. Same-day and next-day appointments are usually available." },
  { q: "Is testing confidential?", a: "Yes, all testing is completely confidential. Results are never shared without your explicit consent." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Anonymous STI Testing in Antalya", url: `${siteConfig.url}/anonymous-sti-testing` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Anonymous STI Testing", href: "/anonymous-sti-testing" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Anonymous STI Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Get tested for STIs anonymously in Antalya. No ID required for anonymous testing. Confidential, private clinic. English-speaking staff.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Anonymous STI Testing Explained</h2><p className="text-gray-600 mb-4">Anonymous testing means your test is performed without linking your results to your legal identity. This option is particularly popular for HIV testing and is available at our Antalya clinic.</p><p className="text-gray-600 mb-4">For anonymous testing, you are allocated a unique reference code. Results are accessed using this code only. No name, passport, or ID is recorded in connection with the test.</p><h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Who Should Consider Anonymous Testing?</h3><ul className="space-y-2 text-gray-600"><li>✓ Those concerned about insurance or employer implications</li><li>✓ Individuals testing after high-risk exposure</li><li>✓ People in countries where HIV or STI status could cause discrimination</li><li>✓ Anyone who simply prefers maximum privacy</li></ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection />
      </main>
    </>
  );
}
