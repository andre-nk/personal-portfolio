import Image from "next/image";
import { useState, useEffect } from "react";

import SectionHeader from "../../components/ui/SectionHeader";

export default function AboutPage() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.screen.width);
    }
  }, []);

  return (
    <div>
      <div
        className="px-6"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <h2 className="text-[2.5rem] font-bold pt-3 leading-tight">{"About Me"}</h2>
      </div>
      <div
        className="pt-10"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <Image
          src="/images/about_me_img.png"
          width={screenWidth}
          height={screenWidth * 0.9}
        />
      </div>
      <div className="px-8 pt-6 leading-loose text-lg relative inline-block space-y-1">
        <p>
          Hi again! My name is Andre. I'm an Indonesian full-stack web
          developer, mobile developer, and UI/UX enthusiast. Today, I experience
          myself as a college student in Jakarta and a part-time freelancer.{" "}
        </p>
        <p>
          I started coding at the age of twelve, and I haven't stopped since! I
          adore the capabilities of any form of technology that I've ever met,
          especially the computer. Right about two years ago, I started my
          freelancing career with only some skills on my belt and when I'm still
          a high schooler! From that point, I started learning full-stack web
          development and mobile development using Flutter and Swift while
          gradually gaining more and more client connections.
        </p>
      </div>
    </div>
  );
}
