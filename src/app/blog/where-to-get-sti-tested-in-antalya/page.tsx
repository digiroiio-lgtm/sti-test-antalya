import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Where to Get STI Tested in Antalya | Private English Clinic Guide",
  description: "Your guide to finding a private, English-speaking STI testing clinic in Antalya, Turkey. What to expect, how to book, and why private testing is the best option.",
  alternates: { canonical: `${siteConfig.url}/blog/where-to-get-sti-tested-in-antalya` },
  openGraph: { title: "Where to Get STI Tested in Antalya", description: "Find a private, English-speaking STI clinic in Antalya, Turkey.", url: `${siteConfig.url}/blog/where-to-get-sti-tested-in-antalya`, siteName: siteConfig.name, type: "article" },
};

export default function WhereToGetSTITestedAntalyaPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: "Where to Get STI Tested in Antalya", url: `${siteConfig.url}/blog/where-to-get-sti-tested-in-antalya` }])} />
      <SchemaOrg schema={articleSchema("Where to Get STI Tested in Antalya", `${siteConfig.url}/blog/where-to-get-sti-tested-in-antalya`, "2025-01-10", "Your guide to finding private STI testing in Antalya.")} />
      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Where to Get STI Tested in Antalya", href: "/blog/where-to-get-sti-tested-in-antalya" },
        ]} />
        <section className="bg-[#0A2342] text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-blue-300 text-sm mb-4">January 10, 2025 · 5 min read</div>
            <h1 className="text-4xl font-bold mb-4">Where to Get STI Tested in Antalya</h1>
            <p className="text-blue-200 text-xl">A practical guide to private, English-speaking sexual health testing in Antalya, Turkey.</p>
          </div>
        </section>
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6">
            <p>If you&apos;re holidaying or living in Antalya and need an STI test, you have several options — but not all are equal for English-speaking visitors. This guide covers the best way to access private, confidential sexual health testing in Antalya.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">Your Options for STI Testing in Antalya</h2>
            <h3 className="text-xl font-semibold text-[#0A2342]">1. Private Sexual Health Clinics</h3>
            <p>Private clinics specialising in sexual health offer the best combination of confidentiality, speed, and quality. Staff are accustomed to international patients, speak English, and can provide results and consultations in English. This is the recommended option for tourists.</p>
            <h3 className="text-xl font-semibold text-[#0A2342]">2. General Private Hospitals</h3>
            <p>Antalya has several large private hospitals that can perform STI blood tests. However, these are typically more expensive, require more paperwork, and may not have dedicated sexual health expertise. Some also require Turkish language documentation.</p>
            <h3 className="text-xl font-semibold text-[#0A2342]">3. Turkish Public Hospitals (Not Recommended for Tourists)</h3>
            <p>Public hospitals in Antalya offer free healthcare to Turkish citizens and subsidised care for foreigners with insurance. However, wait times are long, English-speaking staff are rare in sexual health departments, and privacy standards differ from private clinics.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">What to Look for in an Antalya STI Clinic</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>English-speaking doctors and staff</li>
              <li>Accredited partner laboratory for PCR testing</li>
              <li>Results available in English (digital delivery preferred)</li>
              <li>Clear, upfront pricing with no hidden fees</li>
              <li>Ability to book quickly via WhatsApp or email</li>
              <li>Discreet, private environment</li>
            </ul>
            <h2 className="text-2xl font-bold text-[#0A2342]">How to Book at Our Antalya Clinic</h2>
            <p>Booking at STI Test Antalya takes less than two minutes. Send us a WhatsApp message describing what test or consultation you need, and we&apos;ll confirm your appointment time — usually the same day or next day.</p>
          </div>
        </article>
        <CTASection title="Book Your Antalya STI Test" subtitle="Same-day appointments available. WhatsApp us to get started." />
      </main>
    </>
  );
}
