import Image from "next/image";

import moment from "moment";
import Link from "next/link";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  slug,
  image,
  techstack,
  title,
  type,
  startDate,
  endDate,
  caption,
}) {
  const parsedStartDate = moment(startDate).format("MMMM YYYY");
  const parsedEndDate = moment(endDate).format("MMMM YYYY");

  return (
    <Link href={`/projects/${slug}`} passHref>
      <div className="h-auto w-full space-y-4 bg-white hover:bg-hover-white bg-opacity-40 duration-200 rounded-xl">
        <div className="relative inline-block w-full">
          <div className="w-full bg-gray-300 rounded-lg h-[11.25rem] object-fill overflow-hidden">
            <Image
              src={"https:" + image.url}
              alt="project_thumbnail"
              width={image.details.image.width}
              height={image.details.image.height}
            />
          </div>
          <div className="px-3 absolute -bottom-[1.15rem] flex -space-x-2.5">
            {techstack.map((tech) => {
              const { file, title } = tech.fields;
              return <TechBadge icon={file} title={title} key={title} />;
            })}
          </div>
        </div>
        <div className="space-y-1.5 px-4 pt-4 pb-6">
          <h2 className="text-[22px] font-semibold">{title}</h2>
          <div className="text-[14px] pb-3">
            <span className="font-medium">{type}</span> · {parsedStartDate} -{" "}
            {parsedEndDate}
          </div>
          <div className="w-5/12 lg:w-2/12 h-[2px] bg-primary-black opacity-30" />
          <p className="text-[14px] pt-3 text-primary-black opacity-70">
            {caption}
          </p>
        </div>
      </div>
    </Link>
  );
}
