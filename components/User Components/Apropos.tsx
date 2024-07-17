"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Content = [
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="max-w-7xl mx-auto sm:mx-0 py-10 px-4 sm:py-24 sm:px-12 z-10 overflow-x-clip overflow-y-visible relative"
      >
        <div className="flex flex-col w-full sm:w-[500px] gap-12 relative overflow-y-visible ">
          {Content.map((c) => (
            <div className="relative">
              <div>
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <span>{c.step}</span>
              </div>
              <p className="p-2 font-medium text-[18px] tracking-tight ">
                {c.content}
              </p>
              <div className="absolute h-[2px] bg-slate-800 bottom--14 w-full"></div>
            </div>
          ))}
          <Image
            src={"/image.png"}
            alt=""
            width={600}
            height={200}
            className="object-contain absolute right-[-120%]  max-sm:hidden bottom-[-200px] "
          />
        </div>
      </motion.div>
    </>
  );
};
export default Apropos;
