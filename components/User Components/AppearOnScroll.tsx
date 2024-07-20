"use client";
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { MotionDiv } from "./motionComponents";

const AppearOnScroll = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  return (
    <MotionDiv
      ref={ref}
      variants={variants}
      initial="hidden"
      transition={{ duration: 1 }}
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </MotionDiv>
  );
};
export default AppearOnScroll;
