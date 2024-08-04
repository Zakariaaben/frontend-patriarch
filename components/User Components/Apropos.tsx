"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./motionComponents";
import YoucefPhoto from "/public/YoucefPhoto.jpg";

const monserrat = Montserrat({ subsets: ["latin"] });

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
        className={
          "text-[14px] sm:text-base flex flex-col lg:flex-row  mx-auto sm:mx-0   px-2 mb-12 sm:px-12 z-10 overflow-hidden relative " +
          monserrat.className
        }
      >
        <div className=" min-h-full flex p-4 bg-customcolors-secondary-200   border-heavy-metal-800 border-2 text-customcolors-background flex-col">
          <div className="mb-4 max-sm:text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Benhamiche Youcef
            </h2>
            <p>Architecte Agréé </p>
            <p>
              Spécialisé dans la réstauration et la réhabilitation du vieux bâti
            </p>
          </div>
          <div className={"flex flex-col gap-4 font-medium  "}>
            <div className="flex items-center flex-col sm:flex-row gap-4 ">
              <Image
                src={YoucefPhoto}
                alt="Youcef Benhamiche "
                height={200}
                className="object-cover    self-center"
              />
              <p className="hyphens-auto text-left">
                <span className="text-lg font-semibold">Patri-Arch-Plus</span>{" "}
                est un cabinet d&apos;architecture installé à Alger, fondé par
                Mr{" "}
                <Link
                  href={"https://linkedin.com"}
                  target="_blank"
                  className="text-customcolors-primary-900 underline underline-offset-2  "
                >
                  Benhamiche Youcef
                </Link>{" "}
                en 2006. Il présente des compétences en restauration de
                monuments historiques, réhabilitation du vieux bâti et création
                architecturale. Il offre des services de conception et
                d&apos;assistance à la réalisation pour une clientèle publique
                et privée, sur l&apos;ensemble du territoire Algérien.
              </p>
            </div>
            <p className="text-left hyphens-auto">
              Composé d&apos;une équipe d&apos;architectes et d&apos;ingénieurs,
              notre cabinet peut répondre efficacement aux demandes les plus
              spécifiques. Grâce à un réseau de partenaires de confiance
              (Architectes restaurateurs qualifiés par le ministère de la
              culture, Ingénieurs en Génie-Civil et Corps d&apos;État
              Secondaires ...).{" "}
              <span className="text-lg font-semibold">Patri-Arch-Plus</span> a
              prouvé durant une vingtaine d&apos;années sa fiabilité et son
              efficacité dans la réalisation de divers projets de natures
              différentes (Constructions Neuves, Restauration de Monuments
              historiques et réhabilitation de bâtiments anciens.)
            </p>
          </div>
        </div>
        <div className="flex flex-col font-medium my-4 sm:min-w-[400px] max-w-[700px] w-[min(1200px,100%)] p-2 ">
          <h3 className="text-2xl mb-4 font-semibold max-sm:text-center ">
            Style et philosophie{" "}
          </h3>
          <div>
            <p className="text-left hyphens-auto">
              <strong>Patri-Arch-Plus</strong> développe dans ses projets un
              langage architectural qui lui est spécifique en réinventant des
              formes classiques dans des espaces épurés, ou la recherche du
              détail ouvre une perspective vers l&apos;architecture
              d&apos;intérieur et le design.
              <br />
              Les spécificités culturelles et techniques des réalisations de{" "}
              <strong className="">Patri-Arch-Plus</strong> ont comme fondements
              :{" "}
            </p>
            <ul className="flex flex-col list-disc p-4 font-semibold hyphens-auto justify-center">
              <li>
                La lecture architecturale approfondie de l&apos;existant et son
                interprétation.
              </li>
              <li>
                La recherche du dialogue entre les éléments historiques et
                contemporains.
              </li>
              <li>La mesure et la proportion des espaces habitables.</li>
              <li>
                La valorisation des métiers et des connaissances artisanales.
              </li>
              <li> La précision du détail constructif.</li>
            </ul>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};
export default Apropos;
