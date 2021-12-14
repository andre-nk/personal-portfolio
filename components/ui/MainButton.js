export default function MainButton({ content, isInversed, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[56px] lg:h-[52px] rounded-lg font-medium xl:whitespace-nowrap text-lg lg:px-8 inline-block duration-200 ${
        isInversed
          ? "bg-white text-primary-black hover:bg-hover-white border-[2.5px] border-primary-black"
          : "bg-primary-black text-white"
      }`}
    >
      {content}
    </button>
  );
}
