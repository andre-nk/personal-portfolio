import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ServiceCard from "../ui/SkillCard";

export default function ServiceList(props) {

  const serviceRes = props.serviceRes.reverse();

  return (
    <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-4 pt-10">
      {serviceRes.map((service) => {
        const { title, caption, thumbnail } = service.fields;
        return (
          <ServiceCard
            data-aos="fade-right"
            key={service.sys.id}
            title={title}
            image={thumbnail.fields.file}
            caption={documentToReactComponents(caption)}
          />
        );
      })}
    </div>
  );
}
