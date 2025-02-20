"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { MotionDiv } from "./motionComponents";
import Logo1 from "/public/logos/apc.png";
import Logo2 from "/public/logos/Logo2.svg";
import Logo3 from "/public/logos/biskra.jpeg";
import Logo4 from "/public/logos/Logo4.png";

const logos = [
  { logo: Logo1, text: "APC ALGER CENTRE" },
  { logo: Logo2, text: "" },
  { logo: Logo1, text: "APC Dar El Beida" },
  { logo: Logo3, text: "Direction de la culture Biskra" },
  { logo: Logo1, text: "APC Khraicia" },
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
          <div
            className={`flex flex-col items-center  w-[200px] h-44 mx-10`}
            key={index}
          >
            <Image
              src={logo.logo}
              alt="logo"
              className="object-contain h-full w-auto "
            />
            <p className="font-bold uppercase text-base text-center">
              {logo.text}
            </p>
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
