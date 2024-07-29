"use client";
import Image from "next/image";
import InfoPart from "./InfoPart";
import { MotionDiv } from "./motionComponents";
import YoucefPhoto from "/public/YoucefPhoto.jpg";

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
        className=" flex flex-col md:flex-row  mx-auto sm:mx-0  px-4 sm:my-24 sm:px-12 z-10 overflow-hidden relative "
      >
        <div className="flex flex-col   w-[min(100%,900px)]  gap-12 p-2 bg-slate-100">
          {Content.map((c, index) => (
            <InfoPart content={c} index={index} key={index} />
          ))}
        </div>

        <div className=" min-h-full flex p-8 bg-heavy-metal-800 border-heavy-metal-800 border-2 text-slate-300 flex-col">
          <h2 className="text-3xl font-extrabold text-white">
            Benhamiche Youcef
          </h2>
          <p>Architecte Agréé </p>
          <p>
            <span className="text-white">Spécialité: </span> Réstauration et
            Réhabilitation
          </p>
          <div className="flex flex-col lg:flex-row gap-2   p-2">
            <Image
              src={YoucefPhoto}
              alt="Youcef Benhamiche "
              height={200}
              className="object-cover    self-center"
            />
            <p className="text-justify text-white flex items-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              blanditiis possimus molestiae numquam totam, soluta sapiente atque
              perspiciatis magnam? Voluptatibus necessitatibus soluta molestias
              atque nihil laudantium officia explicabo minus eligendi.
            </p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};
export default Apropos;
