export default function PlusPointCard({title, caption}) {
  return (
    <div className="flex-col space-y-2">
      <div className="flex items-center space-x-4">
        <div className="bg-[#E06259] flex-[0.2] h-8" />
        <p className="text-xl flex-[20] font-semibold">
          {title}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-[#E06259] flex-[0.2] h-8 opacity-0" />
        <div className="text-md leading-relaxed flex-[20]">
          {caption}
        </div>
      </div>
    </div>
  );
}
