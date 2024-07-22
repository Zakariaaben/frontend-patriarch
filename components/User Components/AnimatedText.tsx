import { MotionDiv, MotionSpan } from "./motionComponents";

export default function AnimatedText({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MotionDiv
        style={{ display: "inline-block", fontSize: "2rem" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {text.split("").map((char, index) => (
          <MotionSpan
            key={index}
            className={className}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + (delay || 0) }}
          >
            {char}
          </MotionSpan>
        ))}
      </MotionDiv>
    </div>
  );
}
