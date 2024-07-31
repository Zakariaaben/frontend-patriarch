"use client";
import Image from "next/image";
import InfoPart from "./InfoPart";
import {MotionDiv} from "./motionComponents";
import YoucefPhoto from "/public/YoucefPhoto.jpg";
import {Inter} from "next/font/google";


const inter = Inter({subsets: ["latin"]})


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
                viewport={{once: true}}
                transition={{duration: 0.5}}
                variants={{
                    visible: {opacity: 1},
                    hidden: {opacity: 0},
                }}
                className=" flex flex-col lg:flex-row  mx-auto sm:mx-0 gap-4  px-4 sm:my-24 sm:px-12 z-10 overflow-hidden relative "
            >
                <div
                    className=" min-h-full flex p-8 bg-customcolors-secondary-200   border-heavy-metal-800 border-2 text-slate-300 flex-col">
                    <h2 className="text-3xl font-extrabold text-white">
                        Benhamiche Youcef
                    </h2>
                    <p>Architecte Agréé </p>
                    <p>
                        <span className="text-white">Spécialité: </span> Réstauration et
                        Réhabilitation
                    </p>
                    <div className={"flex flex-col gap-4  p-4 " + inter.className}>
                        <div className="flex items-center gap-2 ">
                            <Image
                                src={YoucefPhoto}
                                alt="Youcef Benhamiche "
                                height={200}
                                className="object-cover    self-center"
                            />
                            <p className="text-justify  ">
                                <strong>Patri-Arch-Plus</strong> est un cabinet d&aspos;architecture
                                fondé en 2006 et installée à Alger. Il présente des compétences
                                en restauration de monuments historiques, réhabilitation
                                patrimoniale et création architecturale. Il offre des services
                                de conception et de réalisation à une clientèle publique ou
                                privée, sur ensemble du territoire Algérien.
                            </p>
                        </div>


                        Composé d&apos;une équipe d&apos;architectes et d&apos;ingénieurs compétents,
                        notre cabinet peut répondre efficacement aux demandes les plus
                        spécifiques. Grâce à un réseau de partenaires de confiance
                        (Architectes restaurateurs qualifiés par le ministère de la
                        culture, Ingénieurs en Génie-Civil et Corps d&apos;État Secondaires
                        ...). <strong>Patri-Arch-Plus</strong> a prouvé durant une
                        vingtaine d&apos;années sa fiabilité et son efficacité dans la
                        réalisation de divers projets de natures différentes
                        (Constructions Neuves, Restauration de Monuments historiques
                        et réhabilitation de bâtiments anciens.)
                    </div>
                </div>
                <div className="flex flex-col   min-w-[400px] max-w-[700px] w-[min(1200px,100%)] gap-12 p-2 ">
                    {Content.map((c, index) => (
                        <InfoPart content={c} index={index} key={index}/>
                    ))}
                </div>
            </MotionDiv>
        </>
    );
};
export default Apropos;
