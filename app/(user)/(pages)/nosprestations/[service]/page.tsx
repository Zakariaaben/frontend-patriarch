import { MotionDiv } from "@/components/User Components/motionComponents";
import Archi from "./_components/Archi";
import Assistance from "./_components/Assistance";
import Restau from "./_components/Restau";
import Link from "next/link";

const ServiceDetailsPage = ({
  params,
}: {
  params: {
    service: string;
  };
}) => {
  const service = params.service.toLowerCase();
  return (
    <>
      <div className="w-screen grid grid-cols-5 py-6 ">
        <aside className="max-xl:hidden flex flex-col gap-4  px-4 p-2 border-r-2 border-slate-200  text-slate-600 fixed  top-20 left-0  w-[250px] ">
          <Link
            href={"/nosprestations/architecture"}
            className="hover:text-customcolors-accent-200 duration-300 group relative w-fit"
          >
            Études d'architecture
            <div className="absolute top-full left-0 h-[2px] w-0 bg-slate-950 group-hover:w-full duration-300 ease-out" />
          </Link>
          <Link
            href={"/nosprestations/restauration"}
            className="hover:text-customcolors-accent-200 duration-300 group relative w-fit"
          >
            Études de Restauration & Réhabilitation
            <div className="absolute top-full left-0 h-[2px] w-0 bg-slate-950 group-hover:w-full duration-300 ease-out" />
          </Link>
          <Link
            href={"/nosprestations/assistance"}
            className="hover:text-customcolors-accent-200 duration-300 group relative w-fit"
          >
            Assistance Technique & Conseils
            <div className="absolute top-full left-0 h-[2px] w-0 bg-slate-950 group-hover:w-full duration-300 ease-out" />
          </Link>
        </aside>
        <MotionDiv
          className="h-full w-full flex flex-col gap-8 col-start-2 col-end-5 max-xl:col-span-5 "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
          {service === "architecture" && <Archi />}
          {service === "restauration" && <Restau />}
          {service === "assistance" && <Assistance />}
        </MotionDiv>
      </div>
    </>
  );
};
export default ServiceDetailsPage;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { service: "architecture" } },
      { params: { service: "restauration" } },
      { params: { service: "assistance" } },
    ],
    fallback: false,
  };
};
