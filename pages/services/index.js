import DetailedServiceCard from "../../components/ui/DetailedServiceCard";

export default function ServicesPage() {
  return (
    <div className="px-6 lg:px-12">
      <div className="lg:mt-12 lg:mb-16">
        <h4 className="uppercase text-primary-black opacity-30 text-xs font-semibold">
          MY SERVICES
        </h4>
        <h2 className="text-[2.5rem] font-bold pt-2 leading-tight">
          What do I do?
        </h2>
      </div>
      <div className="mt-8 lg:mb-16 flex flex-col space-y-10 lg:grid lg:grid-cols-2 lg:space-y-0 gap-20">
        <DetailedServiceCard
          title={"Web Development"}
          description={
            "I can deliver production-grade web apps, all from front-end and back-end side including its cloud storage, hosting and source code! Here’s some technology I’m confident working on:"
          }
          techstack={["react"]}
        />
        <DetailedServiceCard
          title={"Web Development"}
          description={
            "I can deliver production-grade web apps, all from front-end and back-end side including its cloud storage, hosting and source code! Here’s some technology I’m confident working on:"
          }
          techstack={["react"]}
        />
        <DetailedServiceCard
          title={"Web Development"}
          description={
            "I can deliver production-grade web apps, all from front-end and back-end side including its cloud storage, hosting and source code! Here’s some technology I’m confident working on:"
          }
          techstack={["react"]}
        />
        <DetailedServiceCard
          title={"Web Development"}
          description={
            "I can deliver production-grade web apps, all from front-end and back-end side including its cloud storage, hosting and source code! Here’s some technology I’m confident working on:"
          }
          techstack={["react"]}
        />
      </div>
    </div>
  );
}
