import ServiceCard from "../ui/ServiceCard";

export default function ServiceList() {
  return (
    <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-4 pt-10">
      <ServiceCard
        data-aos="fade-right"
        title={"Web Development"}
        caption={
          "Top notch site performance and SEO, all built starting from the back-end, and front-end"
        }
      />
      <ServiceCard
        data-aos="fade-right"
        title={"Mobile Development"}
        caption={
          "Production grade mobile apps that will convey information and features smoothly to your users"
        }
      />
      <ServiceCard
        data-aos="fade-right"
        title={"UI/UX Design"}
        caption={
          "Layout design for digital platforms that crafted using logical thinking and personal touch for a usable final design"
        }
      />
      <ServiceCard
        data-aos="fade-right"
        title={"Graphic Design"}
        caption={
          "Design for your digital marketing and printables that will be crafted carefully to bring a beautiful design output"
        }
      />
    </div>
  );
}
