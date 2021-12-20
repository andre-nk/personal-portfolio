import Image from "next/image";
import ReactTooltip from "react-tooltip";

export default function DetailedServiceCard({ title, description, techstack }) {
  return (
    <div className="flex-col">
      <ReactTooltip type="dark" effect="float" place="bottom" className="rounded-lg bg-primary-black bg-opacity-30 text-white capitalize" />
      <div className="flex items-center space-x-4">
        <div className="bg-[#E06259] flex-[0.2] lg:flex-[0.1] h-8" />
        <p className="text-xl flex-[20] font-semibold">{title}</p>
      </div>
      <div className="flex items-center space-x-4 mt-2">
        <div className="bg-[#E06259] flex-[0.2] lg:flex-[0.1] h-8 opacity-0" />
        <div className="text-md leading-relaxed flex-[20] prose-md lg:prose-lg">{description}</div>
      </div>
      <div className="flex items-center space-x-4 mt-5">
        <div className="bg-[#E06259] flex-[0.2] lg:flex-[0.1] h-8 opacity-0" />
        <div className="flex gap-4 flex-wrap flex-[20]">
          {techstack.map((tech, index) => {
            var { file, title } = tech.fields;
            title = title.replace(/_/g, " ");

            return (
              <div
                key={index}
                data-tip={title}
                className="p-2 pb-[3px] bg-[#F1EFEC] rounded-lg"
              >
                <Image alt="service_thumbnail" src={"https:" + file.url} height={28} width={28} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
