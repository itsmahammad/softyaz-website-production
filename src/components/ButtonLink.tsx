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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-cyan-200",
    variant === "primary" && "bg-gradient-to-r from-[#38E8FF] via-[#2563EB] to-[#7C3AED] text-white shadow-[0_12px_32px_rgba(56,232,255,0.16)] hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(124,58,237,0.2)]",
    variant === "secondary" && "border border-cyan-300/12 bg-[#0A1228]/54 text-slate-50 shadow-[inset_0_1px_0_rgba(248,250,252,0.025)] hover:-translate-y-0.5 hover:border-cyan-200/22 hover:bg-cyan-300/7",
    variant === "ghost" && "border border-purple-300/12 bg-gradient-to-r from-blue-600/8 to-purple-600/10 text-slate-100 hover:-translate-y-0.5 hover:border-cyan-200/18 hover:shadow-[0_12px_28px_rgba(147,51,234,0.075)]",
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

