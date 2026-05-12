import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalTestSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Androflor Test Antalya | Urogenital Microbiome Testing",
  description: "Androflor microbiome analysis in Antalya. Detects 30+ pathogens in the male urogenital tract. Advanced PCR-based testing. Private, confidential.",
  alternates: { canonical: `${siteConfig.url}/androflor-test` },
  openGraph: { title: "Androflor Test Antalya | Urogenital Microbiome Testing", description: "Androflor microbiome analysis in Antalya. 30+ pathogens detected.", url: `${siteConfig.url}/androflor-test`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What is the Androflor test?", a: "Androflor is an advanced PCR-based microbiome analysis test for men that simultaneously detects over 30 microorganisms in the urogenital tract, including bacteria, fungi, and sexually transmitted pathogens." },
  { q: "Who should consider the Androflor test?", a: "Men with recurring urogenital symptoms, unexplained infertility, chronic non-specific urethritis, or those wanting comprehensive sexual health screening beyond standard tests." },
  { q: "What does Androflor detect that standard tests don't?", a: "Androflor detects rare and atypical pathogens including multiple ureaplasma/mycoplasma species, anaerobic bacteria, and fungi, alongside all standard STI pathogens in one comprehensive test." },
  { q: "How is the Androflor sample taken?", a: "A first-catch urine sample or urethral swab is taken. The sample is then analyzed by real-time PCR for all 30+ microorganisms simultaneously." },
];

export default function AndroflorTestPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Androflor Test", url: `${siteConfig.url}/androflor-test` }])} />
      <SchemaOrg schema={medicalTestSchema({
        name: "Androflor Advanced Male Urogenital Microbiome Analysis",
        description: "Comprehensive PCR-based male urogenital microbiome analysis detecting 30+ pathogens including STIs, mycoplasma, ureaplasma, fungi, and anaerobic bacteria.",
        url: `${siteConfig.url}/androflor-test`,
        usedToDiagnose: "Male urogenital infections, STIs, mycoplasma, ureaplasma, candida",
      })} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Androflor Test", href: "/androflor-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Androflor Test in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Advanced male urogenital microbiome analysis. Detects 30+ pathogens in one test. Private, confidential clinic.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">What Is the Androflor Test?</h2>
            <p className="text-gray-600 mb-4">The Androflor test (also known as Androflor Screen) is a comprehensive molecular PCR test that analyzes the microbiome of the male urogenital tract. In a single sample, it detects 30+ microorganisms that can affect male sexual and reproductive health.</p>
            <p className="text-gray-600 mb-4">Unlike standard STI tests that target a handful of pathogens, Androflor provides a complete picture of the microbial environment, identifying infections that might otherwise be missed.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Pathogens Detected</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
              {["Chlamydia trachomatis","Neisseria gonorrhoeae","Mycoplasma genitalium","Mycoplasma hominis","Ureaplasma parvum","Ureaplasma urealyticum","Trichomonas vaginalis","Candida species","HSV-1 & HSV-2","HPV (high-risk)","Gardnerella vaginalis","Enterococcus faecalis"].map(p => (
                <div key={p} className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">...and 20+ additional microorganisms</p>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your Androflor Test" subtitle="The most comprehensive male sexual health microbiome analysis available." />
      </main>
    </>
  );
}
