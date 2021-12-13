import Image from "next/image";
import Link from "next/link";

export default function NavigationBar({ setIsOpen }) {
  return (
    <nav className="w-full h-[8vh] bg-white backdrop-filter backdrop-blur-sm bg-opacity-90 px-6 py-[40px] flex justify-between items-center">
      <Link href="/">
        <a>
          <Image src="/images/logo.png" height={50} width={50} />
        </a>
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className="hover:bg-hover-white duration-200 rounded-lg px-[24px] py-[7.25px] border-[2.5px] border-primary-black font-medium text-primary-black text-[16px]"
      >
        Menu
      </button>
    </nav>
  );
}
