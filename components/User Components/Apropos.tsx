"use client";
import Image from "next/image";
import AppearOnScroll from "./AppearOnScroll";
import InfoPart from "./InfoPart";
import { MotionDiv } from "./motionComponents";

const Content: ContentInterface[] = [
  {
    title: "Devis",
    step: "Etape 01",
    content:
      "Ceci est une petite description de la premiere partie de cette phardserfoe  vreaiment. Dolor dolorem tempore perspiciatis esse delectus possimus omnis! Ea provident expedita amet blanditiis distinctio quas quaerat vitae doloremque rem est, numquam tenetur.",
  },
  {
    title: "Etude",
    step: "Etape 02",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, repellendus necessitatibus rerum facere at, fuga voluptates eligendi itaque voluptas maiores illum eum temporibus exercitationem sunt cupiditate quas ullam neque maxime?",
  },
  {
    title: "Suivi",
    step: "Etape 03",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos quidem explicabo nulla hic. Iure labore maxime, sapiente expedita, natus dolorem voluptate fugiat officiis voluptates aperiam ut, ipsam magnam consequuntur.",
  },
];

const Apropos = () => {
  return (
    <>
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="max-w-7xl mx-auto sm:mx-0 py-10 px-4 sm:py-24 sm:px-12 z-10 overflow-visible relative "
      >
        <AppearOnScroll>
          <div className="flex flex-col w-full sm:w-[500px] gap-12 z-20">
            {Content.map((c, index) => (
              <InfoPart content={c} index={index} key={index} />
            ))}
            <Image
              src={"/software-engineer-animate.svg"}
              alt=""
              width={800}
              height={800}
              className=" object-contain flex flex-row items-center sm:absolute sm:left-[calc(100vw/2)] top-0 max-sm:left-[-100px]  pointer-events-none"
            />
          </div>
        </AppearOnScroll>
      </MotionDiv>
    </>
  );
};
export default Apropos;
