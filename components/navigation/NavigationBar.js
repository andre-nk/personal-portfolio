import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import MainButton from "../ui/MainButton";
import ModalContext from "../../context/ModalContext";

export default function NavigationBar({ setIsOpen, resumeLink }) {
  const { showModal } = useContext(ModalContext);
  return (
    <nav className="w-full h-[8vh] bg-white backdrop-filter backdrop-blur-sm bg-opacity-90 px-6 lg:px-12 py-[40px] flex justify-between items-center">
      <Link href="/">
        <a className="lg:hidden pt-1">
          <Image src="/images/logo.png" alt="logo" height={50} width={50} />
        </a>
      </Link>
      <Link href="/">
        <a className="hidden lg:block pt-1">
          <Image
            src="/images/logo_wide_lg.png"
            alt="logo_wide"
            height={50}
            width={150}
          />
        </a>
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden hover:bg-hover-white duration-200 rounded-lg px-[24px] py-[7.25px] border-[2.5px] border-primary-black font-medium text-primary-black text-[16px]"
      >
        Menu
      </button>
      <div className="hidden lg:flex items-center space-x-12">
        <Link href="https://andrenk.hashnode.dev/">
          <div className="flex space-x-3 justify-center items-center cursor-pointer">
            <Image src="/images/hashnode_logo.png" height={20} width={20} />
            <a className="text-lg">Articles</a>
          </div>
        </Link>
        <Link href="/projects">
          <a className="text-lg">Projects</a>
        </Link>
        <Link href="/services">
          <a className="text-lg">Services</a>
        </Link>
        <Link href="/about">
          <a className="text-lg">About Me</a>
        </Link>
        <div className="flex space-x-6">
          <MainButton
            content={"Resume"}
            isInversed={true}
            onClick={() => {
              if (resumeLink) {
                window.open(resumeLink.fields.link, "_blank").focus();
              }
            }}
          />
          <MainButton
            content={"Contact Me"}
            onClick={() => {
              setIsOpen(false);
              showModal();
            }}
          />
        </div>
      </div>
    </nav>
  );
}
