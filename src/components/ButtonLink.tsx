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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline-violet-300",
    variant === "primary" && "bg-gradient-to-r from-[#3B6FF2] via-[#5B6EF1] to-[#8B5CF6] text-white shadow-[0_14px_34px_rgba(79,70,229,0.14)] motion-safe:hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(139,92,246,0.18)]",
    variant === "secondary" && "border border-violet-300/12 bg-[#102A5C]/28 text-slate-50 shadow-[inset_0_1px_0_rgba(248,250,252,0.018)] motion-safe:hover:-translate-y-0.5 hover:border-violet-300/20 hover:bg-violet-400/7",
    variant === "ghost" && "border border-violet-300/12 bg-gradient-to-r from-blue-600/8 to-violet-500/10 text-slate-100 motion-safe:hover:-translate-y-0.5 hover:border-violet-200/20 hover:shadow-[0_12px_28px_rgba(139,92,246,0.08)]",
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

