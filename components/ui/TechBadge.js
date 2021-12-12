export default function TechBadge({ iconURL, caption }) {
  return (
    <div className="w-[40px] h-[40px] border border-gray-400 bg-white rounded-full flex items-center justify-center">
      {caption}
    </div>
  );
}
