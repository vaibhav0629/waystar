import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline-primary";
  children: ReactNode;
};

// Reusable button. Internal paths use <Link>; full URLs use a normal <a>.
export default function Button({ href, variant = "primary", children }: ButtonProps) {
  const className = `btn btn-${variant} btn-lg`;
  const external = /^(https?:|mailto:)/.test(href);
  return external ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
