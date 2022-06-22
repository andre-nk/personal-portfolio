import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import ModalContext from "../../context/ModalContext";

export default function Footer() {
  const { showModal } = useContext(ModalContext);

  return (
    <div className="w-full h-auto py-12 flex flex-col justify-center items-center bg-primary-black lg:justify-between lg:flex-row-reverse lg:px-12">
      <div className="space-y-10 flex flex-col justify-center items-center lg:items-end">
        <Link href="/projects" passHref>
          <p className="text-white text-lg cursor-pointer">Projects</p>
        </Link>
        <Link href="/skills" passHref>
          <p className="text-white text-lg cursor-pointer">Skills</p>
        </Link>
        <Link href="/about" passHref>
          <p className="text-white text-lg cursor-pointer">About Me</p>
        </Link>
        <p className="text-white text-lg cursor-pointer">My Resume</p>
        <button onClick={showModal} className="text-white text-lg">
          Contact Me
        </button>
      </div>
      <div className="flex flex-col lg:items-start items-center">
        <div className="mt-16">
          <Image src="/images/logo_wide_white.png" alt="logo_wide" width={125} height={42} />
        </div>
        <p className="text-white pl-0 mt-3">Made with ❤️ from Indonesia</p>
        <p className="text-white pl-0 mt-3">©2022</p>
      </div>
    </div>
  );
}
