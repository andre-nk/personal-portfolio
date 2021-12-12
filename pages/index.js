import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import MainButton from "../components/MainButton";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.screen.width);
    }
  }, []);

  return (
    <div className="text-primary-black">
      <Head>
        <title>Andreas Notokusumo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6">
        <h2 className="text-[48px] font-bold pt-[24px]">Hi, I'm Andre!</h2>
        <p className="text-[20px] pt-[16px]">
          A fullstack web and mobile developer and a UI/UX enthusiast based in
          Indonesia. I craft production-grade website and mobile app that your
          users will love!
        </p>
        <div className="pt-[40px]">
          <MainButton content="Let's talk" />
        </div>
      </div>
      <div className="pt-16">
        <Image
          src="/images/hero_img.png"
          width={screenWidth}
          height={screenWidth * 0.9}
        />
      </div>
    </div>
  );
}
