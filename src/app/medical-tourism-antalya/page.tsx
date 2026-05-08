import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Medical Tourism Antalya | Private Healthcare for Tourists Turkey",
  description: "Private medical tourism services in Antalya. STI testing, sexual health screening, and general health checks for tourists. English-speaking clinic.",
  alternates: { canonical: `${siteConfig.url}/medical-tourism-antalya` },
  openGraph: { title: "Medical Tourism Antalya | Private Healthcare for Tourists Turkey", description: "Private healthcare for tourists in Antalya. STI testing and health screening.", url: `${siteConfig.url}/medical-tourism-antalya`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Is Antalya a good destination for medical tourism?", a: "Yes. Antalya has a well-developed private healthcare sector with modern clinics, international-standard laboratories, and many English-speaking doctors. It is one of Turkey's leading medical tourism destinations." },
  { q: "What kind of healthcare can tourists access in Antalya?", a: "Tourists in Antalya can access private GP consultations, sexual health testing, blood tests, imaging, dental care, and many specialist services, often without waiting lists and at lower cost than in their home countries." },
  { q: "Do I need travel insurance to use a private clinic in Antalya?", a: "No. You can pay directly for private healthcare. Many visitors prefer to self-pay for confidential services such as sexual health testing, as this avoids any involvement with their insurance company." },
  { q: "How do I get to your clinic in Antalya?", a: "We are centrally located in Antalya and easily accessible from all major holiday resorts including Lara, Konyaalti, Belek, Side, and Alanya. Contact us via WhatsApp for exact directions and to arrange a convenient appointment time." },
];

export default function MedicalTourismAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Medical Tourism Antalya", url: `${siteConfig.url}/medical-tourism-antalya` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Tourism in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Private healthcare for tourists in Antalya. STI testing, health screens, specialist consultations. English-speaking clinic.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Private Healthcare for Tourists in Antalya</h2>
            <p className="text-gray-600 mb-4">Antalya attracts over 15 million international visitors annually, many of whom need access to private healthcare during their stay. Our clinic specialises in serving English-speaking tourists who require confidential, high-quality medical services.</p>
            <p className="text-gray-600 mb-4">From routine STI screening to specialist consultations, we provide seamless, private healthcare that fits around your holiday schedule — with same-day or next-day appointments available.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Services for Medical Tourists</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Full STI and sexual health panels</li>
              <li>✓ HIV, hepatitis, and blood-borne virus testing</li>
              <li>✓ HPV testing and vaccination</li>
              <li>✓ General health blood tests</li>
              <li>✓ Medical consultations in English</li>
              <li>✓ Digital results and reports for your records</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your Antalya Health Appointment" subtitle="Private, discreet healthcare for tourists. Contact us to arrange a convenient time." />
      </main>
    </>
  );
}
