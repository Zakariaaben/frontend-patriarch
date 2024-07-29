"use client";

import { AnimatePresence } from "framer-motion";
import { Minimize2 } from "lucide-react";
import { Lexend } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Carousel } from "./carousel";
import { MotionDiv } from "./motionComponents";
import { ProjectCard } from "./ProjectCard";
const lex = Lexend({ weight: "400", subsets: ["latin"] });
const Projects = ({ projects }: { projects: Project[] }) => {
  const shownref = useRef<HTMLDivElement>(null);
  const [projectShown, setProjectShown] = useState<Project | null>(null);

  useEffect(() => {
    if (projectShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [projectShown]);

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          Project={project}
          index={index}
          key={index}
          handleShownId={setProjectShown}
          shownref={shownref}
          currentProject={projectShown}
        />
      ))}

      <AnimatePresence>
        {projectShown && (
          <MotionDiv
            className="fixed w-screen h-[100dvh] flex items-center justify-center flex-col bg-black top-0 left-0 z-[100]  bg-opacity-30 "
            animate={{ opacity: [0, 1] }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="   overflow-x-hidden h-[100dvh]  w-[min(800px,100vw)]  bg-[#0464bd]  ">
              <ScrollArea className="h-[100dvh]  w-fit " ref={shownref}>
                <Minimize2
                  className="absolute stroke-[#ABCDB0] rotate-6 drop-shadow-sm hover:scale-90 transition shadow-white top-1 p-2 left-1 cursor-pointer z-30   font-bold"
                  size={45}
                  onClick={() => {
                    setProjectShown(null);
                  }}
                />
                <div className="w-[min(800px,100vw)] p-4 bg-white ">
                  <Carousel
                    IMAGES={projectShown.images.map((image, index) => {
                      return { id: index, imageSrc: "/api/uploads/" + image };
                    })}
                  />
                </div>
                <div
                  className={
                    "min-w-full  flex flex-col justify-start  text-white   text-lg p-6 overflow-auto "
                  }
                >
                  <p className="text-2xl font-semibold underline-offset-4 underline">
                    {projectShown.name}
                  </p>
                  <p className="text-lg mb-4">{projectShown.category.name}</p>
                  <div
                    className={lex.className}
                    dangerouslySetInnerHTML={{
                      __html: projectShown.description,
                    }}
                  />
                </div>
              </ScrollArea>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
