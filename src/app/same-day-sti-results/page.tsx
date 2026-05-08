import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Same Day STI Results Antalya | Rapid Sexual Health Testing Turkey",
  description: "Get your STI test results the same day in Antalya. Rapid HIV, chlamydia, gonorrhea, and full panel tests. English-speaking private clinic.",
  alternates: { canonical: `${siteConfig.url}/same-day-sti-results` },
  openGraph: { title: "Same Day STI Results Antalya | Rapid Sexual Health Testing Turkey", description: "Get your STI test results the same day in Antalya. Rapid HIV, chlamydia, gonorrhea, and full panel tests. English-speaking private clinic.", url: `${siteConfig.url}/same-day-sti-results`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Which tests have same-day results?", a: "Rapid HIV, syphilis, and hepatitis B tests return results within 1-2 hours. Chlamydia and gonorrhea rapid tests return results within 2-4 hours." },
  { q: "Can I walk in for a same-day test?", a: "Yes, walk-ins are accepted. We recommend booking via WhatsApp first to ensure a doctor and rapid test kit are available." },
  { q: "How do I book a test?", a: "Book via WhatsApp for the fastest response. Same-day and next-day appointments are usually available." },
  { q: "Is testing confidential?", a: "Yes, all testing is completely confidential. Results are never shared without your explicit consent." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Same-Day STI Results in Antalya", url: `${siteConfig.url}/same-day-sti-results` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Same-Day STI Results in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Get your STI test results the same day in Antalya. Rapid HIV, chlamydia, gonorrhea, and full panel tests. English-speaking private clinic.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Same-Day STI Testing</h2><p className="text-gray-600 mb-4">We understand that waiting for results can be stressful. That is why we offer same-day results for many of our most common STI tests, including rapid HIV testing.</p><h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Tests with Same-Day Results</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">{[{n:"Rapid HIV Test",d:"Result in 20-30 minutes"},{n:"Chlamydia (Rapid)",d:"Result within 2-4 hours"},{n:"Gonorrhea (Rapid)",d:"Result within 2-4 hours"},{n:"Syphilis (Rapid)",d:"Result within 1-2 hours"},{n:"Hepatitis B Surface Ag",d:"Result within 2-4 hours"},{n:"Full STI Panel",d:"Most results same day or next morning"}].map(i=><div key={i.n} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"><span className="text-green-600 font-bold">✓</span><div><p className="font-semibold text-[#0A2342] text-sm">{i.n}</p><p className="text-xs text-gray-600">{i.d}</p></div></div>)}</div>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection />
      </main>
    </>
  );
}
