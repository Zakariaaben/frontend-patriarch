"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { MotionDiv, MotionSpan } from "./motionComponents";
import BG from "/public/ccchaos.svg";

export default function Hero() {
  return (
    <MotionDiv
      animate={{
        opacity: [0, 1],
      }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, once: true }}
      className=""
    >
      <div className={" relative mb-12"}>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 z-10 relative ">
          <div className="text-left sm:text-center">
            <h1 className={"mt-1  flex flex-col justify-start text-[#0D0D0D]"}>
              <div className="w-fit sm:w-auto">
                <AnimatedText
                  className="text-3xl font-extrabold   sm:text-4xl sm:tracking-wide lg:text-6xl"
                  text="Elevez Le Design"
                />
              </div>

              <div className="w-fit sm:w-auto">
                <AnimatedText
                  className="text-3xl font-extrabold sm:text-4xl sm:tracking-wide lg:text-6xl"
                  text="À Un Tout Autre Niveau."
                />
              </div>
            </h1>

            <h2 className="max-w-2xl mt-5 mx-auto text-xl text-[#171c1a] font-semibold grid grid-cols-1 gap-8 max-sm:text-justify ">
              Le futur de l&apos;architecture et de la construction est là. Une
              toute nouvelle façon de concevoir et de construire des bâtiments.
            </h2>
            <Link href="/contact">
              <button className="w-fit py-3 mt-8 px-4 rounded-xl bg-customcolors-primary-300 ">
                <MotionSpan
                  className="text-md font-semibold cursor-pointer text-background  hover:text-opacity-90 flex items-center justify-left sm:justify-center gap-2 hover:gap-4 transition-[color,gap]"
                  whileInView={{
                    translateX: [0, 10, -10, 10, -10, 0],
                  }}
                  transition={{
                    delay: 3,
                    duration: 0.8,
                    repeatDelay: 8,
                    repeat: Infinity,
                    bounce: 0.5,
                  }}
                >
                  Demander votre devis gratuit
                  <ArrowRight className="h-8 w-8 inline-block" />
                </MotionSpan>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={BG}
        alt="Background Image hero section Architecture"
        height={600}
        className="absolute  top-0  left-1/2 -translate-x-1/2 opacity-60 "
      />
    </MotionDiv>
  );
}
