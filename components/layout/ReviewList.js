import PlusPointCard from "../ui/PlusPointCard";

export default function ReviewList() {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      <PlusPointCard
        title={"Douglas Simao"}
        caption={
          "Once again, always delivering above the expectations! Great worker and very professional! "
        }
      />
      <PlusPointCard
        title={"Alexander Leveriza"}
        caption={
          "Good communication. Fast replies. Accommodating to requests."
        }
      />
    </div>
  );
}
