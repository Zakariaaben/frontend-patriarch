"use client";

import { MotionDiv } from "@/components/User Components/motionComponents";
import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center h-screen">
        <MotionDiv
          animate={{ opacity: [0, 1] }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <GridLoader color="black" />
        </MotionDiv>
      </div>
    </div>
  );
};
export default Loading;
