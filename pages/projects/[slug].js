import MainButton from "../../components/ui/MainButton";
import TechBadge from "../../components/ui/TechBadge";

export default function ProjectDetailedPage() {
  return (
    <div className="px-6">
      <div className="px-4">
        <h2 className="text-[1.8rem] font-bold pt-3 leading-tight">
          Get Heroes App
        </h2>
        <div className="text-[14px] pt-1.5 pb-5">
          <span className="font-medium">Freelance</span> · Jan 2021 - Feb 2021
        </div>
      </div>
      <div className="relative inline-block w-full">
        {/* IMAGE URL HERE */}
        <div className="w-full bg-gray-300 rounded-lg h-[11.25rem]" />
        <div className="px-3 absolute -bottom-[1.15rem] flex -space-x-2.5">
          <TechBadge caption="" />
          <TechBadge caption="" />
          <TechBadge caption="" />
          <TechBadge caption="2+" />
        </div>
      </div>
      <div className="space-y-1.5 px-4 pt-5 pb-6">
        <p className="text-lg pt-3 text-primary-black opacity-70">Tes tes</p>
      </div>
      <div className="flex flex-wrap space-y-6 mt-36">
        <MainButton content="Repository" isInversed={true} />
        <MainButton content="Design" isInversed={true} />
      </div>
    </div>
  );
}
