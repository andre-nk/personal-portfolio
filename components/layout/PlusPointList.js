import PlusPointCard from "../ui/PlusPointCard";

export default function PlusPointList() {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col space-y-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0 gap-12">
      <PlusPointCard
        title={"100% into your project"}
        caption={
          "For context, typical agency or some freelancer can work on multiple projects alongside with yours!"
        }
      />
      <PlusPointCard
        title={"5 stars average ratings"}
        caption={
          "I always try to maintain professionalism on proposing, developing and handing over project as well."
        }
      />
      <PlusPointCard
        title={"10 minutes response time"}
        caption={
          "I always try to accomodate client needs across time zones especially at emergency"
        }
      />
      <PlusPointCard
        title={"High availability"}
        caption={
          "I'll do my best to fullfill the client project and its additional needs / features"
        }
      />
      <PlusPointCard
        title={"Well-documented workflow"}
        caption={
          "During the development, I create a proper documentation for a smooth handover"
        }
      />
      <PlusPointCard
        title={"Language fluency"}
        caption={
          "Communication is critical and fluency in both formal and technical language is essential."
        }
      />
    </div>
  );
}
