"use client";
import { ArrowRight, QuoteIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { MotionDiv, MotionP, MotionSpan } from "./motionComponents";
import BG from "/public/Ghardaia_view.jpg";

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
      <div className={" relative "}>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 z-10 relative ">
          <div className="text-left sm:text-center">
            <h1
              className={
                "mt-1  flex flex-col justify-start text-[#0D0D0D] text-customcolors-background"
              }
            >
              <div className="w-fit sm:w-auto ">
                <AnimatedText
                  className="text-3xl font-extrabold   sm:text-5xl sm:tracking-wide "
                  text="Patrimoine et Architecture:"
                />
              </div>

              <div className="w-fit sm:w-auto">
                <AnimatedText
                  className="text-3xl font-extrabold sm:text-5xl"
                  text="Le savoir"
                />
                <MotionSpan
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.75, duration: 0.75 }}
                  initial={{ opacity: 0 }}
                  className="text-3xl font-extrabold sm:text-5xl"
                >
                  Batir,{" "}
                </MotionSpan>
                <MotionSpan
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 1.5, duration: 0.75 }}
                  initial={{ opacity: 0 }}
                  className="text-3xl font-extrabold sm:text-5xl"
                >
                  Sauvegarder{" "}
                </MotionSpan>
                <MotionSpan
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 2.5, duration: 0.75 }}
                  initial={{ opacity: 0 }}
                  className="text-3xl font-extrabold sm:text-5xl"
                >
                  et Restaurer
                </MotionSpan>
              </div>
            </h1>

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
          objectPosition="center"
          className="absolute w-full object-cover top-0  "
        />
      </div>
      <h2 className="max-w-2xl  mt-5 mx-auto text-xl flex flex-col text-[#171c1a] font-semibold  max-sm:text-justify p-4">
        <QuoteIcon className="fill-black" />
        <div className="w-full relative h-full">
          <MotionP animate={{ opacity: [0, 1] }} className="absolute top-0">
            Le futur de l&apos;architecture et de la construction est là. Une
            toute nouvelle façon de concevoir et de construire des bâtiments.
          </MotionP>
          <MotionP className="absolute top-0">
            Le futur de l&apos;architecture et de la construction est là. Une
            toute nouvelle façon de concevoir et de construire des bâtiments.
          </MotionP>
        </div>

        <QuoteIcon className="fill-black self-end" />
      </h2>
    </MotionDiv>
  );
}

// ("use client");

// export const pulseTexts = ({ texts }: { texts: string[] }) => {
//   const [currIndex, setCurrIndex] = useState();
//   return (
//     <>
//       <Animatepresence></Animatepresence>
//     </>
//   );
// };
