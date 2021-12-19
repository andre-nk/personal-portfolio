import Image from "next/image";

export default function TechBadge({ title, icon, caption }) {
  return (
    <div className="w-[40px] h-[40px] border border-gray-400 bg-white rounded-full flex items-center justify-center">
      {<Image src={"https:" + icon.url} width={20} height={20} />}
    </div>
  );
}
