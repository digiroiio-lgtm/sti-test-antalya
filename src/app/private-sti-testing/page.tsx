import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Private STI Testing Antalya | Confidential Health Tests",
  description: "100% private STI testing in Antalya. No waiting rooms, no public records. Confidential results delivered securely. English-speaking staff.",
  alternates: { canonical: `${siteConfig.url}/private-sti-testing` },
  openGraph: { title: "Private STI Testing Antalya | Confidential Health Tests", description: "100% private STI testing in Antalya. No waiting rooms, no public records. Confidential results delivered securely. English-speaking staff.", url: `${siteConfig.url}/private-sti-testing`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Will my GP or doctor be informed of my results?", a: "No. Private testing means your GP is not notified unless you specifically request it." },
  { q: "Are private STI tests more accurate?", a: "Private clinics use the same certified laboratory tests as public health services. Accuracy is equivalent." },
  { q: "How do I book a test?", a: "Book via WhatsApp for the fastest response. Same-day and next-day appointments are usually available." },
  { q: "Is testing confidential?", a: "Yes, all testing is completely confidential. Results are never shared without your explicit consent." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Private STI Testing in Antalya", url: `${siteConfig.url}/private-sti-testing` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Private STI Testing Antalya", href: "/private-sti-testing" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Private STI Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">100% private STI testing in Antalya. No waiting rooms, no public records. Confidential results delivered securely. English-speaking staff.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Why Private STI Testing?</h2><p className="text-gray-600 mb-4">Private STI testing gives you complete control over your health information. Unlike NHS or state health systems, private testing means your results remain exclusively between you and your doctor.</p><p className="text-gray-600 mb-4">Our clinic in Antalya operates entirely outside public health reporting systems for routine screening. You visit a dedicated private clinic, not a general hospital, ensuring complete discretion from start to finish.</p><h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">What Makes Our Clinic Truly Private</h3><ul className="space-y-2 text-gray-600"><li>✓ Dedicated sexual health facility — not a general hospital</li><li>✓ No GP referral or national health number required</li><li>✓ Results delivered securely and digitally</li><li>✓ No waiting rooms shared with general patients</li><li>✓ English-speaking staff throughout</li></ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection />
      </main>
    </>
  );
}
