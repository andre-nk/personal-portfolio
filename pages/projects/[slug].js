import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import MainButton from "../../components/ui/MainButton";
import TechBadge from "../../components/ui/TechBadge";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

export default function ProjectDetailedPage({ project }) {
  const {
    title,
    description,
    affiliation,
    startDate,
    endDate,
    techstack,
    thumbnail,
    referenceLinks,
  } = project.fields;

  const parsedStartDate = moment(startDate).format("MMMM YYYY");
  const parsedEndDate = moment(endDate).format("MMMM YYYY");

  return (
    <div className="px-6 pt-12 lg:py-0 lg:my-16 lg:px-64">
      <Head>
        <title>Andreas Notokusumo - {title}</title>
        <meta
          name="description"
          content={
            title +
            " - " +
            description.content[0].content[0].value.replace(
              /^(.{117}[^\s]*).*/,
              "$1"
            ) +
            "..."
          }
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="px-3 lg:px-28 lg:space-y-1.5">
        <h2 className="text-[1.8rem] lg:text-4xl font-bold pt-3 leading-tight">
          {title}
        </h2>
        <div className="text-[14px] lg:text-[16px] pt-1.5 pb-5">
          <span className="font-medium">{affiliation}</span> · {parsedStartDate}{" "}
          - {parsedEndDate}
        </div>
      </div>
      <div className="relative inline-block w-full my-4">
        <div className="w-full bg-gray-300 rounded-lg h-[11.25rem] lg:h-auto lg:aspect-[21/9] object-cover overflow-hidden">
          <Image
            src={"https:" + thumbnail.fields.file.url}
            alt="project_thumbnail"
            width={thumbnail.fields.file.details.image.width}
            height={
              thumbnail.fields.file.details.image.height <= 500
                ? thumbnail.fields.file.details.image.height +
                  thumbnail.fields.file.details.image.height / 20
                : thumbnail.fields.file.details.image.height
            }
          />
        </div>
        <div className="px-3 absolute -bottom-[1.15rem] flex -space-x-2.5">
          {techstack.map((tech) => {
            const { file, title } = tech.fields;
            return <TechBadge icon={file} title={title} key={title} />;
          })}
        </div>
      </div>
      <div className="space-y-1.5 px-3 lg:px-32 py-3">
        <span className="text-primary-black opacity-70 prose prose-md lg:prose-lg prose-p:leading-loose">
          {description.content.map((item, index) => {
            return (
              <div key={index} className="">
                {documentToReactComponents(item)}
              </div>
            );
          })}
        </span>
        <div className="flex pt-12 flex-wrap space-y-6 lg:mb-12 lg:w-4/12">
          {
            referenceLinks && (
              Object.entries(referenceLinks).map((item, index) => {
                return (
                  <a target="_blank" rel="noreferrer" href={item[1]} key={index} className="w-full">
                    <MainButton content={item[0]} isInversed={true} />
                  </a>
                );
              })
            )
          }
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const projectRes = await client.getEntries({
    content_type: "project",
  });

  const paths = projectRes.items.map((projectPath) => {
    return {
      params: {
        slug: projectPath.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  const socialLinkRes = await client.getEntries({
    content_type: "socialLink",
  });

  const resumeLinkRes = await client.getEntry("6l995xa4s7NkEjERM3J4dH");

  return {
    props: {
      project: response.items[0],
      socialLink: socialLinkRes.items,
      resumeLink: resumeLinkRes
    },
  };
}
