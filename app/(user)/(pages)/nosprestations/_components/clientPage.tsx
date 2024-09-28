"use client";

import { Card } from "@/components/ui/card";
import { stagger, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

export function ClientPage() {
  const [scope, animate] = useAnimate();

  const router = useRouter();
  const handleClick = async (code: string) => {
    await animate(
      scope.current.querySelectorAll(".card"), // Animating each child (card) individually
      {
        x: -1000, // Moving the cards 800px to the right
        opacity: 0, // Adding opacity effect during the animation
      },
      {
        ease: "easeIn",
        delay: stagger(0.1),
        duration: 0.4,
      }
    );
    router.push(`/nosprestations/${code}`);
  };
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full flex-1  items-center justify-center max-w-[1000px] mx-auto px-4"
        ref={scope}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="card place-self-center md:last:col-span-2"
          >
            <Card
              className={
                shadow +
                "   w-[350px] h-[200px]  text-center p-2  flex text-xl items-center font-bold justify-center cursor-pointer hover:bg-slate-50 transition min-h-full"
              }
              onClick={() => handleClick(service.code)}
            >
              {service.nom}
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export const services = [
  { nom: "Études D'Architecture", code: "architecture" },
  { nom: "Études De Restauration & Réhabilitation", code: "restauration" },
  { nom: "Assisstance Technique & Conseils", code: "assistance" },
];
const shadow =
  "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]";
