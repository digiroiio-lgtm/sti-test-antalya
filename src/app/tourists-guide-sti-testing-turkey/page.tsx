import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Tourist Guide: STI Testing in Turkey | Antalya Clinic",
  description: "Everything tourists need to know about STI testing in Turkey. How to book, costs, and results. English-speaking private clinic in Antalya.",
  alternates: { canonical: `${siteConfig.url}/tourists-guide-sti-testing-turkey` },
  openGraph: { title: "Tourist Guide to STI Testing in Turkey", description: "Complete guide for tourists getting STI tested in Antalya, Turkey.", url: `${siteConfig.url}/tourists-guide-sti-testing-turkey`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Do I need to speak Turkish to get tested?", a: "No. Our clinic has English-speaking doctors and staff, and all communications, results, and reports can be provided in English. We also accommodate German, Russian, and Arabic speakers." },
  { q: "How quickly can I get an appointment?", a: "We typically offer same-day or next-day appointments. Contact us via WhatsApp and we will arrange a time that suits your holiday schedule." },
  { q: "What do I need to bring to my appointment?", a: "Bring your passport or ID. No other documentation is required. You do not need a referral or prior medical records." },
  { q: "How will I receive my results?", a: "Results are sent securely by email or WhatsApp in a password-protected PDF. You can also collect them in person at the clinic. Results are available in English." },
  { q: "Can I get treated if I test positive?", a: "Yes. Our doctors can prescribe treatment for most STIs on the same day as your results. Prescriptions are available at local pharmacies, most of which also have English-speaking staff." },
];

export default function TouristsGuideSTITurkeyPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Tourist Guide: STI Testing in Turkey", url: `${siteConfig.url}/tourists-guide-sti-testing-turkey` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Tourist Guide: STI Testing in Turkey", href: "/tourists-guide-sti-testing-turkey" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tourist&apos;s Guide to STI Testing in Turkey</h1>
            <p className="text-xl text-blue-200 mb-8">Everything you need to know about getting tested privately and confidentially during your stay in Antalya.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">How to Get an STI Test as a Tourist in Turkey</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Step 1: Contact Us via WhatsApp</h3>
                <p className="text-gray-600">Send us a message on WhatsApp and we will confirm your appointment and answer any questions. No need to register in advance or fill in lengthy forms.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Step 2: Attend Your Appointment</h3>
                <p className="text-gray-600">Come to our clinic with your passport. Your consultation is private, English-language, and confidential. We recommend arriving on an empty stomach if blood tests are required.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Step 3: Receive Your Results</h3>
                <p className="text-gray-600">Most results are available within 24-48 hours. Same-day results are available for HIV, syphilis, and hepatitis. Results are sent in English by email or WhatsApp.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Step 4: Treatment if Needed</h3>
                <p className="text-gray-600">If a test returns positive, our doctor will consult with you and prescribe appropriate treatment. Most treatments are available at local pharmacies and are very affordable.</p>
              </div>
            </div>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your Test Today" subtitle="Private STI testing in Antalya. Simple, fast, and completely confidential." />
      </main>
    </>
  );
}
