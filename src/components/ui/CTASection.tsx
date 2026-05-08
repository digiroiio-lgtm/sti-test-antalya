import { siteConfig } from "@/lib/config";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Book Your Private STI Test Today",
  subtitle = "Confidential results in hours. English-speaking staff. No referral needed.",
}: CTASectionProps) {
  return (
    <section className="bg-[#0A2342] text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-blue-200 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16A34A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp Us Now
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A2342] transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
