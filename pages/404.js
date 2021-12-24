import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";

import MainButton from "../components/ui/MainButton";

export default function ErrorPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-12 px-8">
      <div className="lg:w-3/12">
        <Image
          src="/images/404.png"
          height={480}
          width={480}
          alt="404_illustration"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-[1.65rem] font-semibold">Oops! The 404 Page!</h2>
        <p className="text-[1rem] text-center leading-loose">
          The thing you are looking for is not here. <br />
          Better get to the safe place at{" "}
          <code className="font-mono bg-hover-white rounded-md m-2 p-1.5">
            {`"/"`}
          </code>
        </p>
        <div className="pt-8 w-full">
          <Link href="/" passHref>
            <MainButton content={"Redirect me please!"} />
          </Link>
        </div>
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
    'sys.id[ne]': '6l995xa4s7NkEjERM3J4dH'
  });

  const resumeLinkRes = await client.getEntry("6l995xa4s7NkEjERM3J4dH");

  return {
    props: {
      socialLink: socialLinkRes.items,
      resumeLink: resumeLinkRes
    },
    revalidate: 60 * 5,
  };
}
