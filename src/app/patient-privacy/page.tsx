import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Patient Privacy | STI Test Antalya",
  description: "Our patient privacy commitment at STI Test Antalya. Complete confidentiality guaranteed for all sexual health consultations and test results.",
  alternates: { canonical: `${siteConfig.url}/patient-privacy` },
};

export default function PatientPrivacyPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Patient Privacy", url: `${siteConfig.url}/patient-privacy` }])} />
      <main className="py-16 bg-white">
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Patient Privacy", href: "/patient-privacy" },
        ]} />
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0A2342] mb-8">Patient Privacy Commitment</h1>
          <p className="text-xl text-gray-600 mb-8">Your privacy is the foundation of everything we do. Here is our commitment to you.</p>
          <div className="space-y-6">
            {[
              { title: "Absolute Confidentiality", desc: "Everything you discuss with our doctors and staff is strictly confidential. We will never contact your GP, employer, insurance company, or any other party about your visit without your written consent." },
              { title: "No Trace on Insurance", desc: "Private, self-pay consultations leave no trace on your insurance records. You pay directly and no claim is submitted to any insurance provider." },
              { title: "Secure Results Delivery", desc: "Test results are delivered by password-protected email or WhatsApp. You control how and where your results are sent. No results are left in voicemail or with third parties." },
              { title: "Anonymous Testing Available", desc: "We offer anonymous testing for patients who prefer not to provide full identity details. Ask about our anonymous testing options when you contact us." },
              { title: "Discreet Physical Environment", desc: "Our clinic has a discreet entrance and reception. Waiting areas are designed to protect your privacy, and consultations are conducted in private rooms." },
              { title: "No Judgement, Ever", desc: "Our team is trained to provide non-judgmental care. You will never be made to feel embarrassed or ashamed for seeking sexual health testing. This is a normal part of healthcare." },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-[#0A2342] mb-2">✓ {item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
