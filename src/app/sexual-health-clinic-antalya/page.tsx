import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Sexual Health Clinic Antalya | Private GUM Clinic Turkey",
  description: "Private sexual health clinic in Antalya. Complete GUM services, STI testing, consultations, and treatment. English-speaking doctors. Confidential care.",
  alternates: { canonical: `${siteConfig.url}/sexual-health-clinic-antalya` },
  openGraph: { title: "Sexual Health Clinic Antalya | Private GUM Clinic Turkey", description: "Private sexual health clinic in Antalya. Confidential care, English-speaking doctors.", url: `${siteConfig.url}/sexual-health-clinic-antalya`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What services does a sexual health clinic in Antalya offer?", a: "Our clinic offers STI testing, HIV testing and counselling, HPV vaccination, sexual health consultations, treatment of STIs, contraception advice, and PrEP/PEP consultations." },
  { q: "Is the clinic completely private?", a: "Yes. We operate as a fully private clinic. You will not be seen in a general hospital environment. All records and consultations are strictly confidential." },
  { q: "Do you offer treatment as well as testing?", a: "Yes. Our doctors can prescribe appropriate treatment for diagnosed infections during the same appointment or after results are available." },
  { q: "Is the clinic accessible to tourists?", a: "Absolutely. We specialise in seeing international patients and tourists. No Turkish ID or residency is required." },
];

export default function SexualHealthClinicAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Sexual Health Clinic Antalya", url: `${siteConfig.url}/sexual-health-clinic-antalya` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Sexual Health Clinic Antalya", href: "/sexual-health-clinic-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sexual Health Clinic in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Private GUM clinic services. Testing, consultation, and treatment. English-speaking doctors.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">About Our Sexual Health Clinic</h2>
            <p className="text-gray-600 mb-4">Our dedicated sexual health clinic in Antalya provides a full range of GUM (genitourinary medicine) services in a completely private, non-judgmental environment. Our English-speaking team of doctors and nurses ensures you receive clear, compassionate care.</p>
            <p className="text-gray-600 mb-4">We see patients from all backgrounds including tourists, digital nomads, expats, and local residents. No referral from a GP is required. Appointments can be booked via WhatsApp with same-day availability in most cases.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Services Available</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Full STI/STD testing panels</li>
              <li>✓ HIV testing, counselling and PEP/PrEP</li>
              <li>✓ HPV testing and vaccination (Gardasil 9)</li>
              <li>✓ Hepatitis B vaccination</li>
              <li>✓ Sexual health consultations</li>
              <li>✓ Treatment of diagnosed infections</li>
              <li>✓ Contraception advice</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection />
      </main>
    </>
  );
}
