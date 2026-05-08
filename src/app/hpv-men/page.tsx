import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Test for Men Antalya | Male HPV Testing Turkey",
  description: "HPV testing for men in Antalya. Urethral, anal, and throat HPV swabs. High-risk strain detection. Private, confidential. English-speaking clinic.",
  alternates: { canonical: `${siteConfig.url}/hpv-men` },
  openGraph: { title: "HPV Test for Men Antalya | Male HPV Testing Turkey", description: "HPV testing for men in Antalya. Urethral, anal, and throat HPV swabs.", url: `${siteConfig.url}/hpv-men`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "Can men get HPV tested?", a: "Yes. While there is no approved HPV test for asymptomatic men in mainstream healthcare, our clinic offers HPV DNA swabs for men from the urethra, anus, or throat depending on risk factors and symptoms." },
  { q: "What HPV-related cancers affect men?", a: "HPV is linked to penile cancer, anal cancer, and oropharyngeal (throat) cancer in men. MSM (men who have sex with men) are at higher risk of anal HPV and anal cancer." },
  { q: "Should MSM get HPV tested?", a: "Yes. Men who have sex with men have significantly higher rates of anal HPV infection and are recommended to undergo regular anal HPV screening and consider anal Pap smears." },
  { q: "Can men get the HPV vaccine?", a: "Yes. The Gardasil 9 HPV vaccine is approved and effective for men up to age 45. We offer HPV vaccination at our clinic. It is most effective before HPV exposure, but still beneficial for many adults." },
];

export default function HPVMenPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "HPV Test for Men", url: `${siteConfig.url}/hpv-men` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Testing for Men in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Urethral, anal, and throat HPV DNA swabs for men. High-risk strain detection. Private and confidential.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">HPV in Men: What You Need to Know</h2>
            <p className="text-gray-600 mb-4">HPV is just as common in men as in women, but men are often overlooked in standard HPV screening programmes. Most men with HPV have no symptoms and are unaware they carry the virus.</p>
            <p className="text-gray-600 mb-4">Our clinic offers HPV DNA testing for men using swabs from the sites most likely to carry infection based on your sexual history. This enables us to detect high-risk HPV strains before any symptoms develop.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Available HPV Tests for Men</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Penile/urethral HPV swab</li>
              <li>✓ Anal HPV swab (recommended for MSM)</li>
              <li>✓ Throat/oropharyngeal HPV swab</li>
              <li>✓ HPV genotyping (identifies specific strains)</li>
              <li>✓ Gardasil 9 HPV vaccination</li>
            </ul>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book HPV Test for Men" subtitle="Comprehensive male HPV screening. Private and confidential." />
      </main>
    </>
  );
}
