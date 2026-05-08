import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  category?: string;
}

export default function BlogCard({ title, description, slug, date, category }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-[#0A2342] h-32 flex items-center justify-center">
        <span className="text-4xl">🏥</span>
      </div>
      <div className="p-6">
        {category && (
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide">{category}</span>
        )}
        <h3 className="text-lg font-bold text-[#0A2342] mt-2 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{date}</span>
          <Link href={`/blog/${slug}`} className="text-[#2563EB] text-sm font-medium hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
