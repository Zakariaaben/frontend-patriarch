"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { ScrollBar } from "../ui/scroll-area";
import { Carousel } from "./carousel";
import { MotionDiv } from "./motionComponents";
import { ProjectCard } from "./ProjectCard";

const Projects = ({ projects }: { projects: Project[] }) => {
  const shownref = useRef<HTMLDivElement>(null);
  const [projectShown, setProjectShown] = useState<Project | null>(null);

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
      <style>{``}</style>

      <AnimatePresence>
        {projectShown && (
          <MotionDiv
            className="fixed w-full h-full flex items-center justify-center flex-col bg-black top-0 left-0 z-[100]  bg-opacity-30 sm:p-12 p-4"
            animate={{ opacity: [0, 1] }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <ScrollArea
              className="min-h-fit overflow-y-auto w-fit"
              ref={shownref}
            >
              <div className="rounded-lg overflow-y-auto max-w-[800px] w-[calc(100vw-2rem)] bg-white ">
                <X
                  className="absolute top-4 left-4 cursor-pointer "
                  size={24}
                  onClick={() => {
                    setProjectShown(null);
                  }}
                />
                <div className="max-w-full">
                  <Carousel
                    IMAGES={projectShown.images.map((image, index) => {
                      return { id: index, imageSrc: "/api/uploads/" + image };
                    })}
                  />
                </div>
                <div className="max-w-full flex flex-col justify-start py-2 p-2  text-xl">
                  <p className="">{projectShown.name}</p>
                  <p>{projectShown.category.name}</p>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: projectShown.description,
                    }}
                  />
                </div>
              </div>

              <ScrollBar orientation="vertical" className=" " />
            </ScrollArea>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
