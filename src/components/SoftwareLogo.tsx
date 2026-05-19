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
        "logo-chip inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/7 bg-[#050816]/40 font-black text-white shadow-[inset_0_1px_0_rgba(248,250,252,0.025)] transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-cyan-200/16 motion-safe:hover:bg-[#071126]/52 motion-safe:hover:shadow-[0_10px_22px_rgba(56,232,255,0.06),0_14px_30px_rgba(124,58,237,0.04)]",
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
        className="grid shrink-0 place-items-center rounded-md border"
        style={{
          width: size + 6,
          height: size + 6,
          borderColor: `${color}22`,
          background: `linear-gradient(145deg, ${color}16, rgba(5, 8, 22, 0.55))`
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
        className="grid shrink-0 place-items-center rounded-md border"
        style={{
          width: size + 6,
          height: size + 6,
          borderColor: `${item.color}22`,
          background: `linear-gradient(145deg, ${item.color}16, rgba(5, 8, 22, 0.55))`
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
      <span className="grid shrink-0 place-items-center rounded-md border border-[#D83B01]/25 bg-[#D83B01]/85 font-black text-white shadow-[0_0_18px_rgba(216,59,1,0.12)]" style={{ width: size, height: size, fontSize: Math.max(10, size * 0.42) }}>
        O
      </span>
    );
  }

  return (
    <span
      className="grid shrink-0 place-items-center rounded-md border font-black"
      style={{ width: size, height: size, borderColor: `${item.color}66`, color: item.color, backgroundColor: `${item.color}18`, fontSize: Math.max(9, size * 0.34) }}
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
        <span className={clsx("inline-flex items-center justify-center rounded-xl border border-cyan-300/8 bg-[#050816]/42 px-3 font-bold text-slate-400", sizeClasses[size])}>
          +{extra}
        </span>
      ) : null}
    </div>
  );
}
