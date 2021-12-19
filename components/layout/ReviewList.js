import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PlusPointCard from "../ui/PlusPointCard";

export default function ReviewList({ reviewRes }) {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {reviewRes.map((item) => {
        const { name, review } = item.fields;
        return (
          <PlusPointCard
            key={item.sys.id}
            title={name}
            caption={documentToReactComponents(review)}
          />
        );
      })}
    </div>
  );
}
