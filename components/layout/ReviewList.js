import PlusPointCard from "../ui/PlusPointCard";

export default function ReviewList() {
  return (
    <div className="mt-8 flex flex-col space-y-10">
      <PlusPointCard
        title={"Douglas Simao"}
        caption={
          "Once again, always delivering above the expectations! Great worker and very professional! "
        }
      />
      <PlusPointCard
        title={"5 stars average ratings"}
        caption={
          "Good communication. Fast replies. Accommodating to requests."
        }
      />
    </div>
  );
}
