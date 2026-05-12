const badges = [
  { icon: "🔒", label: "100% Confidential" },
  { icon: "⚡", label: "Same-Day Results" },
  { icon: "🇬🇧", label: "English Speaking" },
  { icon: "🏥", label: "Private Clinic" },
  { icon: "🧪", label: "Certified Lab" },
  { icon: "📋", label: "No Referral Needed" },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
        >
          <span>{badge.icon}</span>
          <span className="text-sm font-medium text-white">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
