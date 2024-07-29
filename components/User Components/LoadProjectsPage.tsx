"use client";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Projects from "./Projects";

export const LoadProjectsPage = ({
  categoryId,
  firstPage,
}: {
  categoryId?: string;
  firstPage: Project[];
}) => {
  const [pages, setPages] = useState<Project[][]>([firstPage]); // Initialize as an empty array
  const [isFinished, setIsFinished] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref);
  const fetchProjects = async () => {
    const page = pages.length + 1;
    const url = `/api/projects?page=${page}${
      categoryId ? `&categoryId=${categoryId}` : ""
    }`;

    const response = await fetch(url, {
      cache: "no-store",
    });
    const data = await response.json();

    if (data.length === 0) return setIsFinished(true); // If there are no more projects, set isFinished to true
    return setPages((prevPages) => [...prevPages, [...data]]);
  };
  useEffect(() => {
    if (inView) fetchProjects();
  }, [inView, fetchProjects]);

  return (
    <>
      {pages.map((page, index) => (
        <Projects projects={page} key={index} />
      ))}
      {!isFinished ? (
        <div className="col-span-full text-center" ref={ref}>
          Loader
        </div>
      ) : null}
    </>
  );
};
