import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

export default function LinkPage({ socialLink }) {
  return (
    <div className="px-6 lg:px-12 my-12 w-full flex flex-col items-center">
      <Link href="/">
        <a className="pt-1">
          <Image src="/images/logo.png" alt="logo" height={72} width={72} />
        </a>
      </Link>
      <h3 className="text-2xl font-semibold mt-4 flex">
        fullstack <p className="font-normal">.dre</p>
      </h3>
      <div className="flex flex-col w-full md:w-8/12 lg:w-5/12 space-y-4 mt-12">
        {socialLink.map((linkItem) => {
          const { link, linkIcon, title } = linkItem.fields;
          return (
            <button
              onClick={() => {
                window.open(link, "_blank");
              }}
              key={linkItem.sys.id}
              className={`w-full px-3.5 py-3.5 flex space-x-4 justify-start items-center rounded-lg font-medium xl:whitespace-nowrap text-lg lg:px-8 duration-200 ${"bg-white text-primary-black hover:bg-hover-white border-[2.5px] border-primary-black"}`}
            >
              <Image
                src={"https:" + linkIcon.fields.file.url}
                height={24}
                width={24}
                alt="logo"
              />
              <p>{title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });
  const socialLinkRes = await client.getEntries({
    content_type: "socialLink",
  });
  

  return {
    props: {
      socialLink: socialLinkRes.items,
      socialLink: socialLinkRes.items
    },
    revalidate: 60 * 5,
  };
}
