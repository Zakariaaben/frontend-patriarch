"use client";

import { AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Carousel } from "./carousel";
import { MotionDiv } from "./motionComponents";
import { ProjectCard } from "./ProjectCard";
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
            <div className="   overflow-x-hidden h-[100dvh]  w-[min(800px,100vw)]  bg-[#344966]  ">
              <ScrollArea className="h-[100dvh]  w-fit " ref={shownref}>
                <div
                  className="absolute group bg-slate-300 bg-opacity-75  rounded-full flex items-center justify-center p-1 top-6 cursor-pointer left-6 z-30"
                  onClick={() => {
                    setProjectShown(null);
                  }}
                >
                  <ChevronLeft
                    className=" stroke-[#0D1821]    drop-shadow-sm group-hover:scale-90   transition shadow-white     font-bold"
                    size={24}
                  />
                </div>
                <div className="w-[min(800px,100vw)] p-4 bg-[#F0F4EF] ">
                  <Carousel
                    IMAGES={projectShown.images.map((image, index) => {
                      return { id: index, imageSrc: "/api/uploads/" + image };
                    })}
                  />
                </div>
                <div
                  className={
                    "min-w-full  flex flex-col justify-start  text-[#F0F4EF]   text-lg p-6 overflow-auto "
                  }
                >
                  <p className="text-2xl font-semibold underline-offset-4 underline">
                    {projectShown.name}
                  </p>
                  <p className="text-lg mb-4">{projectShown.category.name}</p>

                  <div
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
