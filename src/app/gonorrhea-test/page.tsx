import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Gonorrhea Test Antalya | Private Gonorrhoea Testing Turkey",
  description: "Private gonorrhea testing in Antalya. PCR-based testing, same-day results. Treatment available. English-speaking private clinic Turkey.",
  alternates: { canonical: `${siteConfig.url}/gonorrhea-test` },
  openGraph: { title: "Gonorrhea Test Antalya | Private Gonorrhoea Testing Turkey", description: "Private gonorrhea testing in Antalya. PCR-based, same-day results.", url: `${siteConfig.url}/gonorrhea-test`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What are the symptoms of gonorrhea?", a: "Symptoms in men include urethral discharge and painful urination. In women, symptoms are often mild or absent. Throat and rectal infections are usually asymptomatic." },
  { q: "How is gonorrhea tested?", a: "We use PCR (NAAT) testing on urine, urethral swab, cervical swab, rectal swab, or throat swab depending on potential exposure sites." },
  { q: "Is gonorrhea treatable?", a: "Yes, gonorrhea is treatable with antibiotics, though antibiotic-resistant strains are increasing. Our doctors will prescribe the current recommended first-line treatment (ceftriaxone injection)." },
  { q: "Should I test for gonorrhea and chlamydia together?", a: "Yes. These two infections often co-occur and are both tested using the same swab or urine sample, so they are usually tested together as standard." },
];

export default function GonorrheaTestPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Gonorrhea Test", url: `${siteConfig.url}/gonorrhea-test` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Gonorrhea Test Antalya", href: "/gonorrhea-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gonorrhea Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Private, accurate PCR-based gonorrhea testing. Same-day results. Treatment available.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Gonorrhea Testing at Our Antalya Clinic</h2>
            <p className="text-gray-600 mb-4">Gonorrhea (Neisseria gonorrhoeae) is a common bacterial STI that affects the genitals, throat, and rectum. It is highly treatable when caught early but can cause serious complications including infertility if left untreated.</p>
            <p className="text-gray-600 mb-4">Our clinic uses PCR-based NAAT testing which is the most accurate method available, capable of detecting gonorrhea from multiple anatomical sites.</p>
            <p className="text-gray-600">We recommend testing for gonorrhea alongside chlamydia as part of a comprehensive sexual health check.</p>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Gonorrhea Test Today" subtitle="Accurate, private, same-day results available." />
      </main>
    </>
  );
}
