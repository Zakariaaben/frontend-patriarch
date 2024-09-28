import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Restau = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 font-medium">
      <h2 className="text-xl font-bold text-center border-2 border-customcolors-primary-50 py-4 my-4">
        Études De Restauration & Réhabilitation
      </h2>
      <p className="sm:text-center py-4">
        <strong> Patri-Arch-Plus </strong> se spécialise dans les études de
        réhabilitation et de restauration de bâtiments Anciens ou/et a caractère
        historique.
      </p>{" "}
      {/* <div className="w-full aspect-video bg-slate-400 rounded-lg my-4"></div> */}
      <Accordion type="multiple" className="gap-8 flex flex-col">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            Recherches historique et documentaire sur le bâtiment
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            <strong> Patri-Arch-Plus </strong> entame l'étude de restauration
            par une recherche historique et documentaire sur le bâtiment objet
            de l'étude de restauration ou de réhabilitation. Cette recherche
            permet de retrouver éventuellement des textes ou images d'archives
            en relation avec le bâtiment ou de son environnement immédiat. Ce
            travail nous permet d'arrêter la période de construction du bâtiment
            ainsi que les transformations éventuelles qu'il aura subi durant son
            existence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            Exécution des relevés de l'Etat des lieux.
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Le relevé métrique et architectural du bâtiment est une étape
            fondamentale dans une étude de restauration ou de réhabilitation.
            Elle permet en effet une compréhension approfondie du bâtiment, dans
            ses dimensions métriques, architecturales et constructives. Nos
            collaborateurs de par leur grande expérience de ce type d'opération
            interviennent sur site avec un équipement adéquat (Appareil
            topographique, laser-mètre, station informatique portable) pour la
            représentation graphique du bâtiment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            Diagnostic et état sanitaire du bâtiment
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Les dégradations et dommages physiques et fonctionnelles qu'a subit
            le bâtiment sont reportées sur les relevés graphiques déjà élaborés.
            Des séances de concertation regroupant les différents
            collaborateurs, sous la direction de l'architecte des sites et
            monuments sont organisées au bureau pour arrêter de manière précise
            l'origine des désordres et énoncer les principes de solutions à
            apporter pour y remédier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold">
            Projet de restauration ou de réhabilitation
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Les principes de solution arrêtés dans la phase précédente sont mise
            en forme dans un dossier d'exécution englobant les opérations de
            confortement nécessaires puis de restauration ou de réhabilitation
            selon la nature du bâtiment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold">
            Elaboration du cahier des charges
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            Compétent pour assurer des missions de maîtrise d'œuvre, notre
            cabinet d'architecture assure le suivi des travaux, la coordination
            entre les différents intervenants jusqu'à la réception du projet.
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
            Compétent pour assurer des missions de maîtrise d'œuvre,{" "}
            <strong> Patri-Arch-Plus </strong> assure le suivi des travaux, la
            coordination entre les différents intervenants jusqu'à la réception
            du projet de restauration ou de réhabilitation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Restau;
