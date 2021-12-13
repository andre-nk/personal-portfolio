export default function MainButton({ content, isInversed, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[56px] rounded-lg font-semibold text-[18px] ${
        isInversed
          ? "bg-white text-primary-black hover:bg-hover-white border-[2.5px] border-primary-black"
          : "bg-primary-black text-white"
      }`}
    >
      {content}
    </button>
  );
}
