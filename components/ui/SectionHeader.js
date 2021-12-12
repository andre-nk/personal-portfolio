export default function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <h4 className="pt-[96px] uppercase text-primary-black opacity-30 text-xs font-semibold">
        {subtitle}
      </h4>
      <h2 className="text-[2.5rem] font-bold pt-3 leading-tight">{title}</h2>
    </div>
  );
}
