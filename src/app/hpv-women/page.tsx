import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Test for Women Antalya | Cervical HPV Testing Turkey",
  description: "HPV testing for women in Antalya. Cervical HPV co-test with smear. High-risk strain detection. Gardasil 9 vaccination available. Private clinic.",
  alternates: { canonical: `${siteConfig.url}/hpv-women` },
  openGraph: { title: "HPV Test for Women Antalya | Cervical HPV Testing Turkey", description: "HPV testing for women in Antalya. Cervical HPV co-test. Gardasil vaccination.", url: `${siteConfig.url}/hpv-women`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What is cervical HPV testing?", a: "Cervical HPV testing checks for the presence of high-risk HPV strains in a sample taken from the cervix (similar to a smear test). High-risk HPV causes almost all cases of cervical cancer." },
  { q: "How often should women get HPV tested?", a: "Current guidelines recommend HPV testing every 5 years for women aged 25-65. Women with high-risk HPV may need more frequent monitoring. Our doctors can advise based on your history." },
  { q: "Can I get a smear test and HPV test together?", a: "Yes. We offer a combined cervical smear (cytology) and HPV co-test in one appointment. This is the most comprehensive cervical screening available." },
  { q: "Should I get the HPV vaccine if I have already had HPV?", a: "Yes, vaccination may still be beneficial even if you have been exposed to HPV before, as the vaccine protects against strains you may not yet have encountered." },
];

export default function HPVWomenPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "HPV Test for Women", url: `${siteConfig.url}/hpv-women` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Testing for Women in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Cervical HPV co-test and smear. High-risk strain detection. Gardasil 9 vaccination. Private, female-friendly clinic.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">HPV Testing for Women</h2>
            <p className="text-gray-600 mb-4">HPV is responsible for nearly all cervical cancers and is also linked to vaginal, vulvar, and anal cancers. Regular HPV testing is the most effective way to detect high-risk infection before cellular changes occur.</p>
            <p className="text-gray-600 mb-4">Our clinic offers cervical HPV testing alongside a smear test (Pap smear/cytology) in a comfortable, private environment. Female medical staff are available upon request.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Services for Women</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Cervical HPV DNA test (14+ high-risk strains)</li>
              <li>✓ Combined HPV + smear (Pap) co-test</li>
              <li>✓ HPV genotyping (HPV 16/18 individual strain ID)</li>
              <li>✓ Vaginal HPV swab (self-sample option)</li>
              <li>✓ Gardasil 9 HPV vaccination (up to age 45)</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book HPV Test for Women" subtitle="Comprehensive cervical screening in a private, comfortable setting." />
      </main>
    </>
  );
}
