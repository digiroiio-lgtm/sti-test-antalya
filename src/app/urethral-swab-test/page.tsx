import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Urethral Swab Test Antalya | Private STI Testing Turkey",
  description: "Private urethral swab testing in Antalya. Detects gonorrhea, chlamydia, mycoplasma, and urethral infections. Discreet, confidential clinic.",
  alternates: { canonical: `${siteConfig.url}/urethral-swab-test` },
  openGraph: { title: "Urethral Swab Test Antalya | Private STI Testing Turkey", description: "Private urethral swab testing in Antalya. Accurate detection of urethral infections.", url: `${siteConfig.url}/urethral-swab-test`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Is a urethral swab painful?", a: "A urethral swab may cause brief discomfort but is not considered painful by most patients. The procedure is very quick, taking only a few seconds, and is performed by experienced clinical staff." },
  { q: "When is a urethral swab needed instead of a urine test?", a: "Urethral swabs are preferred when there is visible discharge, when symptoms are present, or when testing for infections that may not be reliably detected by urine PCR alone." },
  { q: "What infections does a urethral swab detect?", a: "A urethral swab can detect gonorrhea, chlamydia, mycoplasma genitalium, ureaplasma, trichomonas, and other urethral pathogens using PCR analysis." },
  { q: "Can I avoid a urethral swab?", a: "For many infections, urine PCR testing is equally accurate and is offered as an alternative. Discuss this with our doctor during your consultation." },
];

export default function UrethralSwabTestPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Urethral Swab Test", url: `${siteConfig.url}/urethral-swab-test` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Urethral Swab Test Antalya", href: "/urethral-swab-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Urethral Swab Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Discreet urethral swab testing for gonorrhea, chlamydia, and other urethral infections. Experienced clinical team.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">About Urethral Swab Testing</h2>
            <p className="text-gray-600 mb-4">A urethral swab is a diagnostic test used to detect infections in the urethra. It is particularly useful for men presenting with symptoms such as discharge, burning, or discomfort, and is often performed alongside blood tests as part of a comprehensive sexual health screen.</p>
            <p className="text-gray-600 mb-4">Our clinic uses PCR-based analysis of urethral swabs, providing highly accurate detection of all major urethral pathogens.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">What Can Be Detected by Urethral Swab?</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Neisseria gonorrhoeae (gonorrhea)</li>
              <li>✓ Chlamydia trachomatis</li>
              <li>✓ Mycoplasma genitalium</li>
              <li>✓ Ureaplasma urealyticum & parvum</li>
              <li>✓ Trichomonas vaginalis</li>
              <li>✓ Herpes simplex virus (if lesion present)</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Urethral Swab Test" subtitle="Discreet, professional, accurate urethral infection testing." />
      </main>
    </>
  );
}
