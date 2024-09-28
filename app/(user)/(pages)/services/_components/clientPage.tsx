"use client";

import { Card } from "@/components/ui/card";
import { stagger, useAnimate } from "framer-motion";
import { useState } from "react";

export function ClientPage() {
  const [scope, animate] = useAnimate();
  const [service, setService] = useState<
    "Architecture" | "Restauration" | "Assisstance" | null
  >(null);
  const handleClick = async (code: string) => {
    await animate(
      scope.current.querySelectorAll(".card"), // Animating each child (card) individually
      {
        x: -1000, // Moving the cards 800px to the right
        opacity: 0, // Adding opacity effect during the animation
      },
      {
        ease: "easeIn",
        delay: stagger(0.2),
        duration: 1,
      }
    );
    setService(code as "Architecture" | "Restauration" | "Assisstance");
  };
  return (
    <>
      {!service && (
        <div
          className="grid grid-cols-1 gap-8 w-full flex-1  items-center justify-center "
          ref={scope}
        >
          {services.map((service, index) => (
            <div key={index} className="card place-self-center">
              <Card
                className={
                  shadow +
                  "   w-[400px] h-[200px]  text-center p-2  flex text-xl items-center font-bold justify-center cursor-pointer hover:bg-slate-50 transition min-h-full"
                }
                onClick={() => handleClick(service.code)}
              >
                {service.nom}
              </Card>
            </div>
          ))}
        </div>
      )}
      {service === "Architecture" && <div>Architecture</div>}
      {service === "Restauration" && <div>Restauration</div>}
      {service === "Assisstance" && <div>Assisstance</div>}
    </>
  );
}

export const services = [
  { nom: "Études D'Architecture", code: "Architecture" },
  { nom: "Études De Restauration & Réhabilitation", code: "Restauration" },
  { nom: "Assisstance Technique & Conseils", code: "Assisstance" },
];
const shadow =
  "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]";
