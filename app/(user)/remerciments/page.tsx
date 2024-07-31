import { CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

function Remerciments() {
  return (
    <div className="min-h-[100dvh] gap-1 flex justify-center flex-col p-4 text-center">
      <Link
        href="/"
        className="flex flex-row text-lg items-center cursor-pointer text-customcolors-text font-semibold group  absolute gap-2 top-4 left-4"
      >
        <ChevronLeft className=" group-hover:-translate-x-2 transition" />
        Retourner à la page d'accueil
      </Link>

      <CheckCircle
        className="w-full mb-6  text-customcolors-secondary-500"
        size={100}
      />
      <h1 className="text-4xl font-bold ">Merci de nous faire confiance !</h1>
      <p className="text-lg ">
        Votre demande a bien été prise en comptre et sera traitée dans les plus
        brefs delais !
      </p>
      <p className="text-xl">
        Nous veillons chanque jour à satisfaire vos besoin.
      </p>
      <p className="text-xl font-bold">Voyons Grand</p>
    </div>
  );
}

export default Remerciments;
