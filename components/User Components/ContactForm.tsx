"use client";
import { animate, motionValue, useAnimation } from "framer-motion";
import { RotateCwSquareIcon } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import imageProfetionnel from "../../public/DES-11.jpg";
import imageParticulier from "../../public/formhouse.jpeg";
import FormEntreprise from "./FormEntreprise";
import FormParticulier from "./FormParticulier";
import { MotionDiv } from "./motionComponents";

const dm = DM_Sans({ subsets: ["latin"] });
export function ContactForm() {
  const zIndex = motionValue(10);
  const zIndex2 = motionValue(0);

  const controls = useAnimation();
  const controls2 = useAnimation();

  const showParticulier = () => {
    controls.start({
      opacity: 1,
      display: "grid",
    });
    controls2.start({
      opacity: 0,
      display: "none",
    });
    animate(zIndex, 10, { duration: 0.5 });
    animate(zIndex2, 0, { duration: 0.5 });
  };

  const showProfessionnel = () => {
    controls2.start({
      opacity: 1,
      display: "grid",
    });
    controls.start({
      opacity: 0,
      display: "none",
    });
    animate(zIndex2, 10, { duration: 0.5 });
    animate(zIndex, 0, { duration: 0.5 });
  };

  return (
    <MotionDiv
      className={
        "grid grid-cols-1   min-h-screen p-12 max-sm:p-2 relative rounded-lg " +
        dm.className
      }
      animate={{
        opacity: [0, 1],
      }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, once: true }}
    >
      <MotionDiv
        style={{ zIndex }}
        transition={{ duration: 0.5 }}
        animate={controls}
        className="max-w-[min(100%,1100px)] w-full h-fit  min-w-96  grid lg:grid-cols-3 max-lg:grid-rows-3 relative row-start-1 col-start-1 m-auto"
      >
        <Image
          width={1250}
          height={833}
          alt=""
          src={imageParticulier}
          placeholder="blur"
          className="object-cover h-full  rounded-md lg:order-1 transition-opacity"
        />
        <FormParticulier />
        <RotateCwSquareIcon
          size={32}
          className="z-100 top-4 right-4 text-slate-600 absolute cursor-pointer  drop-shadow-xl shadow-black"
          onClick={showProfessionnel}
        />
      </MotionDiv>
      <MotionDiv
        style={{ zIndex: zIndex2 }}
        transition={{ duration: 0.5 }}
        animate={controls2}
        initial={{ opacity: 0 }}
        className="max-w-[min(100%,1100px)] w-full h-fit  min-w-96  grid lg:grid-cols-3 max-lg:grid-rows-3 relative row-start-1 col-start-1 m-auto "
      >
        <FormEntreprise />
        <Image
          width={1250}
          height={833}
          alt=""
          src={imageProfetionnel}
          placeholder="blur"
          className="object-cover h-full lg:rounded-tr-md rounded-br-md max-lg:rounded-bl-md order-1 "
        />
        <RotateCwSquareIcon
          size={32}
          className="z-100 top-4 right-4 text-slate-600 lg:text-slate-300  absolute cursor-pointer  drop-shadow-sm shadow-black"
          onClick={showParticulier}
        />
      </MotionDiv>
    </MotionDiv>
  );
}
