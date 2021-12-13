import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Drawer from "../navigation/Drawer";
import NavigationBar from "../navigation/NavigationBar";

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="sticky top-0 z-30 mt-4">
        <NavigationBar setIsOpen={setIsOpen} />
      </div>
      <div className="pb-8 pt-4">{props.children}</div>
      <div className="w-full h-auto py-12 flex flex-col justify-center items-center bg-primary-black">
        <div className="space-y-10 flex flex-col justify-center items-center">
          <Link href="/projects">
            <p className="text-white text-lg">Projects</p>
          </Link>
          <Link href="/services">
            <p className="text-white text-lg">Services</p>
          </Link>
          <Link href="/about">
            <p className="text-white text-lg">About Me</p>
          </Link>
          <p className="text-white text-lg">My Resume</p>
          <p className="text-white text-lg">Contact Me</p>
        </div>
        <div className="mt-16">
          <Image src="/images/logo_wide.png" width={180} height={42} />
        </div>
        <p className="text-white pl-2 mt-3">Made with  ❤️  from Indonesia</p>
        <p className="text-white pl-2 mt-3">©2021</p>
      </div>
    </div>
  );
}
