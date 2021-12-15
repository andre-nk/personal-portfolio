import Image from "next/image";

export default function DetailedServiceCard({ title, description, techstack }) {
  return (
    <div className="flex-col">
      <div className="flex items-center space-x-4">
        <div className="bg-[#E06259] flex-[0.2] lg:flex-[0.1] h-8" />
        <p className="text-xl flex-[20] font-semibold">{title}</p>
      </div>
      <div className="flex items-center space-x-4 mt-2">
        <div className="bg-[#E06259] flex-[0.2] lg:flex-[0.1] h-8 opacity-0" />
        <p className="text-md leading-relaxed flex-[20]">{description}</p>
      </div>
      <div className="flex items-center space-x-4 mt-3">
        <div className="bg-[#E06259] flex-[0.2] lg:flex-[0.1] h-8 opacity-0" />
        <div className="flex space-x-3 flex-[20]">
          {techstack.map((tech, index) => {
            return (
              <div key={index} className="p-2 pb-[3px] bg-[#F1EFEC] rounded-lg">
                <Image src={`/icons/${tech}.svg`} height={28} width={28} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
