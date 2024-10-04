import SelectStatus from "./SelectStatus";

const Assistance = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 font-medium">
      <h2 className="text-xl font-bold text-center border-2 border-customcolors-primary-50 py-4 my-4">
        Assisstance Technique & Conseils
      </h2>
      {/* <div className="w-full aspect-video bg-slate-400 rounded-lg my-4"></div> */}
      <p className="sm:text-center py-4">
        <strong>Vous êtes Bureau d'étude </strong> et vous recherchez un
        partenaire professionnel pour vous accompagner dans l'exécution de Vos
        projet de réhabilitation du vieux Bâti .
      </p>
      <p className="sm:text-center py-4">
        <strong>Vous êtes une entreprise </strong> en charge de la réalisation
        de projet de réhabilitation.
      </p>
      <p className="sm:text-center py-4">
        <strong>Vous êtes Particulier </strong> et vous voulez réhabiliter votre
        maison ou appartement .
      </p>
      <SelectStatus />
    </div>
  );
};

export default Assistance;
