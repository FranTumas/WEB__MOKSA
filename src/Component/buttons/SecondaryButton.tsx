import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  newTab?: boolean;
  ariaLabel?: string;
  title?: string;
}

export function SecondaryButton({
  href,
  children,
  className = "",
  newTab,
  ariaLabel,
  title,
}: ButtonProps) {
  const common =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold " +
    "transition-all duration-200 will-change-transform " +
    "focus:outline-none focus:ring-4 " +
    "hover:-translate-y-0.5 hover:shadow-md";

  const skin =
    "border border-neutral-300 hover:bg-neutral-50 hover:border-[var(--color-accent)]/40 " +
    "focus:ring-neutral-200";

  if (newTab) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${common} ${skin} ${className}`}
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${common} ${skin} ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </Link>
  );
}
