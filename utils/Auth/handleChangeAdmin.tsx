import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const handleChangeAdmin = async (
  e: React.FormEvent<HTMLFormElement>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: (value: SetStateAction<boolean>) => void,
  setMessage: Dispatch<SetStateAction<string>>,
  formData: AdminFormType,
  confirmedPassword: string
) => {
  e.preventDefault();
  setMessage("");
  setLoading(true);

  if (formData.password !== confirmedPassword) {
    setLoading(false);
    return setMessage("Passwords do not match");
  }

  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/api/auth/changeadmin",
      formData,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        formData,
        {
          withCredentials: true,
        }
      );
      return setIsOpen(false);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
