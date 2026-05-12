import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-blue-700",
    secondary: "border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50",
    whatsapp: "bg-[#16A34A] text-white hover:bg-green-700",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
