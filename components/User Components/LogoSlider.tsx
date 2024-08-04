"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { MotionDiv } from "./motionComponents";
import Logo1 from "/public/logos/Logo1.svg";
import Logo2 from "/public/logos/Logo2.svg";
import Logo3 from "/public/logos/Logo3.svg";
import Logo4 from "/public/logos/Logo4.png";

const logos = [
  { logo: Logo1, text: "Cest le logo 1" },
  { logo: Logo2, text: "" },
  { logo: Logo3, text: "logo3 foesuaf" },
  { logo: Logo4, text: "" },
];

const LogoInner = () => {
  const [ref, bounds] = useMeasure();

  return (
    <>
      <MotionDiv
        className={"flex   items-center w-fit gap-4 animate-slide-left "}
        style={{ "--translate-x": `-${bounds.width}px` } as React.CSSProperties}
        ref={ref}
      >
        {logos.map((logo, index) => (
          <div className={`flex flex-col items-center  w-[200px] `} key={index}>
            <Image
              src={logo.logo}
              alt="logo"
              className="object-contain h-full w-auto "
            />
            <p className="font-semibold uppercase">{logo.text}</p>
          </div>
        ))}
      </MotionDiv>
    </>
  );
};

const LogosSlider = () => {
  return (
    <div className="flex flex-col gap-8 mb-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center">
          Nous ont fait confiance
        </h1>
      </div>
      <motion.div
        className={
          "relative sm:w-[800px] w-screen overflow-hidden  m-auto  flex "
        }
        style={{
          maskImage: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0)
          )`,
        }}
      >
        <LogoInner />
        <LogoInner />
      </motion.div>
    </div>
  );
};

export default LogosSlider;
