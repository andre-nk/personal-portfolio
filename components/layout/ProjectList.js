import ProjectCard from "../ui/ProjectCard";

export default function ProjectList({ projectRes, isLandingPage }) {

  const featuredProjects = projectRes.filter(project => project.fields.isFeaturedProject);
  const otherProjects = projectRes.filter(project => !project.fields.isFeaturedProject);

  return (
    <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 md:space-y-0 pt-10">
      {featuredProjects.map((project) => {
        const { title, slug, description, affiliation, startDate, endDate, techstack, thumbnail } = project.fields;
        return (
          <ProjectCard
            key={project.sys.id}
            slug={slug}
            title={title}
            image={thumbnail.fields.file}
            caption={description.content[0].content[0].value.replace(/^(.{117}[^\s]*).*/, "$1") + "..."}
            type={affiliation}
            startDate={startDate}
            endDate={endDate}
            techstack={techstack}
          />
        );
      })}
      {
        !isLandingPage && (
          otherProjects.map((project) => {
            const { title, slug, description, affiliation, startDate, endDate, techstack, thumbnail } = project.fields;
            return (
              <ProjectCard
                key={project.sys.id}
                slug={slug}
                title={title}
                image={thumbnail.fields.file}
                caption={description.content[0].content[0].value.replace(/^(.{117}[^\s]*).*/, "$1") + "..."}
                type={affiliation}
                startDate={startDate}
                endDate={endDate}
                techstack={techstack}
              />
            );
          })
        )
      }
    </div>
  );
}
