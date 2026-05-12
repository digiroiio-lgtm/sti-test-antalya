import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, medicalClinicSchema, medicalTestSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Test Antalya | Private HPV DNA Testing for Men & Women",
  description: "Private HPV DNA testing in Antalya. High-risk strain detection for men and women. Confidential results. English-speaking staff.",
  alternates: { canonical: `${siteConfig.url}/hpv-test-antalya` },
  openGraph: {
    title: "HPV Test Antalya | Private HPV DNA Testing for Men & Women",
    description: "Private HPV DNA testing in Antalya. High-risk strain detection for men and women.",
    url: `${siteConfig.url}/hpv-test-antalya`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  { q: "What is HPV testing?", a: "HPV (Human Papillomavirus) testing detects the presence of HPV DNA in cervical, anal, or genital samples. It identifies whether you carry high-risk strains associated with cancer or low-risk strains associated with warts." },
  { q: "Can men get HPV tested in Antalya?", a: "Yes. We offer HPV testing for men including urethral, anal, and throat swabs. HPV in men can cause genital warts and is linked to penile, anal, and oropharyngeal cancers." },
  { q: "Which HPV strains are tested?", a: "Our HPV DNA test screens for 14+ high-risk strains including HPV 16 and 18 (highest cancer risk), plus low-risk strains associated with genital warts (HPV 6 and 11)." },
  { q: "Is there treatment for HPV?", a: "There is no cure for HPV itself, but most infections clear naturally within 2 years. Treatment is available for symptoms like warts. Vaccination (Gardasil 9) can prevent infection from the most dangerous strains." },
  { q: "Should I get HPV testing if I have no symptoms?", a: "Yes. Most HPV infections are asymptomatic. High-risk strains can cause cellular changes that, if undetected, may progress to cancer. Regular screening is recommended." },
];

export default function HPVTestAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "HPV Test Antalya", url: `${siteConfig.url}/hpv-test-antalya` },
      ])} />
      <SchemaOrg schema={medicalClinicSchema()} />
      <SchemaOrg schema={medicalTestSchema({
        name: "HPV DNA Genotyping Test",
        description: "Private HPV DNA testing in Antalya identifying high-risk and low-risk HPV strains for men and women.",
        url: `${siteConfig.url}/hpv-test-antalya`,
        usedToDiagnose: "Human Papillomavirus (HPV)",
      })} />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "HPV Test Antalya", href: "/hpv-test-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private HPV DNA testing for men and women. High-risk strain detection. Confidential results. English-speaking doctors.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book via WhatsApp
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Understanding HPV Testing</h2>
            <p className="text-gray-600 mb-6">
              HPV is the most common sexually transmitted infection worldwide. Most sexually active people will have HPV at some point, but many never know it. Our advanced DNA testing identifies both high-risk and low-risk HPV strains.
            </p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4">HPV Tests We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { name: "HPV High-Risk Panel (14 strains)", detail: "Includes HPV 16, 18, 31, 33, 45, 52, 58 and more" },
                { name: "HPV Genotyping", detail: "Identifies specific HPV strain(s) present" },
                { name: "Cervical Smear + HPV Co-test", detail: "For women, combined cervical cytology and HPV test" },
                { name: "Anal HPV Swab", detail: "For men who have sex with men (MSM) and others at risk" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-[#0A2342]">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4">Why HPV Testing Matters</h3>
            <p className="text-gray-600 mb-4">
              High-risk HPV strains are responsible for nearly all cases of cervical cancer, as well as significant proportions of anal, penile, vaginal, vulvar, and oropharyngeal cancers. Early detection through HPV testing enables timely monitoring and intervention.
            </p>
            <p className="text-gray-600">
              HPV vaccination (Gardasil 9) is available at our clinic for those who have not yet been vaccinated. Vaccination is effective even in adults who may not have been exposed to all HPV strains.
            </p>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your HPV Test Today" subtitle="Private DNA testing for high and low-risk HPV strains." />
      </main>
    </>
  );
}
