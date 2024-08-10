import { LoadProjectsPage } from "./LoadProjectsPage";
import { Animatepresence, MotionDiv } from "./motionComponents";

const ProjectsWrapper = async ({ categoryId }: { categoryId?: string }) => {
  const projects = await fetch(
    "https://api.patriarchplus.com/projects?page=1" +
      (categoryId ? "&categoryId=" + categoryId : ""),
    { cache: "no-store" }
  );

  const projectsData: Project[] = await projects.json();

  return (
    <>
      <Animatepresence>
        <MotionDiv
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 } }}
          key={categoryId}
          className="w-full  p-4  justify-center items-center grid gap-x-8 gap-y-8 grid-cols-1 xl:grid-cols-3 md:grid-cols-2  "
        >
          <LoadProjectsPage categoryId={categoryId} firstPage={projectsData} />
        </MotionDiv>
      </Animatepresence>
    </>
  );
};
export default ProjectsWrapper;
