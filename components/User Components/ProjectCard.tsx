import Image from "next/image";
import { MotionDiv } from "./motionComponents";

export const ProjectCard = ({
  Project,
  index,
  handleShownId,
  currentProject,
}: {
  Project: Project;
  index: number;
  handleShownId: (Project: Project | null) => void;
  shownref: React.RefObject<HTMLDivElement>;
  currentProject: Project | null;
}) => {
  return (
    <MotionDiv
      className={
        " rounded-sm border-gray-700  bg-customcolors-secondary-950 cursor-pointer  "
      }
      onClick={() => handleShownId(Project)}
      animate={{ opacity: [0, 1], scale: currentProject === Project ? 1.2 : 1 }}
      transition={{
        delay: index * 0.3,
        duration: 1,
        scale: {
          duration: 0.4,
        },
      }}
      initial={{ opacity: 0 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="w-full  p-2">
        <Image
          alt=""
          quality={75}
          src={"/api/uploads/" + Project.images[0]}
          width={400}
          height={400}
          className="aspect-video w-full rounded-sm object-cover  transition-opacity duration-500 ease-in-out "
        />
      </div>
      <div className=" w-full px-6 py-4 ">
        <h5 className="text-xl font-bold tracking-tight text-customcolors-secondary-300">
          {Project.name}
        </h5>

        <p className="text-heavy-metal-950 text-base font-semibold ">
          {Project.category.name}
        </p>
        <p className=" tracking-widest">
          {new Date(Project.date).getFullYear()}
        </p>
      </div>
    </MotionDiv>
  );
};
