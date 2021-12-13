export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="pt-[96px]">
      {subtitle && (
        <h4 className="uppercase text-primary-black opacity-30 text-xs font-semibold">
          {subtitle}
        </h4>
      )}
      <h2 className="text-[2.5rem] font-bold pt-3 leading-tight">{title}</h2>
    </div>
  );
}
