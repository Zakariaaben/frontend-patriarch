import { Dispatch, SetStateAction } from "react";
import { client } from "../api/client";

export const handleChangeAdmin = async (
  e: React.FormEvent<HTMLFormElement>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: (value: SetStateAction<boolean>) => void,
  setMessage: Dispatch<SetStateAction<string>>,
  formData: AdminFormType,
  confirmedPassword: string,
  router: any,
  triggerChangeAdmin: ((value: boolean) => void) | undefined,
  toast: any
) => {
  e.preventDefault();
  setMessage("");
  setLoading(true);

  if (formData.password !== confirmedPassword) {
    setLoading(false);
    return setMessage("Passwords do not match");
  }

  try {
    const response = await client.post(
      "/api/users/changecredentials",
      formData
    );

    if (response.status === 200) {
      const response = await client.post("/api/auth/login", formData);
      setIsOpen(false);
      if (triggerChangeAdmin) triggerChangeAdmin(false);
      return router.refresh();
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
    toast({
      title: "Informations Modifiées avec succès",
      description: "Nouveau nom d'utilisateur : " + formData.username,
    });
  }
};
