import Image from "next/image";

export default function TechBadge({ title, icon, caption }) {
  return (
    <div className="w-[40px] h-[40px] border border-gray-200 bg-white rounded-full flex items-center justify-center">
      {<Image alt={title + "_badge"} src={"https:" + icon.url} width={20} height={20} />}
    </div>
  );
}
