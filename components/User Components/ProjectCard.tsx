import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { MotionDiv } from "./motionComponents";
const os = Open_Sans({ subsets: ["latin"] });
export const ProjectCard = ({
  Project,
  index,
  handleShownId,
  shownref,
  currentProject,
}: {
  Project: Project;
  index: number;
  handleShownId: (Project: Project | null) => void;
  shownref: React.RefObject<HTMLDivElement>;
  currentProject: Project | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLElement) &&
        shownref.current &&
        !shownref.current.contains(event.target as HTMLElement)
      ) {
        handleShownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }),
    [ref];

  return (
    <MotionDiv
      ref={ref}
      className={
        "w-[500px]  rounded-sm border-gray-700  cursor-pointer shadow-[2px_2px_29px_11px_#e0e0e2,0px_3px_8px_0px_#00000024] " +
        os.className
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
      <div className="w-full">
        <Image
          alt=""
          src={"/api/uploads/" + Project.images[0]}
          width={1920}
          height={1080}
          className="aspect-video w-full rounded-t-sm object-cover"
        />
      </div>
      <div className=" w-full px-6 py-4 ">
        <h5 className="text-xl font-bold tracking-tight text-heavy-metal-900 mb-1">
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
