"use client";
import { ArrowRight } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
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
      className="relative"
    >
      <div className={roboto.className + "  z-10"}>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-left sm:text-center">
            <p
              className={
                "mt-1 text-4xl font-extrabold text-[#4357AD] sm:text-5xl sm:tracking-wide lg:text-6xl spa"
              }
            >
              Innovation.
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-slate-700 font-semibold grid grid-cols-1 gap-8">
              Le futur de l&apos;architecture et de la construction est là. Une
              toute nouvelle façon de concevoir et de construire des bâtiments.
              <MotionSpan
                className="text-2xl font-semibold cursor-pointer text-slate-600 hover:text-slate-800 flex items-center justify-left sm:justify-center gap-2 hover:gap-4 transition-[color,gap] "
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
                <ArrowRight className="h-8 w-8 inline-block " />
              </MotionSpan>
            </p>
          </div>
        </div>
      </div>
      <Image
        src={"/lines.png"}
        alt=""
        layout="fill"
        className=" z-0 bottom-[-100px] right-[-100px] "
      />
    </MotionDiv>
  );
}
