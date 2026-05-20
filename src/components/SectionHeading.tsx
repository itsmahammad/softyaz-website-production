export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-violet-200">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-black text-white md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p> : null}
    </div>
  );
}
