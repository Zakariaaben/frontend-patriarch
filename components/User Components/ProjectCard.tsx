import { Lexend, Open_Sans } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { MotionDiv } from "./motionComponents";
const os = Open_Sans({ subsets: ["latin"] });
const lex = Lexend({ weight: "400", subsets: ["latin"] });
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
          quality={100}
          loader={({ src }) => src + `?q=1`}
          src={"/api/uploads/" + Project.images[0]}
          width={1920}
          height={1080}
          className="aspect-video w-full rounded-sm object-cover opacity-0 transition-opacity duration-500 ease-in-out "
          onLoad={(image) => image.currentTarget.classList.remove("opacity-0")} // Remove the opacity-0 class after the image has loaded
          priority
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
