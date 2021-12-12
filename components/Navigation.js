import Image from "next/image";
import Link from "next/link";

export default function Navigation({ setIsOpen }) {
  return (
    <nav className="w-full h-[8vh] bg-white px-6 py-[48px] flex justify-between items-center">
      <Link href="/">
        <Image src="/images/logo.png" height={55} width={55} />
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className="hover:bg-hover-white duration-200 rounded-lg px-[24px] py-[8px] border-[2.5px] border-primary-black font-medium text-primary-black text-[16px]">
        Menu
      </button>
    </nav>
  );
}
