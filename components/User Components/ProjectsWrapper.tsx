import Projects from "./Projects";

export const ProjectsWrapper = async ({
  categoryId,
}: {
  categoryId?: string;
}) => {
  const projects = await fetch(
    process.env.API_url +
      "/projects" +
      (categoryId ? "?categoryId=" + categoryId : ""),
    { cache: "no-store" }
  );

  const projectsData: Project[] = await projects.json();

  return (
    <>
      <div className="w-full  p-4 mb-24 grid gap-x-12 gap-y-8  grid-cols-1 lg:grid-cols-2  justify-items-center justify-center ">
        <Projects projects={projectsData} />
      </div>
    </>
  );
};
