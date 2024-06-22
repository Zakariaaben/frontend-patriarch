"use client";
import React from "react";
import { Button } from "./ui/button";
import { handleLogout } from "@/utils/Auth/handleLogout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alertDialog";
import { MoonLoader } from "react-spinners";

export default function Logout({ className }: { className?: string }) {
  const [loading, setLoading] = React.useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={className}>
          Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Êtes vous sûr de vouloir vous déconnecter?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Vous allez être redirigé vers la page d'accueil, vous devrez vous
            reconnecter pour accéder à votre compte.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="w-full  flex justify-center sm:justify-end">
          <AlertDialogFooter className="w-[90%] gap-1 ">
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="p-0">
              <Button
                variant={"destructive"}
                className="w-full"
                onClick={() => handleLogout(setLoading)}
              >
                Continuer
                {loading && (
                  <MoonLoader
                    color={"#ffffff"}
                    speedMultiplier={0.5}
                    size={20}
                  />
                )}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
