import { MotionDiv } from "@/components/User Components/motionComponents";
import { Myspinner } from "@/components/User Components/spinner";

const Loading = () => {
  return (
    <div className="fixed h-[100dvh] w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center justify-center h-screen">
        <MotionDiv
          animate={{ opacity: [0, 1] }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Myspinner color="black" />
        </MotionDiv>
      </div>
    </div>
  );
};
export default Loading;
