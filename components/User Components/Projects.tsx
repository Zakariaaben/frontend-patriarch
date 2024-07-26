"use client";

import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ProjectCard } from "./ProjectCard";
import { MotionDiv } from "./motionComponents";

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
      <AnimatePresence>
        {projectShown && (
          <MotionDiv
            className="fixed w-full h-full flex items-center justify-center flex-col bg-black top-0 left-0 z-[100]  bg-opacity-30 sm:p-12"
            animate={{ opacity: [0, 1] }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <ScrollArea
              className="shadow-[2px_2px_29px_11px_#e0e0e2,0px_3px_8px_0px_#00000024] rounded-lg  min-h-fit overflow-y-auto max-w-[800px] w-[99vw] bg-white"
              ref={shownref}
            >
              <X
                className="absolute top-4 left-4 cursor-pointer "
                size={24}
                onClick={() => {
                  setProjectShown(null);
                }}
              />
              <div className="">
                <Image
                  alt=""
                  src={"/api/uploads/" + projectShown.images[0]}
                  width={1920}
                  height={1080}
                  className="aspect-video w-[99vw] max-w-[800px]   object-cover"
                />
              </div>
              <div className={`w-full px-4 py-2 pr-6  text-xl`}>
                <p className="">{projectShown.name}</p>
                <p>{projectShown.category.name}</p>

                <div
                  dangerouslySetInnerHTML={{
                    __html: projectShown.description,
                  }}
                />
              </div>

              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
