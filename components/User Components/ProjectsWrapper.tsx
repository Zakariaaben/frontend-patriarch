import { LoadProjectsPage } from "./LoadProjectsPage";
import Projects from "./Projects";
import { Animatepresence, MotionDiv } from "./motionComponents";

export const ProjectsWrapper = async ({
  categoryId,
}: {
  categoryId?: string;
}) => {
  const projects = await fetch(
    process.env.API_URL +
      "/projects?page=1" +
      (categoryId ? "&categoryId=" + categoryId : ""),
    { cache: "no-store" }
  );

  const projectsData: Project[] = await projects.json();

  return (
    <>
      <Animatepresence>
        <MotionDiv
          exit={{ opacity: 0, transition: { duration: 1 } }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="w-full  p-4  justify-center items-center grid gap-x-8 gap-y-8 grid-cols-1 xl:grid-cols-3 md:grid-cols-2  "
        >
          <Projects projects={projectsData} />
          <LoadProjectsPage categoryId={categoryId} />
        </MotionDiv>
      </Animatepresence>
    </>
  );
};
