import { motion } from "framer-motion";

export default function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const textsplit = text.split(" ");
  return (
    <>
      {textsplit.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={className}
          transition={{
            duration: 2,
            delay: i / 6,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
}
