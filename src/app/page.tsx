import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ServiceCard from "@/components/ui/ServiceCard";
import TrustBadges from "@/components/ui/TrustBadges";
import ProcessSteps from "@/components/ui/ProcessSteps";
import BlogCard from "@/components/ui/BlogCard";
import SchemaOrg from "@/components/SchemaOrg";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Test Antalya | Private Sexual Health Testing",
  description:
    "Private STI & sexual health testing in Antalya. Same-day results, English-speaking staff, 100% confidential. Book via WhatsApp.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "STI Test Antalya | Private Sexual Health Testing",
    description:
      "Private STI & sexual health testing in Antalya. Same-day results, English-speaking staff, 100% confidential.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const services = [
  {
    icon: "🧪",
    title: "Full STI Panel",
    description: "Comprehensive testing for all common STIs including HIV, chlamydia, gonorrhea, syphilis, herpes, and more.",
    href: "/full-sti-panel",
  },
  {
    icon: "🔴",
    title: "HIV Testing",
    description: "Anonymous rapid HIV testing with same-day results. 4th generation tests available.",
    href: "/hiv-test-antalya",
  },
  {
    icon: "🦠",
    title: "HPV Testing",
    description: "HPV DNA testing for men and women. Includes high-risk strain detection.",
    href: "/hpv-test-antalya",
  },
  {
    icon: "🔬",
    title: "Urethral Swab",
    description: "Discreet urethral swab testing for gonorrhea, chlamydia, and other urethral infections.",
    href: "/urethral-swab-test",
  },
  {
    icon: "📊",
    title: "Androflor Test",
    description: "Advanced microbiome analysis for male urogenital health. Detects 30+ pathogens.",
    href: "/androflor-test",
  },
  {
    icon: "⚡",
    title: "Same-Day Results",
    description: "Most tests return results within hours. Walk-in and same-day appointments available.",
    href: "/same-day-sti-results",
  },
];

const whyChooseUs = [
  { icon: "🔒", title: "100% Confidential", desc: "Your privacy is our top priority. No records shared without consent." },
  { icon: "🇬🇧", title: "English-Speaking Staff", desc: "Fully bilingual team ensures clear communication throughout." },
  { icon: "⚡", title: "Same-Day Results", desc: "Most tests completed and reported within hours of your visit." },
  { icon: "🏥", title: "Private Clinic", desc: "Dedicated sexual health facility—not a general hospital." },
  { icon: "✈️", title: "Tourist-Friendly", desc: "Experienced with international patients and travel health needs." },
  { icon: "🧬", title: "Certified Laboratory", desc: "ISO-accredited laboratory partners for accurate, reliable results." },
];

const steps = [
  { number: 1, title: "Contact Us", description: "WhatsApp or call to book your confidential appointment." },
  { number: 2, title: "Arrive", description: "Visit our private clinic in Antalya. No waiting room stigma." },
  { number: 3, title: "Consultation", description: "Brief consultation with our English-speaking medical staff." },
  { number: 4, title: "Sample Collection", description: "Quick, professional sample collection. Minimal discomfort." },
  { number: 5, title: "Receive Results", description: "Get your secure results digitally—often same day." },
];

const homeFaqs = [
  { q: "How confidential is STI testing at your clinic?", a: "All testing is completely confidential. Your results are never shared with third parties, insurance companies, or employers without your explicit written consent." },
  { q: "Do I need a referral for STI testing in Antalya?", a: "No referral is needed. You can book directly via WhatsApp or phone call and walk in for testing." },
  { q: "How long does it take to get STI test results?", a: "Most tests return results within 24-48 hours, and many rapid tests provide same-day results within hours." },
  { q: "What languages do your staff speak?", a: "Our staff are fully English-speaking and also accommodate other languages for international patients." },
  { q: "Can tourists and expats get tested at your clinic?", a: "Absolutely. We specialize in serving international visitors, tourists, expats, and long-term residents in Antalya." },
  { q: "What STI tests are available?", a: "We offer HIV, HPV, chlamydia, gonorrhea, syphilis, herpes (HSV-1/2), hepatitis B/C, and full panel testing." },
  { q: "Is STI testing expensive in Turkey?", a: "STI testing in Turkey is generally significantly more affordable than in Western Europe or the USA, without compromising quality." },
  { q: "How do I book an appointment?", a: "The easiest way is via WhatsApp. You can also call or email. We offer same-day and next-day appointments." },
];

const blogPosts = [
  {
    title: "How Much Does an STI Test Cost in Turkey?",
    description: "A full breakdown of STI testing costs in Turkey compared to the UK, Europe, and USA.",
    slug: "how-much-is-an-sti-test-in-turkey",
    date: "2024-12-01",
    category: "Guides",
  },
  {
    title: "Where to Get STI Tested in Antalya",
    description: "Your complete guide to finding private, confidential sexual health testing in Antalya.",
    slug: "where-to-get-sti-tested-in-antalya",
    date: "2024-11-15",
    category: "Antalya",
  },
  {
    title: "What Is Included in a Full STI Panel?",
    description: "Everything you need to know about comprehensive sexual health screening.",
    slug: "what-is-included-in-a-full-sti-panel",
    date: "2024-11-01",
    category: "Testing",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={organizationSchema()} />
      <SchemaOrg schema={websiteSchema()} />
      <SchemaOrg schema={faqSchema(homeFaqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Private STI Testing in Antalya
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Confidential sexual health testing for tourists, expats & local patients.
              English-speaking staff. Same-day results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 WhatsApp to Book
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                Book Appointment
              </Link>
            </div>
            <TrustBadges />
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-4">Our STI Testing Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive sexual health testing with results you can trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-12">Why Choose STI Test Antalya?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#0A2342] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps steps={steps} />
        <FAQAccordion faqs={homeFaqs} />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-4">Latest Guides & Articles</h2>
            <p className="text-gray-600 text-center mb-12">Expert information on sexual health testing in Turkey.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="text-[#2563EB] font-semibold hover:underline">
                View All Articles →
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
