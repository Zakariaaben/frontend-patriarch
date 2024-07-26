"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MotionDiv } from "./motionComponents";

const InfoPart = ({
  content,
  index,
}: {
  content: ContentInterface;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: index * 0.2 },
    },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <MotionDiv
      className="relative"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div>
        <h3 className="text-2xl font-semibold ">{content.title}</h3>
        <span className="text-secondarycolor-600">{content.step}</span>
      </div>
      <p className="p-2 font-medium text-[16px] tracking-tight  text-justify">
        {content.content}
      </p>
    </MotionDiv>
  );
};
export default InfoPart;
