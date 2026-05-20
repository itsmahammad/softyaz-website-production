import Link from "next/link";
import type { ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className, external, ariaLabel }: Props) {
  const classes = clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-violet-300",
    variant === "primary" && "bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#8B5CF6] text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)] hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(139,92,246,0.2)]",
    variant === "secondary" && "border border-violet-300/14 bg-[#102A5C]/34 text-slate-50 shadow-[inset_0_1px_0_rgba(248,250,252,0.02)] hover:-translate-y-0.5 hover:border-violet-300/24 hover:bg-violet-400/8",
    variant === "ghost" && "border border-violet-300/14 bg-gradient-to-r from-blue-600/10 to-violet-500/12 text-slate-100 hover:-translate-y-0.5 hover:border-violet-200/24 hover:shadow-[0_12px_28px_rgba(139,92,246,0.09)]",
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

