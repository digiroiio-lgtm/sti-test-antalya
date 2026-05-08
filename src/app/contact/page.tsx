import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, medicalClinicSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact | STI Test Antalya Private Sexual Health Clinic",
  description: "Contact STI Test Antalya. Book by WhatsApp, email, or phone. Private sexual health clinic in Antalya, Turkey. English-speaking staff.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: { title: "Contact STI Test Antalya", description: "Book your private STI test in Antalya via WhatsApp, email, or phone.", url: `${siteConfig.url}/contact`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Contact", url: `${siteConfig.url}/contact` }])} />
      <SchemaOrg schema={medicalClinicSchema()} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-200">Reach us via WhatsApp, email, or phone. We respond quickly and always in English.</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-[#0A2342] mb-2">💬 WhatsApp (Fastest)</h3>
                    <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{siteConfig.phone}</a>
                    <p className="text-gray-500 text-sm mt-1">Fastest way to book. We usually respond within 15 minutes.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2342] mb-2">📧 Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a>
                    <p className="text-gray-500 text-sm mt-1">We respond to all emails within a few hours.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2342] mb-2">📍 Address</h3>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2342] mb-2">🕐 Opening Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div className="flex justify-between gap-4"><span>Monday – Friday</span><span className="font-semibold">09:00 – 19:00</span></div>
                      <div className="flex justify-between gap-4"><span>Saturday</span><span className="font-semibold">09:00 – 17:00</span></div>
                      <div className="flex justify-between gap-4"><span>Sunday</span><span className="font-semibold">10:00 – 15:00</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Quick Booking</h2>
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <p className="text-gray-600 mb-6">The fastest way to book your appointment is via WhatsApp. We typically confirm appointments within 15 minutes.</p>
                  <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Message Us on WhatsApp</a>
                  <p className="text-gray-500 text-sm mt-4">Same-day appointments often available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
