import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { client } from "../api/client";

export const handleSignIn = async (
  event: React.FormEvent<HTMLFormElement>,
  formData: AdminFormType,
  setLoading: (loading: boolean) => void,
  setMessage: (message: string) => void,
  router: AppRouterInstance
) => {
  event.preventDefault();
  try {
    setLoading(true);
    const response = await client.post("/api/auth/login", formData);

    setMessage(response.data.Message);

    router.push("/dashboard", { scroll: false });
  } catch (error: any) {
    console.log(error);

    setMessage("Invalid username or password. Please try again.");
  } finally {
    setLoading(false);
  }
};
