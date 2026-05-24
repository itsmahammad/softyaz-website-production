export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-violet-200">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-[-0.025em] text-white md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-300/95">{text}</p> : null}
    </div>
  );
}
