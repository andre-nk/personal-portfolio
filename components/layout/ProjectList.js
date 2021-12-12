import ProjectCard from "../ui/ProjectCard";

export default function ProjectList() {
  return (
    <div className="flex-col space-y-8 pt-10">
      <ProjectCard
        slug={"handles"}
        title={"Handles"}
        caption={
          "Handles mobile app is a Whatsapp-like messaging apps that aimed for business purposes"
        }
        type={"Freelance"}
        startDate={"2021-05-07T13:58:10.104Z"}
        endDate={"2021-07-07T13:58:10.104Z"}
      />
      <ProjectCard
        slug={"my-physical-therapist"}
        title={"MyPhysicalTherapist"}
        caption={
          "MyPhysicalTherapist is a adaptive fitness training app that will aid a live fitness class even more"
        }
        type={"Freelance"}
        startDate={"2021-03-07T13:58:10.104Z"}
        endDate={"2021-04-07T13:58:10.104Z"}
      />
      <ProjectCard
        slug={"get-heroes"}
        title={"GetHeroes"}
        caption={
          "GetHeroes is a South America-based mobile app for hiring a plumbering practitioner"
        }
        type={"Freelance"}
        startDate={"2020-08-07T13:58:10.104Z"}
        endDate={"2020-09-07T13:58:10.104Z"}
      />
    </div>
  );
}
