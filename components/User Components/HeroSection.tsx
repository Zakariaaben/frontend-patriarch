"use client";
import { ArrowRight } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import lines from "../../public/lines.png";
import { MotionDiv, MotionSpan } from "./motionComponents";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Hero() {
  return (
    <MotionDiv
      animate={{
        opacity: [0, 1],
      }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, once: true }}
    >
      <div className={roboto.className + " relative"}>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 z-10 relative">
          <div className="text-left sm:text-center">
            <p
              className={
                "mt-1 text-4xl font-extrabold text-secondarycolor-300 sm:text-5xl sm:tracking-wide lg:text-6xl spa"
              }
            >
              Innovation.
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-text-100 font-semibold grid grid-cols-1 gap-8  ">
              Le futur de l&apos;architecture et de la construction est là. Une
              toute nouvelle façon de concevoir et de construire des bâtiments.
              <MotionSpan
                className="text-2xl font-semibold cursor-pointer text-secondarycolor-300 hover:text-secondarycolor-100 flex items-center justify-left sm:justify-center gap-2 hover:gap-4 transition-[color,gap]"
                whileInView={{
                  translateX: [0, 10, -10, 10, -10, 10, -10, 0],
                }}
                transition={{
                  delay: 3,
                  duration: 0.8,
                  repeatDelay: 8,
                  repeat: Infinity,
                  bounce: 0.5,
                }}
              >
                Rejoingnez nous !
                <ArrowRight className="h-8 w-8 inline-block" />
              </MotionSpan>
            </p>
          </div>
        </div>
        <div className="absolute h-full w-screen bottom-[-100px] right-0 transform z-0 min-w-[800px]">
          <Image src={lines} alt="" fill />
        </div>
      </div>
    </MotionDiv>
  );
}
