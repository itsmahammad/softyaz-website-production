import { clsx } from "clsx";
import type { SoftwareItem } from "@/content/software";

type SoftwareLogoProps = {
  item: SoftwareItem;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "h-8 min-w-8 px-2 text-[10px]",
  md: "h-10 min-w-10 px-2.5 text-xs",
  lg: "h-12 min-w-12 px-3 text-sm"
};

const iconSizes = {
  sm: 18,
  md: 22,
  lg: 26
};

const darkLogoIds = new Set(["linux", "macos"]);

function visibleLogoColor(item: SoftwareItem) {
  if (darkLogoIds.has(item.id)) {
    return "#F8FAFC";
  }

  return item.color;
}

export function SoftwareLogo({ item, size = "md", showLabel = false, className }: SoftwareLogoProps) {
  const iconSize = iconSizes[size];
  return (
    <span
      className={clsx(
        "logo-chip inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300/8 bg-white/[0.03] font-semibold text-white shadow-[inset_0_1px_0_rgba(248,250,252,0.018)] transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-violet-200/14 motion-safe:hover:bg-white/[0.05] motion-safe:hover:shadow-[0_10px_24px_rgba(139,92,246,0.07)]",
        sizeClasses[size],
        className
      )}
      aria-label={item.name}
      title={item.name}
    >
      <LogoMark item={item} size={iconSize} />
      {showLabel ? <span className="whitespace-nowrap text-slate-200">{item.name}</span> : null}
    </span>
  );
}

function LogoMark({ item, size }: { item: SoftwareItem; size: number }) {
  if (item.icon) {
    const color = visibleLogoColor(item);
    return (
      <span
        className="grid shrink-0 place-items-center rounded-md"
        style={{
          width: size + 4,
          height: size + 4,
          background: `linear-gradient(145deg, ${color}12, rgba(255, 255, 255, 0.03))`
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-hidden="true" className="shrink-0 transition duration-200">
          <path fill={color} d={item.icon.path} />
        </svg>
      </span>
    );
  }

  if (item.custom === "windows") {
    return (
      <span
        className="grid shrink-0 place-items-center rounded-md"
        style={{
          width: size + 4,
          height: size + 4,
          background: `linear-gradient(145deg, ${item.color}12, rgba(255, 255, 255, 0.03))`
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-hidden="true" className="shrink-0">
          <path fill={item.color} d="M2.5 4.4 11 3.2v8.2H2.5v-7Zm9.8-1.4 9.2-1.3v9.7h-9.2V3ZM2.5 12.6H11v8.2l-8.5-1.2v-7Zm9.8 0h9.2v9.7L12.3 21v-8.4Z" />
        </svg>
      </span>
    );
  }

  if (item.custom === "office") {
    return (
      <span className="grid shrink-0 place-items-center rounded-md bg-[#D83B01]/90 font-semibold text-white shadow-[0_0_16px_rgba(216,59,1,0.1)]" style={{ width: size, height: size, fontSize: Math.max(10, size * 0.42) }}>
        O
      </span>
    );
  }

  return (
    <span
      className="grid shrink-0 place-items-center rounded-md font-black"
      style={{ width: size, height: size, color: item.color, backgroundColor: `${item.color}14`, fontSize: Math.max(9, size * 0.34) }}
    >
      {item.label}
    </span>
  );
}

export function SoftwareLogoGroup({
  items,
  maxVisible = 6,
  size = "md",
  showLabels = false,
  className
}: {
  items: SoftwareItem[];
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  className?: string;
}) {
  const visible = items.slice(0, maxVisible);
  const extra = items.length - visible.length;

  return (
    <div className={clsx("flex flex-wrap items-center gap-2", className)}>
      {visible.map((item) => (
        <SoftwareLogo key={item.id} item={item} size={size} showLabel={showLabels} />
      ))}
      {extra > 0 ? (
        <span className={clsx("inline-flex items-center justify-center rounded-xl border border-violet-300/8 bg-white/[0.03] px-3 font-semibold text-slate-400", sizeClasses[size])}>
          +{extra}
        </span>
      ) : null}
    </div>
  );
}
