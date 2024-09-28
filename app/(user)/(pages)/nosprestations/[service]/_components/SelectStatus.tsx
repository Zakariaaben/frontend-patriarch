"use client";

import { MotionDiv } from "@/components/User Components/motionComponents";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const SelectStatus = () => {
  const [status, setStatus] = useState<"particulier" | "entreprise" | "bureau">(
    "particulier"
  );
  return (
    <div className="bg-slate-100 rounded-lg p-6">
      <div className="text-lg">
        Pour les
        <select
          name="status"
          id="status"
          className="cursor-pointer p-1 text-lg font-bold outline-none bg-slate-100"
          onChange={(e) => setStatus(e.target.value as any)}
        >
          <option value="particulier" className="cursor-pointer">
            Particuliers
          </option>
          <option value="entreprise">Entreprises</option>
          <option value="bureau">Bureaux d'étude</option>
        </select>
      </div>

      <AnimatePresence mode="wait">
        {status === "bureau" ? (
          <MotionDiv
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key={status}
            className="flex flex-col gap-3 my-4"
          >
            <p>
              <strong> ⚫ Patri-Arch-Plus</strong> propose ses services pour
              l'exécution des missions suivantes :
            </p>
            <p>
              <strong>1</strong>. Relevé métrique et architectural du bâtiment.
            </p>
            <p>
              <strong>2</strong>. Etablissement d'un diagnostic détaillé des
              désordres existant avec identification de leurs origines.
            </p>
            <p>
              <strong>3</strong>. Etablissement de projet de confortement et de
              réhabilitation du bâtiment.
            </p>
            <p>
              <strong>4</strong>. Elaboration de modélisation des projets en 3D
              et images de synthèses.
            </p>
            <p>
              <strong>5</strong>. Exécution du suivi des travaux de
              réhabilitation jusqu'à réception du projet.
            </p>
          </MotionDiv>
        ) : status === "entreprise" ? (
          <MotionDiv
            key={status}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-3 my-4"
          >
            <p>
              <strong> ⚫ Patri-Arch-Plus</strong> propose ses services pour
              l'exécution des missions suivantes :
            </p>
            <p>
              <strong>1</strong>. Etablissement de vos dossiers de soumission et
              études de prix .
            </p>
            <p>
              <strong>2</strong>. Suivi et Conduite des travaux .
            </p>
            <p>
              <strong>3</strong>. Exécution, des métrés, attachement et
              élaboration des situations de travaux .
            </p>
          </MotionDiv>
        ) : (
          <MotionDiv
            key={status}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-3 my-4"
          >
            <p>
              <strong> ⚫ Patri-Arch-Plus</strong> propose ses services pour
              l'exécution des missions suivantes :
            </p>
            <p>
              <strong>1</strong>. Elaboration de projet de réhabilitation ou de
              réaménagement d'appartements ou de construction diverses .
            </p>
            <p>
              <strong>2</strong>. Suivi et Conduite des travaux .
            </p>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectStatus;
