export default function SearchBar({ search, setSearch }) {
  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search anything..."
      value={search}
      className="mt-6 px-4 py-[14px] outline-none text-lg rounded-lg border focus:border-2 border-[#E8E6E2] focus:border-primary-black w-full shadow-[#D0D0D0] drop-shadow-sm"
    />
  );
}
