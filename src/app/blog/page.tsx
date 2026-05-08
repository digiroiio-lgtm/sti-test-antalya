import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import BlogCard from "@/components/ui/BlogCard";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Blog | STI Test Antalya — Sexual Health Advice & Guides",
  description: "Sexual health guides, STI advice, and information for tourists in Antalya. Expert articles from our private clinic team.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: { title: "Blog | STI Test Antalya", description: "Sexual health guides and STI advice for tourists in Turkey.", url: `${siteConfig.url}/blog`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const posts = [
  { title: "How Much Is an STI Test in Turkey?", description: "A complete price guide to STI testing in Turkey, comparing costs with the UK, Germany, and other European countries.", slug: "how-much-is-an-sti-test-in-turkey", date: "January 15, 2025" },
  { title: "Where to Get STI Tested in Antalya", description: "Your guide to finding a private, English-speaking STI clinic in Antalya during your holiday or long stay.", slug: "where-to-get-sti-tested-in-antalya", date: "January 10, 2025" },
  { title: "What Is Included in a Full STI Panel?", description: "Exactly which infections are tested in a full STI panel and why each one matters for your health.", slug: "what-is-included-in-a-full-sti-panel", date: "January 5, 2025" },
  { title: "STI Symptoms in Men: What to Look For", description: "The most common STI symptoms in men, which symptoms to never ignore, and when to get tested.", slug: "sti-symptoms-in-men", date: "December 28, 2024" },
  { title: "HPV Testing for Men in Turkey", description: "Can men get HPV tested? What tests are available, who should get tested, and why it matters.", slug: "hpv-testing-for-men-turkey", date: "December 20, 2024" },
  { title: "Healthcare in Turkey for Tourists", description: "Everything you need to know about accessing private healthcare in Turkey as a tourist or expat.", slug: "healthcare-in-turkey-for-tourists", date: "December 15, 2024" },
];

export default function BlogPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }])} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sexual Health Blog</h1>
            <p className="text-xl text-blue-200">Expert guides, STI advice, and information for tourists in Antalya and Turkey.</p>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <BlogCard key={post.slug} title={post.title} description={post.description} slug={post.slug} date={post.date} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
