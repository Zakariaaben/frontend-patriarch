"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Hero() {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{ delay: 0.5 }}
    >
      <div className={roboto.className + " sticky"}>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 z-10">
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
              <motion.span
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
              </motion.span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const hoverAnimation = {};
