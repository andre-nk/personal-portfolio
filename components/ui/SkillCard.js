import Link from "next/link";
import Image from "next/image";

export default function SkillCard({ image, title, caption }) {
  return (
    <Link href="/skills" passHref>
      <div className="cursor-pointer h-auto w-full space-y-4 hover:bg-hover-white duration-200 rounded-lg">
        <div className="w-full bg-gray-300 rounded-lg h-[11.25rem] object-fill overflow-hidden">
          <Image
            src={"https:" + image.url}
            alt="project_thumbnail"
            width={image.details.image.width}
            height={image.details.image.height}
          />
        </div>
        <div className="space-y-1.5 px-4 pb-5">
          <h2 className="text-[22px] font-semibold">{title}</h2>
          <div className="text-[14px] text-primary-black opacity-70 prose">
            {caption}
          </div>
        </div>
      </div>
    </Link>
  );
}
