import { MotionDiv } from "./motionComponents";

export const CardSkeleton = () => {
  return (
    <MotionDiv
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full  p-4  justify-center items-center grid gap-x-8 gap-y-8 grid-cols-1 xl:grid-cols-3 md:grid-cols-2  "
    >
      <MotionDiv
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{
          delay: 0,
          repeat: Infinity,
          duration: 1,
          repeatType: "loop",
        }}
        className="w-full h-72 bg-slate-800 rounded-lg"
        initial={{ opacity: 0.2 }}
      ></MotionDiv>
      <MotionDiv
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{
          delay: 0.5,
          repeat: Infinity,
          duration: 1,
          repeatType: "loop",
        }}
        className="w-full h-72 bg-slate-800 rounded-lg"
      ></MotionDiv>
      <MotionDiv
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{
          delay: 0.75,
          repeat: Infinity,
          duration: 1,
          repeatType: "loop",
        }}
        className="w-full h-72 bg-slate-800 rounded-lg"
      ></MotionDiv>
    </MotionDiv>
  );
};
