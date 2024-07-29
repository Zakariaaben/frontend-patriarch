"use client";
import { AnimatePresence, motion, PanInfo, wrap } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export const Carousel = ({
  IMAGES,
}: {
  IMAGES: { id: number; imageSrc: string }[];
}) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const constraintRef = useRef(null);

  const activeImageIndex = wrap(0, IMAGES.length, currentIndex);

  const swipeToImage = (swipeDirection: number) => {
    setCurrentIndex([currentIndex + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    } else {
      changeDirection = 0;
    }
    setCurrentIndex([imageId, changeDirection]);
  };

  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex flex-col items-center my-6 w-full  ">
          <div
            className="relative overflow-hidden w-[calc(100%-1.5rem)] aspect-video  "
            ref={constraintRef}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={constraintRef}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="absolute   will-change-transform hover:cursor-zoom-in h-full w-full  "
              >
                <Image
                  src={IMAGES[activeImageIndex].imageSrc}
                  alt="Carousel Image"
                  width={1920}
                  height={1080}
                  onClick={() =>
                    setZoomedImage(IMAGES[activeImageIndex].imageSrc)
                  }
                  className="w-full max-h-[calc(100dvh-3rem)]   object-cover  opacity-0 transition-opacity duration-500 ease-in-out"
                  onLoad={(image) =>
                    image.currentTarget.classList.remove("opacity-0")
                  } // Remove the opacity-0 class after the image has loaded
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex mt-3">
            <button
              onClick={() => swipeToImage(-1)}
              className="mx-2 px-3 py-2 bg-[#1f1f1f] bg-clip-text  transform skew-y-[-5deg] rotate-[5deg] transition-transform duration-75 ease-out hover:cursor-pointer active:scale-90"
            >
              <ChevronLeft size={32} color="black" />
            </button>
            <button
              onClick={() => swipeToImage(1)}
              className="mx-2 px-3 py-2 bg-[#1f1f1f] bg-clip-text  transform skew-y-[-5deg] rotate-[5deg] transition-transform duration-75 ease-out hover:cursor-pointer active:scale-90"
            >
              <ChevronRight size={32} color="black" />
            </button>
          </div>
        </div>

        <ScrollArea className=" flex justify-center w-full overflow-x-auto">
          <div className="relative max-w-[calc(100vw-3rem)] w-[800px]  overflow-x-auto flex justify-evenly gap-1">
            {IMAGES.map((image) => (
              <div
                key={image.id}
                onClick={() => skipToImage(image.id)}
                className="relative aspect-video max-sm:min-h-[90px] max-sm:max-h-[90px] sm:h-[120px] cursor-pointer"
              >
                <Image
                  src={image.imageSrc}
                  alt="Thumbnail"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out"
                  onLoad={(image) =>
                    image.currentTarget.classList.remove("opacity-0")
                  } // Remove the opacity-0 class after the image has loaded
                />
                <div
                  className={`absolute inset-0 bg-[#1f1f1f] bg-opacity-70  transform origin-left transition-transform duration-1000 ease-in-out ${
                    image.id === activeImageIndex ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <AnimatePresence>
        {zoomedImage && (
          <>
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 opacity-0 bg-black bg-opacity-80 w-screen h-[100dvh] flex justify-center items-center z-[100] "
              onClick={() => setZoomedImage(null)}
            >
              <Image
                alt=""
                src={zoomedImage}
                width={1920}
                height={1080}
                className="aspect-video  h-full hover:cursor-zoom-out object-contain"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
