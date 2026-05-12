import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "What Is Included in a Full STI Panel? | Complete Guide 2025",
  description: "Exactly which infections are tested in a full STI panel, the testing methods used, and why each pathogen is included. Complete guide from our Antalya clinic.",
  alternates: { canonical: `${siteConfig.url}/blog/what-is-included-in-a-full-sti-panel` },
  openGraph: { title: "What Is Included in a Full STI Panel?", description: "Complete guide to what is tested in a full STI panel and why.", url: `${siteConfig.url}/blog/what-is-included-in-a-full-sti-panel`, siteName: siteConfig.name, type: "article" },
};

export default function WhatIncludedFullSTIPanelPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: "What Is Included in a Full STI Panel?", url: `${siteConfig.url}/blog/what-is-included-in-a-full-sti-panel` }])} />
      <SchemaOrg schema={articleSchema("What Is Included in a Full STI Panel?", `${siteConfig.url}/blog/what-is-included-in-a-full-sti-panel`, "2025-01-05", "Complete guide to full STI panel contents.")} />
      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "What Is Included in a Full STI Panel?", href: "/blog/what-is-included-in-a-full-sti-panel" },
        ]} />
        <section className="bg-[#0A2342] text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-blue-300 text-sm mb-4">January 5, 2025 · 7 min read</div>
            <h1 className="text-4xl font-bold mb-4">What Is Included in a Full STI Panel?</h1>
            <p className="text-blue-200 text-xl">Exactly which infections are tested, the methods used, and what each test tells you about your health.</p>
          </div>
        </section>
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6">
            <p>A &ldquo;full STI panel&rdquo; refers to a comprehensive screen for all major sexually transmitted infections. Unlike testing for a single infection, a full panel gives you a complete picture of your sexual health in one appointment.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">What Our Full STI Panel Includes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 text-[#0A2342]">Infection</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">Test Method</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">Sample Type</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">Result Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["HIV-1 & HIV-2", "4th Gen Ag/Ab", "Blood", "Same day"],
                    ["Syphilis (Treponema)", "TPHA + VDRL", "Blood", "Same day"],
                    ["Chlamydia", "PCR", "Urine / Swab", "24–48 hrs"],
                    ["Gonorrhea", "PCR", "Urine / Swab", "24–48 hrs"],
                    ["Hepatitis B", "HBsAg + Anti-HBs", "Blood", "Same day"],
                    ["Hepatitis C", "Anti-HCV", "Blood", "Same day"],
                    ["Herpes HSV-1 & HSV-2", "IgG/IgM + PCR", "Blood / Swab", "24–48 hrs"],
                    ["Mycoplasma genitalium", "PCR", "Urine / Swab", "24–48 hrs"],
                    ["Trichomonas vaginalis", "PCR", "Urine / Swab", "24–48 hrs"],
                    ["Ureaplasma", "PCR", "Urine / Swab", "24–48 hrs"],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-50">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-3 border border-gray-200 ${i === 0 ? "font-medium" : "text-center"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="text-2xl font-bold text-[#0A2342]">Optional Add-Ons</h2>
            <p>Our full panel can be extended with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>HPV DNA testing (14+ high-risk strains)</li>
              <li>Hepatitis A antibody testing</li>
              <li>Androflor / Femoflor microbiome analysis</li>
              <li>Anal or throat swabs (PCR)</li>
            </ul>
            <h2 className="text-2xl font-bold text-[#0A2342]">How Long Do Full Panel Results Take?</h2>
            <p>Rapid blood tests (HIV, syphilis, hepatitis) provide same-day results. PCR-based tests for bacterial and viral infections typically return within 24–48 hours. We send all results digitally in English.</p>
          </div>
        </article>
        <CTASection title="Book a Full STI Panel" subtitle="Comprehensive testing in one appointment. Same-day and next-day available." />
      </main>
    </>
  );
}
