import Link from "next/link";

export default function ServiceCard({ slug, imageURL, title, caption }) {
  return (
    <Link href="/services">
      <div className="h-auto w-full space-y-4 hover:bg-hover-white duration-200 rounded-lg">
        {/* IMAGE URL HERE */}
        <div className="w-full bg-gray-300 rounded-lg h-[11.25rem]" />
        <div className="space-y-1.5 px-4 pb-5">
          <h2 className="text-[22px] font-semibold">{title}</h2>
          <div className="text-[14px] text-primary-black opacity-70">{caption}</div>
        </div>
      </div>
    </Link>
  );
}
