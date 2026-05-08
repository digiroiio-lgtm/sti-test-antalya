import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "HPV Testing for Men in Turkey | Can Men Get HPV Tested?",
  description: "Can men get HPV tested? Available HPV tests for men in Turkey, who should get tested, and the HPV vaccine for men. Expert guide from our Antalya clinic.",
  alternates: { canonical: `${siteConfig.url}/blog/hpv-testing-for-men-turkey` },
  openGraph: { title: "HPV Testing for Men in Turkey", description: "Can men get HPV tested? Guide to male HPV testing in Turkey.", url: `${siteConfig.url}/blog/hpv-testing-for-men-turkey`, siteName: siteConfig.name, type: "article" },
};

export default function HPVTestingForMenTurkeyPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: "HPV Testing for Men in Turkey", url: `${siteConfig.url}/blog/hpv-testing-for-men-turkey` }])} />
      <SchemaOrg schema={articleSchema("HPV Testing for Men in Turkey", `${siteConfig.url}/blog/hpv-testing-for-men-turkey`, "2024-12-20", "Guide to male HPV testing options in Turkey.")} />
      <main>
        <section className="bg-[#0A2342] text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-blue-300 text-sm mb-4">December 20, 2024 · 6 min read</div>
            <h1 className="text-4xl font-bold mb-4">HPV Testing for Men in Turkey</h1>
            <p className="text-blue-200 text-xl">Can men get HPV tested? Which tests are available, who needs them, and what to do if you test positive.</p>
          </div>
        </section>
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6">
            <p>HPV (Human Papillomavirus) is the most common sexually transmitted infection in the world. While women benefit from established cervical HPV screening programmes, the situation for men is less straightforward.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">Can Men Get HPV Tested?</h2>
            <p>Yes — though mainstream healthcare in many countries does not routinely offer HPV testing to men without symptoms. Our clinic in Antalya offers HPV DNA swab testing for men from the urethra, anus, or throat, depending on your risk factors and symptoms.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">Why Might a Man Need an HPV Test?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visible genital warts (condylomata) — to confirm HPV and identify strain</li>
              <li>Partner has been diagnosed with high-risk HPV or cervical changes</li>
              <li>MSM (men who have sex with men) — anal HPV screening is recommended</li>
              <li>Immunocompromised individuals — higher risk of HPV-related cancers</li>
              <li>Peace of mind and comprehensive sexual health screening</li>
            </ul>
            <h2 className="text-2xl font-bold text-[#0A2342]">HPV and Cancer in Men</h2>
            <p>HPV causes penile cancer, anal cancer, and oropharyngeal (throat) cancer in men. MSM have a significantly higher rate of anal HPV infection and are recommended to undergo regular anal screening. High-risk HPV strains (particularly HPV 16 and 18) are responsible for the majority of HPV-related cancers.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">The HPV Vaccine for Men</h2>
            <p>Gardasil 9 protects against 9 HPV strains including the highest-risk cancer-causing types (HPV 16, 18) and the most common wart-causing types (HPV 6, 11). It is approved for males aged 9–45 and is available at our clinic.</p>
            <p>Even if you have already been exposed to some HPV strains, the vaccine still provides protection against strains you have not yet encountered. We recommend HPV vaccination for all eligible males who have not previously been vaccinated.</p>
          </div>
        </article>
        <CTASection title="Book HPV Test or Vaccination" subtitle="Male HPV testing and Gardasil 9 vaccination available in Antalya." />
      </main>
    </>
  );
}
