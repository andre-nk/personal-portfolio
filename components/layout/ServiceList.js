import ServiceCard from "../ui/ServiceCard";

export default function ServiceList() {
  return (
    <div className="flex-col space-y-8 pt-10">
      <ServiceCard
        title={"Web Development"}
        caption={
          "Top notch site performance and SEO, all built starting from the back-end, and front-end"
        }
      />
      <ServiceCard
        title={"Mobile Development"}
        caption={
          "Production grade mobile apps that will convey information and features smoothly to your users"
        }
      />
      <ServiceCard
        title={"UI/UX Design"}
        caption={
          "Layout design for digital platforms that crafted using logical thinking and personal touch for a usable final design"
        }
      />
      <ServiceCard
        title={"Graphic Design"}
        caption={
          "Design for your digital marketing and printables that will be crafted carefully to bring a beautiful design output"
        }
      />
    </div>
  );
}
