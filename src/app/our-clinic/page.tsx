import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, medicalClinicSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Clinic | STI Test Antalya Private Sexual Health Clinic",
  description: "Our private sexual health clinic in Antalya. Modern facilities, accredited laboratory, comfortable private consultation rooms. English-speaking staff.",
  alternates: { canonical: `${siteConfig.url}/our-clinic` },
  openGraph: { title: "Our Clinic | STI Test Antalya", description: "Private sexual health clinic in Antalya. Modern facilities, accredited laboratory.", url: `${siteConfig.url}/our-clinic`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function OurClinicPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Our Clinic", url: `${siteConfig.url}/our-clinic` }])} />
      <SchemaOrg schema={medicalClinicSchema()} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Our Clinic", href: "/our-clinic" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clinic in Antalya</h1>
            <p className="text-xl text-blue-200">Modern facilities. Accredited laboratory. Completely private and confidential.</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Clinic Facilities</h2>
            <p className="text-gray-600 mb-4">Our clinic is purpose-built for sexual health testing, with private consultation rooms, an in-house phlebotomy suite, and direct access to our accredited partner laboratory network.</p>
            <p className="text-gray-600 mb-4">We have designed every aspect of your visit to maximise privacy, speed, and comfort — from the dedicated entrance to the secure results delivery system.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Clinic Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Private consultation rooms</li>
              <li>✓ In-house blood draw / phlebotomy</li>
              <li>✓ On-site rapid testing equipment</li>
              <li>✓ Partner accredited PCR laboratory</li>
              <li>✓ Digital results system (email / WhatsApp)</li>
              <li>✓ Fully air-conditioned, modern environment</li>
              <li>✓ Convenient central Antalya location</li>
              <li>✓ Accessible from all major resorts</li>
            </ul>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Opening Hours</h3>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
              <div className="grid grid-cols-2 gap-2">
                <span>Monday – Friday</span><span className="font-semibold">09:00 – 19:00</span>
                <span>Saturday</span><span className="font-semibold">09:00 – 17:00</span>
                <span>Sunday</span><span className="font-semibold">10:00 – 15:00</span>
              </div>
              <p className="mt-4 text-sm">Out-of-hours appointments available for urgent cases — contact us via WhatsApp.</p>
            </div>
          </div>
        </section>
        <CTASection title="Visit Our Clinic" subtitle="Same-day and walk-in appointments available. Contact us via WhatsApp to book." />
      </main>
    </>
  );
}
