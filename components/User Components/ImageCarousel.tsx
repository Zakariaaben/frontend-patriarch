"use client";
import { AnimatePresence, motion, useDomEvent } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const transition = {
  type: "ease",
};

export const ImageCarousel = ({ image }: { image: string }) => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
    <>
      <div className={`${isOpen ? "z-[9999]" : ""}`}>
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={transition}
          className="fixed inset-0 pointer-events-none opacity-0 bg-black bg-opacity-90 w-screen h-screen "
          onClick={() => setOpen(false)}
        ></motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              animate={{ opacity: isOpen ? 1 : 0 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className={` top-0 left-0 right-0 bottom-0 w-[1200px] aspect-video m-auto static z-[100]`}
              onClick={() => setOpen(!isOpen)}
            >
              <Image alt="" src={image} fill />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
