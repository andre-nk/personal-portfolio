import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PlusPointCard from "../ui/PlusPointCard";

export default function PlusPointList({ plusPointRes }) {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0 gap-12">
      {plusPointRes.map((item) => {
        const { title, description } = item.fields;
        return (
          <PlusPointCard
            title={title}
            key={item.sys.id}
            caption={documentToReactComponents(description)}
          />
        );
      })}
    </div>
  );
}
