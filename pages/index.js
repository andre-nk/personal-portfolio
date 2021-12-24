import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { useState, useEffect, useContext } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import MainButton from "../components/ui/MainButton";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceList from "../components/layout/ServiceList";
import ProjectList from "../components/layout/ProjectList";
import PlusPointList from "../components/layout/PlusPointList";
import ReviewList from "../components/layout/ReviewList";
import ModalContext from "../context/ModalContext";
import Link from "next/link";

export default function Home(props) {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);
  const { showModal } = useContext(ModalContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.screen.width);
    }
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="text-primary-black">
      <Head>
        <title>Andreas Notokusumo</title>
        <meta
          name="description"
          content="Fullstack Web Developer, Flutter Developer, and UI/UX Enthusiast based in Indonesia!"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="lg:flex lg:px-12 items-center">
        <div
          className="px-6  lg:px-0 lg:flex-[5]"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <h2 className="text-[48px] font-bold pt-[24px]">
            {"Hi, I'm Andre!"}
          </h2>
          <p className="text-[20px] pt-[16px] prose">
            A fullstack web and mobile developer and a UI/UX enthusiast based in
            Indonesia. I craft production-grade website and mobile app that your
            users will love!
          </p>
          <div className="pt-[40px] w-full lg:w-3/12">
            <MainButton
              content="Let's talk"
              onClick={() => {
                showModal();
              }}
            />
          </div>
        </div>
        <span className="hidden lg:block lg:flex-[1.5] xl:flex[2]"></span>
        <div
          className="pt-16 lg:flex-[4] aspect-square"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="250"
        >
          <Image
            src="/images/hero_img.png"
            alt="hero_img"
            width={screenWidth}
            height={screenWidth * 0.95}
          />
        </div>
      </div>

      <div
        className="px-6 lg:px-12 lg:mt-36 flex flex-col justify-center"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <SectionHeader title={"What do I do?"} subtitle={"MY SERVICES"} />
        <ServiceList serviceRes={props.services} />
        <Link href="/services" className="cursor-pointer">
          <div className="cursor-pointer flex self-center mt-10 border-b hover:border-primary-black duration-200 pb-2 text-md space-x-2">
            <p>{"My services in detail"}</p>
            <p>{" ->"}</p>
          </div>
        </Link>
      </div>

      <div
        className="px-6 lg:px-12 lg:mt-32 flex flex-col justify-center"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <SectionHeader
          title={"Some of the best projects by me!"}
          subtitle={"FEATURED PROJECTS"}
        />
        <ProjectList projectRes={props.projects} isLandingPage={true} />
        <Link href="/projects" className="cursor-pointer">
          <div className="cursor-pointer flex self-center mt-6 border-b hover:border-primary-black duration-200 pb-2 text-md space-x-2">
            <p>{"Discover all of my projects here!"}</p>
            <p>{" ->"}</p>
          </div>
        </Link>
      </div>

      <div className="lg:flex flex-row-reverse justify-between items-center lg:px-12 lg:mt-36">
        <div className="px-6 lg:hidden">
          <SectionHeader title={"About Me"} />
        </div>
        <div className="pt-10 lg:flex-[3.5]">
          <Image
            src={"https:" + props.aboutMe[0].fields.avatar.fields.file.url}
            alt="about_me_avatar"
            width={screenWidth}
            height={screenWidth * 0.9}
          />
        </div>
        <span className="hidden lg:block flex-[1]"></span>
        <div className="px-8 lg:px-0 pt-6 leading-loose text-lg relative inline-block space-y-1 lg:space-y-0 lg:flex lg:flex-[6] flex-col items-endtems-start">
          <div className="hidden lg:block lg:mb-4">
            <h2 className="text-[2.5rem] font-bold pt-3 leading-tight">
              About Me
            </h2>
          </div>
          <div>
            {props.aboutMe[0].fields.aboutMe.content
              .slice(0, 2)
              .map((item, index) => {
                return (
                  <div key={index} className="pb-2 prose-md lg:prose-lg">
                    {documentToReactComponents(item)}
                  </div>
                );
              })}
          </div>
          <div className="lg:hidden w-full h-64 absolute left-0 bottom-[2.75px] bg-gradient-to-t from-white z-10" />
          <div className="z-30 hidden lg:block lg:pt-8 lg:w-5/12">
            <MainButton
              content="Read more about me..."
              isInversed={true}
              onClick={() => {
                router.push("/about");
              }}
            />
          </div>
        </div>
        <div className="z-30 px-6 lg:hidden">
          <MainButton
            content="Read more about me..."
            isInversed={true}
            onClick={() => {
              router.push("/about");
            }}
          />
        </div>
      </div>

      <div className="px-6 lg:px-12 lg:mt-40">
        <div className="lg:hidden">
          <SectionHeader title={"But... why me?"} />
        </div>
        <h2 className="hidden lg:block text-[2.5rem] font-bold pt-3 leading-tight">
          But... why me?
        </h2>
        <p className="text-lg pt-2 leading-loose opacity-50 lg:w-[35vw]">
          {
            "As a solo practitioner, I'm always 100% into your project and with my well-documented workflow, every collaboration with your existing team like a breeze."
          }
        </p>
        <PlusPointList plusPointRes={props.plusPoint} />
      </div>

      <div className="px-6 lg:px-12 lg:mt-40">
        <div className="lg:hidden">
          <SectionHeader title={"Don’t just take my words"} />
        </div>
        <h2 className="hidden lg:block text-[2.5rem] font-bold pt-3 leading-tight">
          Don’t just take my words
        </h2>
        <p className="text-lg pt-4 leading-loose opacity-50 lg:w-[35vw]">
          I’m proud that across my freelancing career, I’ve met wonderful people
          to work with and it’s a relieve that they absolutely love the final
          output of my projects!
        </p>
        <ReviewList reviewRes={props.reviews} />
      </div>

      <div className="px-6 lg:px-12 mb-24 lg:mt-36 lg:w-8/12 flex flex-col justify-start items-start">
        <div className="pt-[96px] lg:w-full lg:flex lg:flex-col items-start">
          <h4 className="uppercase tracking-wider text-primary-black opacity-30 text-xs font-semibold">
            LIKE WHAT YOU SEE?
          </h4>
          <h2 className="text-[2.5rem] font-bold pt-3 leading-tight">
            {"Let's work together!"}
          </h2>
        </div>
        <p className="text-lg pt-4 leading-loose mb-8">
          If you got anything in your mind about a brilliant app idea, don’t
          hesitate to contact me down below! But, it will be great too if you
          just want say hello, you know?
        </p>
        <div className="w-full lg:w-4/12">
          <MainButton
            content={"Get in touch!"}
            onClick={() => {
              showModal();
            }}
          />
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

  const servicesRes = await client.getEntries({
    content_type: "services",
  });

  const projectRes = await client.getEntries({
    content_type: "project",
  });

  const aboutMeRes = await client.getEntries({
    content_type: "aboutMe",
  });

  const reviewsRes = await client.getEntries({
    content_type: "reviews",
  });

  const plusPointRes = await client.getEntries({
    content_type: "plusPoint",
  });

  const socialLinkRes = await client.getEntries({
    content_type: "socialLink",
  });

  const resumeLinkRes = await client.getEntry("6l995xa4s7NkEjERM3J4dH");

  return {
    props: {
      projects: projectRes.items,
      services: servicesRes.items,
      aboutMe: aboutMeRes.items,
      reviews: reviewsRes.items,
      plusPoint: plusPointRes.items,
      socialLink: socialLinkRes.items,
      resumeLink: resumeLinkRes
    },
    revalidate: 60 * 5,
  };
}
