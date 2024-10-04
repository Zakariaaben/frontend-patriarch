import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Archi = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 font-medium">
      <h2 className="text-xl font-bold text-center border-2 border-customcolors-primary-50 py-4 my-4">
        Études d'Architecture
      </h2>
      <p className="sm:text-center py-4">
        Notre Cabinet prend en charge toutes les étapes de votre projet. Chez
        <strong> Patri-Arch-Plus </strong>, nous cherchons avant tout à vous
        fournir un accompagnement professionnel et adapté avec un seul objectif,
        Votre Satisfaction
      </p>{" "}
      {/* <div className="w-full aspect-video bg-slate-400 rounded-lg my-4"></div> */}
      <Accordion type="multiple" className="gap-8 flex flex-col">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            État des lieux et prise de métrés
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Afin de concrétiser votre projet, nos experts interviennent
            directement sur site pour effectuer un relevé topographique du site
            si nécessaire, Sinon un recollement sera élaboré avec les documents
            et plans déjà existants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            Conception du projet
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Notre équipe d'architecte prend en charge la conception complète de
            votre projet. Afin de vous permettre de le visualiser au mieux, des
            plans en 2D et des vues 3D vous seront présentés.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            Elaboration du dossier administratif
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Après validation de l'étude, notre cabinet d'architecture prépare le
            dossier de Permis de construire qui sera soumis aux organismes
            compétents conformément à la réglementation en vigueur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold">
            Elaboration du dossier Génie Civil
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Après validation de l'étude, nos Ingénieurs procèdent à
            l'élaboration du Dossier Génie Civil à soumettre au CTC et en
            assurer le suivi jusqu'à l'approbation finale du dossier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold">
            Elaboration du cahier des charges
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Un cahier des charges détaillé sera élaboré, celui-ci comprendra les
            clauses administratives, descriptifs techniques et quantitatifs qui
            serviront de base au choix de l'entreprise de réalisation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-semibold">
            Estimation des coûts et délais
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Notre expérience en termes de maîtrise d'œuvre assurera une
            estimation financière précise du projet, une estimation de la durée
            du chantier et une viabilité du planning d'exécution des travaux.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg font-semibold">
            Coordination et suivi de chantier
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Compétent pour assurer des missions de maîtrise d'œuvre, notre
            cabinet d'architecture assure le suivi des travaux, la coordination
            entre les différents intervenants jusqu'à la réception du projet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Archi;
