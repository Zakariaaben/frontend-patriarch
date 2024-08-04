"use client";
import { ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { MotionDiv, MotionSpan } from "./motionComponents";
import BG from "/public/Ghardaia_view.jpg";
const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Hero() {
  return (
    <MotionDiv
      animate={{
        opacity: [0, 1],
      }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, once: true }}
      className="relative mb-12"
    >
      <div
        className={" relative bg-black bg-opacity-20 " + montserrat.className}
      >
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 z-10 relative ">
          <div className="text-left sm:text-center">
            <h1
              className={
                "mt-1  flex flex-col justify-start  text-customcolors-background"
              }
            >
              <div className="w-fit sm:w-auto ">
                <AnimatedText
                  className="text-3xl font-extrabold    sm:text-5xl sm:tracking-wide "
                  text="PATRI-ARCH-PLUS"
                />
              </div>
              <div className="w-fit sm:w-auto ">
                <AnimatedText
                  className="text-2xl font-extrabold text-green-900  sm:text-4xl sm:tracking-wide "
                  text="20 Ans d'Experience"
                />
              </div>

              <div className="w-fit sm:w-auto">
                <AnimatedText
                  className="text-3xl font-semibold sm:text-5xl"
                  text="Dans l'art de Batir,"
                />

                <MotionSpan
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 1.5, duration: 0.75 }}
                  initial={{ opacity: 0 }}
                  className="text-3xl font-semibold sm:text-5xl"
                >
                  La sauvegarde{" "}
                </MotionSpan>
                <MotionSpan
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 2.5, duration: 0.75 }}
                  initial={{ opacity: 0 }}
                  className="text-3xl font-semibold sm:text-5xl"
                >
                  et la Restauration des monuments{" "}
                </MotionSpan>
              </div>
            </h1>

            <Link href="/contact">
              <button className="w-fit py-3 mt-8 px-4 rounded-xl bg-customcolors-primary-300 ">
                <MotionSpan
                  className="text-md font-semibold cursor-pointer text-background  hover:text-opacity-90 flex items-center justify-left hyphens-auto gap-2 hover:gap-4 transition-[color,gap]"
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
                  Parlez nous de votre projet !
                  <ArrowRight className="h-8 w-8 inline-block" />
                </MotionSpan>
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={BG}
          alt="Background Image hero section Architecture"
          fill
          priority
          className="absolute w-full object-cover top-0 z-[-1] "
        />
      </div>
      <h2 className="max-w-2xl  mt-5 mx-auto text-base sm:text-xl flex flex-col text-[#171c1a] font-semibold  max-sm:text-left p-4">
        <span className=" items-center gap-2">
          <span className="text-2xl leading-3 mx-1 ">&laquo;</span> Le monument
          a pour but de faire revivre au présent un passé englouti dans le temps{" "}
          <span className="text-2xl leading-3 mx-1  ">&raquo;</span>
        </span>

        <span className="text-right text-xs min-w-full my-2">
          Françoise Choay dans L&apos;Allégorie du patrimoine (1992)
        </span>
      </h2>
    </MotionDiv>
  );
}
