import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Symptoms in Men: What to Look For | STI Test Antalya",
  description: "Common STI symptoms in men. Which symptoms require urgent testing. Many STIs have no symptoms at all — when to get tested even without symptoms.",
  alternates: { canonical: `${siteConfig.url}/blog/sti-symptoms-in-men` },
  openGraph: { title: "STI Symptoms in Men: What to Look For", description: "STI symptoms in men explained. Know when to get tested.", url: `${siteConfig.url}/blog/sti-symptoms-in-men`, siteName: siteConfig.name, type: "article" },
};

export default function STISymptomsInMenPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: "STI Symptoms in Men", url: `${siteConfig.url}/blog/sti-symptoms-in-men` }])} />
      <SchemaOrg schema={articleSchema("STI Symptoms in Men: What to Look For", `${siteConfig.url}/blog/sti-symptoms-in-men`, "2024-12-28", "Guide to STI symptoms in men.")} />
      <main>
        <section className="bg-[#0A2342] text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-blue-300 text-sm mb-4">December 28, 2024 · 8 min read</div>
            <h1 className="text-4xl font-bold mb-4">STI Symptoms in Men: What to Look For</h1>
            <p className="text-blue-200 text-xl">The most common STI symptoms in men, which ones require urgent testing, and the critical importance of testing without symptoms.</p>
          </div>
        </section>
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-semibold text-amber-800">Important: Most STIs in men produce no symptoms at all.</p>
              <p className="text-amber-700 text-sm mt-1">The only reliable way to know your STI status is to get tested — not to wait for symptoms.</p>
            </div>
            <h2 className="text-2xl font-bold text-[#0A2342]">Common STI Symptoms in Men</h2>
            <h3 className="text-xl font-semibold text-[#0A2342]">Urethral Discharge</h3>
            <p>Any discharge from the penis — whether clear, white, yellow, or green — is a strong indicator of infection. Gonorrhea typically produces thick yellow-green discharge. Chlamydia may cause clear or white discharge. Mycoplasma genitalium can cause a thin, watery discharge.</p>
            <h3 className="text-xl font-semibold text-[#0A2342]">Burning or Pain When Urinating</h3>
            <p>Dysuria (painful urination) is commonly caused by urethral infections including chlamydia, gonorrhea, and mycoplasma. It can also indicate a urinary tract infection. Get tested if this symptom persists for more than a day or two.</p>
            <h3 className="text-xl font-semibold text-[#0A2342]">Sores, Ulcers, or Blisters</h3>
            <p>Painful blisters or sores on the penis, scrotum, or surrounding area strongly suggest herpes (HSV). Painless sores (chancres) are characteristic of primary syphilis. HPV causes genital warts — raised, flesh-coloured growths.</p>
            <h3 className="text-xl font-semibold text-[#0A2342]">Testicular Pain or Swelling</h3>
            <p>Pain or swelling in one or both testicles can indicate epididymitis — often caused by chlamydia or gonorrhea spreading to the epididymis. This requires prompt treatment to avoid long-term fertility complications.</p>
            <h3 className="text-xl font-semibold text-[#0A2342]">Rash, Fever, or Flu-Like Symptoms</h3>
            <p>A rash, especially on the palms and soles, with flu-like symptoms can indicate secondary syphilis. Acute HIV infection (seroconversion illness) causes fever, sore throat, rash, and fatigue typically 2–6 weeks after exposure.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">When to Test Without Symptoms</h2>
            <p>Test after any new sexual partner or unprotected sex — even with no symptoms. Chlamydia, gonorrhea, HIV, syphilis, and hepatitis B and C can all be asymptomatic for months or years while causing damage or being transmitted to others.</p>
          </div>
        </article>
        <CTASection title="Get Tested Today" subtitle="Symptoms or no symptoms — the only way to know is to test. Book privately in Antalya." />
      </main>
    </>
  );
}
