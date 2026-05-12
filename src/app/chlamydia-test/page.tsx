import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Chlamydia Test Antalya | Private Chlamydia Testing Turkey",
  description: "Private chlamydia testing in Antalya. PCR-accurate results. Same-day results available. English-speaking staff. No referral needed.",
  alternates: { canonical: `${siteConfig.url}/chlamydia-test` },
  openGraph: { title: "Chlamydia Test Antalya | Private Chlamydia Testing Turkey", description: "Private chlamydia testing in Antalya. PCR-accurate same-day results.", url: `${siteConfig.url}/chlamydia-test`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What are the symptoms of chlamydia?", a: "Most chlamydia infections are asymptomatic. When symptoms do occur, they may include unusual discharge, burning during urination, testicular pain in men, and pelvic pain in women." },
  { q: "How is chlamydia tested?", a: "Chlamydia is tested using a PCR (polymerase chain reaction) test on a urine sample or swab from the urethra, cervix, rectum, or throat depending on sexual practices." },
  { q: "Is chlamydia curable?", a: "Yes. Chlamydia is easily treated with a short course of antibiotics such as azithromycin or doxycycline. Our doctors can prescribe treatment at the same appointment." },
  { q: "How long after exposure can chlamydia be detected?", a: "Chlamydia can typically be detected by PCR testing 1-2 weeks after exposure. We recommend testing at least 2 weeks after potential exposure for reliable results." },
];

export default function ChlamydiaTestPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Chlamydia Test", url: `${siteConfig.url}/chlamydia-test` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Chlamydia Test Antalya", href: "/chlamydia-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chlamydia Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Accurate PCR-based chlamydia testing. Same-day results. Treatment available at the same appointment.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">About Chlamydia Testing</h2>
            <p className="text-gray-600 mb-4">Chlamydia is the most commonly diagnosed bacterial STI. Because most infections cause no symptoms, regular testing is the only reliable way to know your status. Untreated chlamydia can lead to serious complications including pelvic inflammatory disease (PID) and infertility.</p>
            <p className="text-gray-600 mb-4">We use nucleic acid amplification testing (NAAT/PCR) which is the gold standard for chlamydia detection, offering sensitivity greater than 95% from urine or swab samples.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Testing Sites Available</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Urine sample (most common)</li>
              <li>✓ Urethral swab (men)</li>
              <li>✓ Cervical/vaginal swab (women)</li>
              <li>✓ Rectal swab (for anal sex)</li>
              <li>✓ Throat swab (for oral sex)</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Get Your Chlamydia Test Today" subtitle="Quick, accurate, confidential. Treatment available same day." />
      </main>
    </>
  );
}
