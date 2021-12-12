import Link from "next/link";
import { useRouter } from "next/router";

export default function DrawerLinks({ setIsOpen, title, pathname }) {
  const router = useRouter();

  return (
    <Link href={pathname}>
      <div className="flex space-x-4 items-center py-4">
        {router.pathname === pathname && (
          <div className="h-[5px] w-[5px] bg-[#E06259] rounded-full"></div>
        )}
        <p
          className={`${
            router.pathname === pathname ? "font-semibold" : "font-regular"
          } text-lg`}
          onClick={() => setIsOpen(false)}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
