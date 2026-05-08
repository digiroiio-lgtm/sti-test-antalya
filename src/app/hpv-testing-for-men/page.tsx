import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Testing for Men in Antalya Turkey | Private Male HPV Test",
  description:
    "Private HPV testing for men in Antalya. Urethral swab, genital, and anal HPV PCR testing. English-speaking doctors. Confidential results. From £300.",
  alternates: { canonical: `${siteConfig.url}/hpv-testing-for-men` },
  openGraph: {
    title: "HPV Testing for Men in Antalya Turkey | Private Male HPV Test",
    description: "HPV testing specifically for men in Antalya. Urethral and genital swab options. Private, confidential.",
    url: `${siteConfig.url}/hpv-testing-for-men`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Can men get tested for HPV?",
    a: "Yes. Men can be tested for HPV using urethral swab, penile swab, anal swab, or throat swab sampling depending on the exposure type. Our clinic in Antalya provides HPV testing specifically for men, including genotyping to identify which strain is present.",
  },
  {
    q: "What HPV tests are available for men in Antalya?",
    a: "We offer urethral swab HPV genotyping, genital/penile swab HPV testing, anal swab HPV testing, and throat swab HPV testing for men. Double sampling (urethral + genital) is also available.",
  },
  {
    q: "Is HPV testing important for men even without symptoms?",
    a: "Yes. Most HPV infections in men are asymptomatic. High-risk strains are associated with penile cancer, anal cancer, and oropharyngeal cancers. Testing enables early identification and appropriate monitoring.",
  },
  {
    q: "How is HPV tested in men?",
    a: "A swab is taken from the relevant site. For urethral HPV, a thin swab is inserted a short way into the urethra. Genital and anal swabs are external. The sample is sent for real-time PCR analysis.",
  },
  {
    q: "Can HPV vaccination help men?",
    a: "Yes. Gardasil 9 vaccination is effective in men and protects against HPV 6, 11, 16, 18, and five additional high-risk strains. Vaccination is recommended for men who have not been previously exposed to these strains.",
  },
];

export default function HPVTestingForMenPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV Test Antalya", url: `${siteConfig.url}/hpv-test-antalya` },
          { name: "HPV Testing for Men", url: `${siteConfig.url}/hpv-testing-for-men` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HPV Testing for Men in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Private HPV genotyping for men. Urethral, genital, and anal swab testing. English-speaking doctors. Confidential results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Book HPV Test
              </a>
              <Link
                href="/hpv-test-price"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                View Prices
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">HPV in Men: Why Testing Matters</h2>
            <p className="text-gray-600 mb-4">
              HPV is the most common sexually transmitted infection globally, and the majority of sexually active men will carry at least one HPV strain at some point. While many infections clear naturally, persistent infection with high-risk HPV strains is associated with several serious conditions in men:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Penile cancer", "Anal cancer", "Oropharyngeal cancer", "Genital warts"].map((item) => (
                <div key={item} className="p-3 bg-[#F9FAFB] rounded-lg text-center text-sm font-medium text-[#0A2342]">
                  {item}
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">Male HPV Testing Options</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Urethral Swab HPV Test",
                  desc: "Tests for HPV in the urethral canal. Important for men with intraurethral symptoms or positive urethral findings on examination.",
                  price: "Included from £300",
                },
                {
                  title: "Genital / Penile Swab HPV Test",
                  desc: "Swab from the glans, shaft, or foreskin. Appropriate for visible lesions, wart-like changes, or unexplained skin changes.",
                  price: "Included from £300",
                },
                {
                  title: "Anal HPV Swab",
                  desc: "For men who have sex with men (MSM) or those with anal symptoms. Detects HPV strains at the anal canal.",
                  price: "Available on request",
                },
                {
                  title: "Double HPV Sampling",
                  desc: "Genital + urethral swab simultaneously. Maximises diagnostic sensitivity for complex or multi-site presentations.",
                  price: "£600",
                },
              ].map((opt) => (
                <div key={opt.title} className="p-5 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#0A2342]">{opt.title}</h3>
                    <span className="text-[#2563EB] font-semibold text-sm">{opt.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Genotyping Test", href: "/hpv-genotyping-test" },
                { label: "Single vs Double Sampling", href: "/single-vs-double-hpv-sampling" },
                { label: "HPV Test Antalya", href: "/hpv-test-antalya" },
                { label: "HPV vs Herpes", href: "/hpv-vs-herpes" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "Full STI Panel", href: "/full-sti-panel" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block p-3 bg-white rounded-lg text-[#2563EB] text-sm font-medium hover:bg-blue-50 transition-colors border border-gray-100"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Male HPV Testing in Antalya" subtitle="Private, confidential. English-speaking doctors. Same-day appointments available." />
      </main>
    </>
  );
}
