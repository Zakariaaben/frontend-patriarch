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
      <div className="w-full  p-4  justify-center items-center grid gap-x-8 gap-y-8 grid-cols-1 xl:grid-cols-3 md:grid-cols-2  ">
        <Projects projects={projectsData} />
      </div>
    </>
  );
};
